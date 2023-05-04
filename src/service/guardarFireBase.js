import { db } from "./conexionFirebase"

export async function GuardarFireBase(usuario) {
    await db.collection('usuario').doc().set(usuario);
} 