import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage }  from 'firebase/messaging'
import { useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBkU8BBA1lbInAKjJMzaDbwU9uoliRW7Bo",
    authDomain: "bodyart-ad0de.firebaseapp.com",
    projectId: "bodyart-ad0de",
    storageBucket: "bodyart-ad0de.appspot.com",
    messagingSenderId: "417686595258",
    appId: "1:417686595258:web:d187b8104c514191e54483",
    measurementId: "G-PZVGJL3W69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);


function Notification(){
    const [msg, setMsg] = useState("Carregando...")

    getToken(messaging, { vapidKey: 'BGF3hnAivn1PP4vVqibnMSZR7Osly12wMB1UUoArhwb-uBn1XCagKzOA3OTapAlhFI1roytmy1MbNJYcvYqhtgQ' }).then((currentToken) => {

        if (currentToken) {
            setMsg(`Teu token eh: ${currentToken}`);
        } else {
            setMsg(`Sem token, peça permissão pra gerar um`);
        
    
        }
    }).catch((err) => {
        setMsg( "Deu rum, cheque o console!");
        console.log(err)
    });

    return(
        <>
            <h1>{msg}</h1>
            
        </>
    );
}



export default Notification;