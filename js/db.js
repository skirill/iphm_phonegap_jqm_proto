var db;
var cache = {};

var selectedAlertId;

function dbAddAlert(alert, callback)
{
    if (!db)
    {
        return;
    }

    db.transaction(function(tx)
    {
        // id is a primary key, sqlite auto increments integer primary keys so we omit id
        tx.executeSql(
            "INSERT INTO Alerts (" +
                "monitorId, name, state, duration, prevstate, pDate, pTime, mDate, mTime, message) values(" + 
                "?,         ?,    ?,     ?,        ?,         ?,     ?,     ?,     ?,     ?" +
            ")",
            [
                alert.monitorId,
                alert.name,
                alert.state,
                alert.duration,
                alert.prevstate,
                alert.pDate,
                alert.pTime,
                alert.mDate,
                alert.mTime,
                alert.message
            ],
            function(tx, result)
            {
                alert.id = result.insertId;
                if (callback)
                {
                    callback();
                }
            }, null
        );
    });
}

function dbCreate()
{
    if (!db)
    {
        return;
    }

    db.transaction(function(tx)
    {
        // TODO: DB should contain two time values: time when a problem took place (pTime/pDate)
        // and time when alert message was received (mTime/mDate)
        // in fake data this is the same but in real data we should keep the distinction
        // allerts are sorted by arrival time but in alert details problem time should be present
        // TODO: convert both date fields to integer time - # seconds since Jan 1, 1970
        tx.executeSql(
            "CREATE TABLE Alerts ( " +
                "id INTEGER PRIMARY KEY UNIQUE, " + 
                "monitorId INTEGER, " + 
                "name TEXT, " + 
                "state TEXT, " + 
                "duration TEXT, " +
                "prevstate TEXT, " +
                "pDate TEXT, " + 
                "pTime TEXT, " + 
                "mDate TEXT, " + 
                "mTime TEXT, " + 
                "message TEXT" + 
            ")", [], function(tx)
        {
            console.log("Alerts table created");
    
            if (testAddFakeAlerts)
            {
                console.log("Will add fake alerts to Alerts table");
    
                for (index = 0; index < fakeAlerts.length; index++)
                {
                    dbAddAlert(fakeAlerts[index], null);
                }
                console.log("Queued adding " + fakeAlerts.length + " fake alerts to Alerts table");
            }
        }, null);
    });
}

function dbOpenOrCreate() 
{
    if (!isDevice || dbForceUseWebSql)
    {
        db = window.openDatabase("iphm.db", "1.0", "Offline alert storage", 5*1024*1024, null);
    }
    else
    {
        db = window.sqlitePlugin.openDatabase({name: "iphm.db", location: 1});
    }

    if (!db)
    {
        alert("dbOpenOrCreate() could not open iphm.db");
        return;
    }

    db.transaction(function(tx)
    {
        if (dbDeleteOnStart)
        {
            console.log("Dropping Alerts table if exists");

            tx.executeSql("DROP TABLE IF EXISTS Alerts", [], function (tx, result)
            {
                console.log("Alerts table dropped, will re-create");
                dbCreate();
            },
            function (tx, error)
            {
                console.log("Statement failed: DROP TABLE IF EXISTS Alerts");
            });
        }
        else
        {
            console.log("Checking whether Alerts table exists");

            tx.executeSql("SELECT COUNT(*) AS total FROM Alerts", [], function (tx, result) 
            {
                console.log("Alerts table exists, count = " + result.rows.item(0).total);
            },
            function (tx, error)
            {
                console.log("Alerts table does not exist, will create");
                dbCreate();
            });
        }
    });
}

function dbCache(alert)
{
    cache[alert.id.toString()] = alert;
}

function dbGetAlertsForDate(date, callback)
{
    // When loading a new page, reset selected alert
    selectedAlertId = undefined;

    if (!db)
    {
        return;
    }

    db.transaction(function(tx)
    {
        tx.executeSql("SELECT * FROM Alerts WHERE mDate = ?", [date], function(tx, result)
        {
            var res = [];
            cache = {};

            for (index = 0; index < result.rows.length; index++)
            {
                var row = result.rows.item(index);
                res.push(row);
                dbCache(row);
            }
            if (callback)
            {
                callback(res);
            }
        },
        null);
    }); 
}

