// TODO:
// - create 'app' object with methods similar to helloworld structure; move inline
//   code like below to app.initialize()
// - when changing date and scrollbar is not at top, jump to top of a new date
//

var prevScrollerHeight;
var prevArchiveDate;
var newScroll;
var newScrollY;
var archiveScroll;
var archiveScrollY;
var mouseX;
var mouseY;

// DB may only be opened when device is ready
if (isDevice)
{
    document.addEventListener("deviceready", dbOpenOrCreate, false);
}
else
{
    dbOpenOrCreate();
}

$(document).ready(function() 
{
    // TODO: could we avoid polling? Below is a correct but maybe not optimal way to monitor
    // scroll area height that may be changed due to several events:
    // - initial load
    // - filtering of list contents 
    // - reloading data say for another day
    // As seen now, we just poll every 500ms and refresh if height has changed, this could be
    // wasting CPU on device but I'm leaving fine tuning out of scope for now -- skirill
    setInterval(function () 
    {
        if (archiveScroll !== undefined)
        {
            var newScrollerHeight = $(".arch-list-class").innerHeight();
    
            if (newScrollerHeight !== prevScrollerHeight)
            {
                 prevScrollerHeight = newScrollerHeight;
                 archiveScroll.refresh();
            }
        }

        // TODO: find a way to hook change event for datepicker, avoid polling
        var newArchiveDate = $("#archiveDatePicker").val();
        if (newArchiveDate !== prevArchiveDate) {
            prevArchiveDate = newArchiveDate;
            dbGetAlertsForDate(newArchiveDate, showAlerts);
        }

    }, 500);
   
    // Always know mouse coordinates
    // Chrome says captureEvents() is deprecated and doesn't do anything
    //document.captureEvents(Event.MOUSEMOVE);
    document.onmousemove = getMouseXY;
    function getMouseXY(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        if (mouseX < 0) {
            mouseX = 0;
        }
        if (mouseY < 0) {
            mouseY = 0;
        }
        return true;
    }

    // Reveal archive tab, hide new tab
    // TODO: when user clicks back, we should restore selection of a current tab (New or Archive)
    // now the page appears with no selection
    $('[data-role="navbar"] a:last').click();

    $("#archiveDatePicker").val($.datepicker.formatDate('mm/dd/yy', new Date()));
});

$(document).on('pagecontainershow', function() {
    
    // Simplify usage with `data-iscroll` similar to iScrollView
    // TODO: there will be at least two scroll areas (one per tab), actions for them differ, say filter elements differ.
    // Check how this works. For blur() maybe it's fine to blindly do it for search inputs on both tabs.
    $('[data-iscroll]').each(function() {
        var myScroll;
        var $this = $(this);
        
        // Set the needed CSS
        
        $this.css('position', 'absolute')
          .css('overflow', 'hidden')
          .css('top', '0')
          .css('bottom', '0')
          .css('left', '0')
          .css('width', '100%');

        if ($this.attr('id') === 'new-scroll')
        {
             myScroll = newScroll;
        } 
        else if ($this.attr('id') === 'archive-scroll')
        {
            myScroll = archiveScroll;
        }

        if (myScroll === undefined)
        {        
            // Launch iScroll
            myScroll = new IScroll($this.get(0), {
//                eventPassthrough: true,
//                scrollX: false,
//                scrollY: true,
                scrollbars: 'custom',
//                fadeScrollbars: true, // does not work on Android (scrollbar is always invisible, sometimes gets visible, often with wrong size)
                mouseWheel: false,
                bounce: false,
//                bounceEasing: 'elastic',
                tap: true                       // to handle interaction with list items 
            });
            
            if ($this.attr('id') === 'archive-scroll')
            {
                archiveScroll = myScroll;
                // When user starts scrolling we blindly remove focus from search control, otherwise a keyboard
                // will reappear immediately once scrolling is finished which gives bad user experience
                myScroll.on('beforeScrollStart', function () {
                    $('#alertListFilterInput').blur();
                });
            }
            // TODO: 'new' tab scroll
        }
   });

   document.addEventListener('touchmove', function (e)
   {
        e.preventDefault();
   }, false);
});

