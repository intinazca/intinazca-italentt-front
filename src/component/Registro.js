import React from "react";
import { useState } from "react";
import './style.css'
import { guardarUsuario } from "../service/guardarUsuario";
import { GuardarFireBase } from "../service/guardarFireBase";
import { toast } from "react-toastify";

export default function Registro() {

    var formularioEnviado = {
        nombre: '',
        fechaNacimiento: '',
        email: '',
        edad: 0
    }
    //creamos tres estados diferentes para los input
    const [datos, setDatos] = useState({
        nombre: '',
        fechaNacimiento: '',
        email: '',
    });

    //validamos los errores
    const [errores, setErrores] = useState({
        nombre: false,
        fechaNacimiento: false,
        email: false,
    });

    //funcion que se ejecuta al submit del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!datos.nombre.trim()) {
            setErrores({ ...errores, nombre: true });
            return;
        } else {
            setErrores({ ...errores, nombre: false });
        }
        if (datos.nombre.match(/[0-9]/)) {
            setErrores({ ...errores, nombre: true });
            return;
        } else {
            setErrores({ ...errores, nombre: false });
        }
        if (!datos.fechaNacimiento.trim()) {
            setErrores({ ...errores, fechaNacimiento: true });
            return;
          } else {
            setErrores({ ...errores, fechaNacimiento: false });
          }
        if (!datos.email.match(/\S+@\S+\.\S+/)) {
            setErrores({ ...errores, email: true });
            return;
        } else {
            setErrores({ ...errores, email: false });
        }
        calcularEdad(datos.fechaNacimiento);
        formularioEnviado.nombre = datos.nombre;
        formularioEnviado.fechaNacimiento = datos.fechaNacimiento;
        formularioEnviado.email = datos.email;
        guardarDatos(); //guardamos en db
    };

    //metodo para calcular la edad
    async function calcularEdad(fechaNacimiento) {
        const hoy = new Date();
        const fechaNac = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mes = hoy.getMonth() - fechaNac.getMonth();
      
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
          edad--;
        }

        formularioEnviado.edad = edad;
      }
    
      function guardarDatos(){
        guardarUsuario("guardar",formularioEnviado); //se guarda en mongo
        GuardarFireBase(formularioEnviado);
        toast('Usuario creado', {
            type: "succes",
        });
      }

    //    la función handleChange, se cambia el estilo del input correspondiente a un estado de alerta si hay un error en el campo.
    const handleChange = (event, campo) => {
        setDatos({ ...datos, [campo]: event.target.value });
    };

    return (
        <div className="container">
            <h1>Registro</h1>
            <form onSubmit={handleSubmit} className="formulario">
                <label>
                    <input
                        placeholder="Nombre"
                        type="text"
                        value={datos.nombre}
                        onChange={(event) => handleChange(event, 'nombre')}
                        className={errores.nombre ? 'formulario-input-error' : 'formulario-input'}
                    />
                </label>
                <label>
                    <input
                        placeholder="Fecha de nacimiento"
                        type="date"
                        value={datos.fechaNacimiento}
                        onChange={(event) => handleChange(event, 'fechaNacimiento')}
                        className={errores.fechaNacimiento ? 'formulario-input-error' : 'formulario-input'}
                    />
                </label>
                <label>
                    <input
                        placeholder="Correo"
                        type="text"
                        value={datos.email}
                        onChange={(event) => handleChange(event, 'email')}
                        className={errores.email ? 'formulario-input-error' : 'formulario-input'}
                    />
                </label>
                <button type="submit" className="formulario-submit">
                    Enviar
                </button>
            </form>
        </div>
    )
}