function dbAddAlertFromPush(whenMs, data, callback)
{
    if (!db)
    {
        return;
    }

    // date/time of a problem as number of millisec since 1970/01/01 connerted to strings
    // this value is sent in alert body
    var pDateTime = new Date(parseInt(data.t));
    var pDate = $.datepicker.formatDate('mm/dd/yy', pDateTime);
    var pTime = pDateTime.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');

    // date/time of a problem as number of millisec since 1970/01/01 connerted to strings
    // this value is actual timestamp of alert reception
    var mDateTime = new Date(whenMs);
    var mDate = $.datepicker.formatDate('mm/dd/yy', mDateTime);
    var mTime = mDateTime.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');

    // duration in minutes converted to the string of form '##d ##h ##m'
    var duration = (data.w >= (24 * 60) ? Math.floor(data.w / (24 * 60)) + 'd ' : '') +
                   (data.w % (24 * 60) >= 60 ? Math.floor((data.w % (24 * 60)) / 60) + 'h ' : '') +
                   (data.w % 60 ? data.w % 60 + 'm' : '');

    var newAlert = 
    {
        monitorId: data.i,
        name: data.n,
        state: data.s2,
        duration: duration.trim(),
        prevstate: data.s1,
        pDate: pDate,
        pTime: pTime,
        mDate: mDate,
        mTime: mTime,
        message: data.m
    };

    dbAddAlert(newAlert, function()
    {
        dbCache(newAlert); // regardless of current date, cache this alert since we have it handy

        if (callback)
        {
            callback(newAlert);
        }
    });
}

function dbSetSelectedAlertId(id)
{
    selectedAlertId = parseInt(id);
}

function dbGetSelectedAlert(callback) 
{
    var selectedAlertIdStr;
    if (!db)
    {
        return;
    }

    selectedAlertIdStr = selectedAlertId.toString();

    if (cache.hasOwnProperty(selectedAlertIdStr))
    {
//        alert('Cached!'); // DEBUG
        callback(cache[selectedAlertIdStr]);
    }
    else
    {
//        alert('Not cached!'); // DEBUG
        db.transaction(function(tx)
        {
            tx.executeSql("SELECT * FROM Alerts WHERE id = ?", [selectedAlertId], function(tx, result)
            {
                if (result.rows.length)
                {
                    var row = result.rows.item(0);

                    cache[row.id.toString()] = row;
                    callback(row);
                }
                else
                {
                    // This should never happen so it is left in production to trap
                    // UI misbehavior
                    alert('Unexpected error: alert # ' + selectedAlertIdStr + ' not found!');
                }
            },
            null);
        });
    }
}

function dbGetSelectedAlertHistory(callback)
{
    if (!db || selectedAlertId === undefined)
    {
        return;
    }

    db.transaction(function(tx)
    {
        tx.executeSql("SELECT * FROM Alerts WHERE monitorId = (SELECT monitorId from Alerts WHERE id = ?)",
                      [selectedAlertId], function(tx, result)
        {
            var res = [];
            var selectedAlertPos;

            for (index = 0; index < result.rows.length; index++)
            {
                var currAlert = result.rows.item(index);

                res.push(currAlert);

                if (currAlert.id === selectedAlertId)
                {
                    selectedAlertPos = res.length - 1;
                }
            }

            if (res.length > uiMaxHistorySize && selectedAlertPos !== undefined)
            {
                // Only leave uiMaxHistorySize closest alerts in history
                var startPos = selectedAlertPos - Math.floor(uiMaxHistorySize / 2);
        
                if (startPos < 0)
                {
                    startPos = 0;
                }
                else if (startPos + uiMaxHistorySize >= res.length)
                {
                    startPos = res.length - uiMaxHistorySize;
                }
                callback(res.slice(startPos, startPos + uiMaxHistorySize));
            } 
            else
            {
                callback(res);
            }
        },
        null);
    }); 
}
