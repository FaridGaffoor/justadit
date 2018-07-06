App.info({
  name: 'Just adit online',
  description: 'A advertising sharing app made in Meteor.',
  author: 'Farid Gaffoor based on the Percolate Local Market App',
  email: 'faridga@gmail.com',
  website: 'http://www.justadit.co.za',
  version: '0.1.2'
});

App.configurePlugin("cordova-plugin-googleplus", {
  "REVERSED_CLIENT_ID": "REVERSED_CLIENT_ID_FOR_cordova-plugin-googleplus"
});

App.configurePlugin('phonegap-plugin-push', {
SENDER_ID: "SENDER_ID_FOR_phonegap-plugin-push"
}); 


//cfs-graphicsmagick
App.accessRule("blob:*");

App.icons({
  // iOS
  'iphone_2x': 'resources/icons/icon-60x60@2x.png',
  'ipad': 'resources/icons/icon-76.png',
  'ipad_2x': 'resources/icons/icon-76@2x.png',

  // Android
  'android_mdpi': 'resources/icons/icon-48x48.png',
  'android_hdpi': 'resources/icons/icon-72.png',
  'android_xhdpi': 'resources/icons/icon-76@2x.png'
});

App.launchScreens({
  // iOS
  'iphone_2x': 'resources/splash/splash-320x480@2x.png',
  'iphone5': 'resources/splash/splash-320x568@2x.png',
  'ipad_portrait': 'resources/splash/splash-768x1024.png',
  'ipad_portrait_2x': 'resources/splash/splash-768x1024@2x.png',
  'ipad_landscape': 'resources/splash/splash-1024x768.png',
  'ipad_landscape_2x': 'resources/splash/splash-1024x768@2x.png',

  // Android
  'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
  'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
  'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
  'android_hdpi_landscape': 'resources/splash/splash-800x480.png',
  'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
  'android_xhdpi_landscape': 'resources/splash/splash-1280x720.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');