function updateDetails(page, alert)
{
    var historyAlerts;

    if (alert !== undefined)
    {
        var newstate = "[" + alert.state + "]";

        if (alert.duration !== "")
        {
            newstate += " for " + alert.duration;
        }

        $("#details-icon", page).html(
            "<img src='img/" + alert.state + "_large.png' alt='" + alert.state + "'/>");
        // TODO: we need monitor type id in alert body to select icon and alt string, for now they are hardcoded
        $("#details-time",      page).text(alert.mDate + " " + alert.mTime);
        $("#details-mt-icon",   page).html("<img src='img/mt_0.png' alt='PING'/>");
        $("#details-name",      page).text(alert.name);
        $("#details-old-state", page).html(
            "<img src='img/" + alert.prevstate + ".png' alt='" + alert.prevstate + "'> [" + alert.prevstate + "]");
        $("#details-new-state", page).html(
            "<img src='img/" + alert.state + ".png' alt='" + alert.state + "'> " + newstate);
        $("#details-message",   page).text(alert.message);

        dbGetSelectedAlertHistory(function(historyAlerts)
        {
            var historyHtml = "";
            var historyNode= $("#details-history", page);

            $(".details-history-item", page).remove();
            for (index = 0; index < historyAlerts.length; index++)
            {
                historyHtml +=
                     "<li class='details-history-item'><a href='#' class='details-history-item-link' id='details-history-item-" +
                                  historyAlerts[index].id + "'>" +
                     "    <p class='ui-li-aside'><strong>" +
                                  historyAlerts[index].mDate + " " +
                                  historyAlerts[index].mTime + "</strong></p>" + 
                     "    <p><img src='img/" + historyAlerts[index].state + ".png' alt='" +
                                  historyAlerts[index].state + "'> " +
                                  getStateChangeString(historyAlerts[index]) + "</p>" + 
                     "</a></li>";
            }
// TODO: decided not to show alert count for now, while using just 3 alerts -- revisit this
//        historyNode.text(historyAlerts.length + " previous / next alerts for this monitor");
            historyNode.text("Previous / next alerts for this monitor");
            historyNode.after(historyHtml);
    
            $("#details-list", page).listview('refresh');
    
            $('.details-history-item-link').on('click', function() {
                dbSetSelectedAlertId($(this).attr('id').replace('details-history-item-', ''));
                dbGetSelectedAlert(function(alert)
                {
                    updateDetails(page, alert);
                });
            });
    
            // select current alert in history
            setTimeout(function () 
            {
                $("#details-history-item-" + alert.id, page).focus();
            }, 0);

            $(this).click(); 
        });
    }
}

$(document).on("pagecontainerbeforehide", function (event, ui) 
{
    if (ui.nextPage.attr('id') === "details")
    {
        dbGetSelectedAlert(function(alert)
        {
            updateDetails(ui.nextPage, alert);
        });
    }
    if (ui.nextPage.attr('id') === "alerts" && archiveScrollY !== undefined)
    {
        archiveScroll.scrollTo(0, archiveScrollY, 0 /*scroll immediately, in no time*/);
    }
    // TODO: 'new' tab scroll
});

$(document).on("pagecontainerbeforeshow", function (event, ui) 
{
    if (ui.prevPage.attr('id') === "alerts")
    {
        archiveScrollY = archiveScroll.y;
        // TODO: 'new' tab scroll
    }
});

function getStateChangeString(alert)
{
    return alert.duration === "" ?
       "[" + alert.prevstate + "] &#8680; [" + alert.state + "]" :
       "[" + alert.state + "] for " + alert.duration;
}

function showAlerts(alerts)
{
    var newHTML = "";

    for (index = 0; index < alerts.length; index++)
    {
         newHTML += 
"            <li class='arch-item'>" +
"                <a href='#details' id='arch-item-" + alerts[index].id + "' data-transition='slide' class='arch-item-link'>" +
"                    <img src='img/" + alerts[index].state + ".png' width='16' height='16' alt='" + alerts[index].state + "' class='ui-li-icon ui-corner-none'>" +
"                    <h1>" + alerts[index].name + "</h1>" +
"                    <p><strong>" + getStateChangeString(alerts[index]) + "</strong></p>" +
"                    <p>" + alerts[index].message + "</p>" +
"                    <p class='ui-li-aside'><strong>" + alerts[index].mTime + "</strong></p>" +
"                </a>" +
"            </li>";
    }

    document.querySelector("#arch-list").innerHTML = newHTML;

    // Refresh jquery list view after changing its contents, see the bottom of
    // http://demos.jquerymobile.com/1.2.0/docs/lists/docs-lists.html
    $("#arch-list").listview('refresh');

    // Programmatically link custim iscroll 'tap' event to jquery mobile link click behavior
    // (in this particular case link is opened with transition effect, see index.html)
    (function()
    {
        var tapTime = 0;
        var xPos = 0;
        var yPos = 0;

        $('.arch-item-link').bind('vmousedown vmouseup', function (event)
        {
            if (event.type == 'vmousedown')
            {
    
                tapTime = new Date().getTime();
                xPos = mouseX = event.pageX;
                yPos = mouseY = event.pageY;
    
                var timer = setTimeout(function()
                {
                    var duration = (new Date().getTime() - tapTime);
                    var xDiff = Math.abs(mouseX - xPos);
                    var yDiff = Math.abs(mouseY - yPos);
                    if (duration >= 750 && xDiff + yDiff <= 40)
                    {
                        //this is a longtap
                        $("#archivePopupMenuLink").click();
                    }
                }, 750);
            }
            else
            {
                //event.type == 'vmouseup'
                var duration = (new Date().getTime() - tapTime);
                var xDiff = Math.abs(event.pageX - xPos);
                var yDiff = Math.abs(event.pageY - yPos);
                tapTime = new Date().getTime();
                if (duration < 750 && xDiff + yDiff <= 40)
                {
                    // this is a tap, indicate which alert we need and emulate click 
                    // this will invoke pagecontainerbeforehide handler soon, but since
                    // current alert is in DB cache, a call to dbGetSelectedAlert from 
                    // there will return synchronously and there will be no period when
                    // details view is on screen but it shows a previous alert
                    dbSetSelectedAlertId($(this).attr('id').replace('arch-item-', ''));
                    $(this).click();
                }
            }
        });
    })();
}

// Navigation across main tabs -- dumb (read: reliable) style
function newClick() 
{
    $("#archive").hide();
    $("#new").show();
}
		
function archiveClick()
{
    $("#archive").show();
    $("#new").hide();
}
