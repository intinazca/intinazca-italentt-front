import React from "react";
import { getAuth, signInAnonymously  } from "firebase/auth";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../../service/conexionFirebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function RegisterNotification(){

    const vapidkey = {
        vapidKey: "BM-9YjRk842OVUdPN_pHtmHk4hV2vlmM5n7c1fNa74hwqdK2D8eLURRyZMIxKkgny-2X32h1u_YevS6mxuBvdoc"
    }
    //simulamos la autenticación
    signInAnonymously(getAuth()).then(usuario=>
        console.log(usuario )
    );

    const activarMensajes = async ()=>{
        const token = await getToken(messaging, vapidkey).catch( err => {
            console.log(err);
        });

        if(token){
            console.log("token: ", token);
        }else{
            console.log("no existe token");
        }
    }

    //escuchamos las notificaciones
    React.useEffect(()=>{
        onMessage(messaging, message =>{
            console.log("mensaje:", message);
            toast(message.notification.title)
        })
    }, []);

    return(
        <div>
            <h1>Prueba</h1>
            <ToastContainer></ToastContainer>
            <button></button>
            <button></button>
        </div>
    );

}

export default RegisterNotification;