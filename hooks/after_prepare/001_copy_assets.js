#!/usr/bin/env node

var fs = require("fs");
var path = require("path");

var rootdir = process.argv[2];

function copy(source, destination) {
    var sourceFile = path.join(rootdir, source);
    var destinationFile = path.join(rootdir, destination);

    fs.writeFileSync(destinationFile, fs.readFileSync(sourceFile));
    console.log("Copied " + sourceFile + " to " + destinationFile);
}

if (fs.existsSync(path.join(rootdir, "platforms/android"))) 
{
    var suffixes = ['m', 'h', 'xh', 'xxh', 'xxxh'];
    var drawables = ['ic_stat_ip'];

    suffixes.forEach(function(s)
    {
        fs.mkdir(path.join(rootdir, 'platforms/android/res/drawable-' + s + 'dpi'), function()
        {
            drawables.forEach(function(d)
            {
                copy('res/drawable/android/' + d + '-' + s + 'dpi.png',
                     'platforms/android/res/drawable-' + s + 'dpi/' + d + '.png');
            });
        });
    });
}

/* TODO: iOS, Windows Phone - if necessary
if (fs.existsSync(path.join(rootdir, "platforms/ios"))) {
    copy("www/res/screen/ios/screen-iphone-portrait.png", "platforms/ios/{PROJECT_NAME}/Resources/splash/Default~iphone.png");
    copy("www/res/screen/ios/screen-iphone-portrait-2x.png", "platforms/ios/{PROJECT_NAME}/Resources/splash/Default@2x~iphone.png");
    copy("www/res/screen/ios/screen-iphone-portrait-568-2x.png", "platforms/ios/{PROJECT_NAME}/Resources/splash/Default-568h@2x~iphone.png");
    copy("www/res/screen/ios/screen-ipad-portrait.png", "platforms/ios/{PROJECT_NAME}/Resources/splash/Default-Portrait~ipad.png");
    copy("www/res/screen/ios/screen-ipad-portrait-2x.png", "platforms/ios/{PROJECT_NAME}/Resources/splash/Default-Portrait@2x~ipad.png");
    copy("www/res/screen/ios/screen-ipad-landscape.png", "platforms/ios/{PROJECT_NAME}/Resources/splash/Default-Landscape~ipad.png");
    copy("www/res/screen/ios/screen-ipad-landscape-2x.png", "platforms/ios/{PROJECT_NAME}/Resources/splash/Default-Landscape@2x~ipad.png");
}*/
