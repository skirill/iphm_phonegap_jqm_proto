// System wide configuration
var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
var isAppleDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());

var isDevice = isAndroid || isAppleDevice || isWindowsPhone;

// UI
// Size of history list in details view, # rows
var uiMaxHistorySize = 3;

// DB Configuration
// Clear DB when starting. Should probably be done one and then reverted
var dbDeleteOnStart = false;
// Force use of websql even on mobile devices (normally only used on desktop os)
// mobile devices use phonegap SQL plugin
var dbForceUseWebSql = false;

// Testing
// Add data from fakelaerts.js to DB when creating it
var testAddFakeAlerts = false;
