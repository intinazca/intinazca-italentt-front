
import axios from 'axios';

export function guardarUsuario(metodo, data) {
   const apiurl = `http://localhost:3700/api/${metodo}`;
   const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
    axios.post(apiurl, data, {headers: headers}).then(response=>{
        console.log(response);
    }).catch(err=>{
        console.log(err);
    });
} 