// TODO:
// - learn how to select system sound for notification and pass it to our fork of push
//   plugin through shared preferences using say this plugin (in fact, we might use this
//   for all settings): http://plugreg.com/plugin/edelworksgithub/SharedPreferences
// - take final decision when / how to show notifications vs. toast messages, badges etc.
// 
var notificationAreaPlugin;
var pushPlugin;
var newPushAlertCallback;

// TODO: might remove, see showNotification()
var notifId = 1;

pushInit = function(callback)
{
    newPushAlertCallback = callback;

    notificationAreaPlugin = cordova.plugins.notification.local;
    pushPlugin = window.plugins.pushNotification;

    if (device.platform == 'android' || device.platform == 'Android' || device.platform == "amazon-fireos")
    {
        pushPlugin.register(
            pushSuccessHandler,
            pushErrorHandler,
            {
                "senderID":"411425449856", // my GCM sender ID assigned by Google
                "ecb":"onPushNotification"
            });

            // If a notification was created by push plugin from native code, then
            // notificationAreaPlugin is not able to remove it by id, so we just do
            // not use id and blindly cancel all notifications
            // Noter that we can only cancel our own notifications so this is safe
            notificationAreaPlugin.cancelAll(notifId, function()
            {
                console.log('IPHost notifications canceled, if any');
            });
    }
    // TODO: add support for iOS and WP8, take code from here:
    //       https://github.com/phonegap-build/PushPlugin/blob/a172e19/README.md
}

// result contains any message sent from the plugin call
function pushSuccessHandler (result)
{
    console.log('result = ' + result);
}

// result contains any error description text returned from the plugin call
function pushErrorHandler (error) {
    console.log('error = ' + error);
}

// show new notification
//
// TODO: might remove; currently I've decided to use notifications in all cases,
// both in foreground and background, and to create them from push plugin to
// avoid similar code in native and js parts.
function showNotification(data)
{
    var title = data.n + ' [' + data.s1 + '] -> [' + data.s2 + '] at ' + data.d + ' ' + data.t;
    var text = data.m;

    console.log('TITLE: ' + title);
    console.log('TEXT: ' + text);

    notificationAreaPlugin.isPresent(notifId, function(isPresent)
    {
        if (isPresent)
        {
            notificationAreaPlugin.get(notifId, function (notifications)
            {
                if (notifications.length)
                {
                    var notification = notifications[0];
                    var newCount = JSON.parse(notification.data).count + 1;

                    console.log(notification.toString());
                    notificationAreaPlugin.update({
                        id: notifId,
                        title: newCount + ' new alerts',
                        text: 'Last: ' + title,
                        data: { count: newCount }
                    });
                 }
            });
        }

        else
        {
            notificationAreaPlugin.schedule({
                id: notifId,
                title: title,
                text: text,
                smallIcon: 'ic_stat_ip.png',
                icon: 'ic_stat_ip.png',
//                sound: 'TYPE_ALARM',
                data: { count: 1 }
            });
        }
    });
}

// Android and Amazon Fire OS
function onPushNotification(e)
{
    console.log('EVENT -> RECEIVED:' + e.event);

    switch(e.event)
    {
    case 'registered':
        if (e.regid.length > 0)
        {
            console.log('REGISTERED -> REGID:' + e.regid);
            // Your GCM push server needs to know the regID before it can push to this device
            // here is where you might want to send it the regID for later use.
        }
        break;

    case 'message':
        // if this flag is set, this notification happened while we were in the foreground.
        // you might want to play a sound to get the user's attention, throw up a dialog, etc.
        if (e.foreground)
        {
            console.log('--INLINE NOTIFICATION--');

// TODO: always play selected system sound from settings

            // on Android soundname is outside the payload.
            // On Amazon FireOS all custom attributes are contained within payload
//            var soundfile = e.soundname || e.payload.sound;
            // if the notification contains a soundname, play it.
//            var my_media = new Media("/android_asset/www/" + soundfile);
//            my_media.play();
//            showNotification(e.payload);
            newPushAlertCallback(e.when, e.payload);
        }
        else
        {  // otherwise we were launched because the user touched a notification in the notification tray.
            if (e.coldstart)
            {
                // this event may be ignored, it indicates that notification was tapped
                // but actual payloads for all waiting notifications are delivered via
                // 'else' branch event
                console.log('--COLDSTART NOTIFICATION--');
            }
            else
            {
                // when notification arrives but client is not started, its payload is
                // added to ArrayList in our push plugin fork. When client eventaully
                // starts, all list items are processed and added to DB via this call
                console.log('--BACKGROUND NOTIFICATION--');
                newPushAlertCallback(e.when, e.payload);
            }
        }

        break;

    case 'error':
        console.log('ERROR -> MSG:' + e.msg);
        break;

    default:
        console.log('EVENT -> Unknown, an event was received and we do not know what it is');
        break;
    }
}

// TODO: add this somewhere on cleanup
// pushNotification.unregister(successHandler, errorHandler, options);
