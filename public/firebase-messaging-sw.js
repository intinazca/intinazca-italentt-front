// service worked que escucha cuando nuestra app este cerrada
importScripts("https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyBdpzfSdXKDlEY8IAdR6mUWX2C_IId8TDM",
    authDomain: "italentt-notification.firebaseapp.com",
    projectId: "italentt-notification",
    storageBucket: "italentt-notification.appspot.com",
    messagingSenderId: "293208364311",
    appId: "1:293208364311:web:358431fbc8a1ddec551352",
    measurementId: "G-RN7HDGYFMF"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); //es la key
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(message => {
    console.log("el mensaje llego");
    const notificacionT = message.notification.title;
    const notificationOp = {
        body: message.notification.body,
        icon: "/logo192.png"
    }
    
    return self.registration.showNotification(notificacionT, notificationOp);
});