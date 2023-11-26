importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyDv6vjpSTQjIGH7SLWOAbI4LkSr34hvpYY",
    authDomain: "fcm-demo-c030b.firebaseapp.com",
    projectId: "fcm-demo-c030b",
    storageBucket: "fcm-demo-c030b.appspot.com",
    messagingSenderId: "207339198426",
    appId: "1:207339198426:web:adc2f4d8d6421101c812e3",
    measurementId: "G-BJCEQMNTEF"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || "/icon.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});