
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBgm2wGSw-MHJI0Vi7e87JMqeKtLNUlccs",
    authDomain: "invie-form-1feec.firebaseapp.com",
    databaseURL: "https://invie-form-1feec.firebaseio.com",
    projectId: "invie-form-1feec",
    storageBucket: "invie-form-1feec.appspot.com",
    messagingSenderId: "226842094917",
    appId: "1:226842094917:web:96adefa5356a03eeb6a22c",
    measurementId: "G-WNQJDG8QF7"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;