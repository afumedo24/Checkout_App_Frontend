# Projekt-Checkout-App



## Environment Setup
To use this application, download or clone the repository
For the Case if there is a node_modules folder, delete it

Then download a new node_modules folder with:
```
$ npm i
```

### Web-application
To start the web-application in your Browser you must run Ionic serve in the Terminal and it will open up a new Browser window with the application
```
$ ionic serve
```

### Android 
First you we will need to download the Android SDKs if you want to run it on a Emulator.
You can download these by installing Android Studio. You can check official [Ionic Dokumentation](https://ionicframework.com/docs/developing/android) for help!

After you have downloaded the SDKs, we will use the capacitor cmd in our Terminal. First we will build and copy the code
```
$ npx ionic build && npx cap copy
```

Then we will run the application in Android with: 
```
$ npx cap run android --target=(YOUR_TARGETED_ANDROID_DEVICENAME) --external --no-sync
```
This will open up the Emulator and deploy the Ionic App in it.


You could also run and build it with **Android Studios**, just type: 
```
$ npx cap open android
```
to open up Android Studios and then you should be able to run it like normal Android App.
