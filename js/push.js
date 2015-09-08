var notificationAreaPlugin;
var pushPlugin;

pushInit = function()
{
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

            // on Android soundname is outside the payload.
            // On Amazon FireOS all custom attributes are contained within payload
            var soundfile = e.soundname || e.payload.sound;
            // if the notification contains a soundname, play it.
            var my_media = new Media("/android_asset/www/" + soundfile);
            my_media.play();
        }
        else
        {  // otherwise we were launched because the user touched a notification in the notification tray.
            if (e.coldstart)
            {
                console.log('--COLDSTART NOTIFICATION--');
            }
            else
            {
                console.log('--BACKGROUND NOTIFICATION--');
            }
        }

        console.log('MESSAGE -> MSG: ' + e.payload.message);
        //Only works for GCM
        console.log('MESSAGE -> MSGCNT: ' + e.payload.msgcnt);
        //Only works on Amazon Fire OS
        console.log('MESSAGE -> TIME: ' + e.payload.timeStamp);
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
