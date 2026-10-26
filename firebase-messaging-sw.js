importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyALJTFu8H0VGYcWYxaqmtEIJxtFlWiHSNk",
  authDomain: "chatme-app-9daee.firebaseapp.com",
  projectId: "chatme-app-9daee",
  storageBucket: "chatme-app-9daee.firebasestorage.app",
  messagingSenderId: "360895805585",
  appId: "1:360895805585:web:13f659cf9a763d4db02730"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/724/724664.png',
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});