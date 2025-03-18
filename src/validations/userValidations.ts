//validation of errors to be displayed in the front-end
import mongoose from "mongoose";
export const validateUser = (data: any) => {
    const errores: string[] = [];
    
    const { email, nombre, edad, direccion } = data;

    if (!email || typeof email !== "string" || !email.includes("@")) errores.push("Email inválido.");
    if (!nombre || typeof nombre !== "string") errores.push("El nombre es obligatorio y debe ser un string.");
    if (edad !== undefined && typeof edad !== "number") errores.push("La edad debe ser un número.");
    if (!direccion || typeof direccion !== "object") errores.push("La dirección es obligatoria.");
    if (direccion) {
        if (!direccion.calle) errores.push("Calle es obligatoria.");
        if (!direccion.ciudad) errores.push("Ciudad es obligatoria.");
        if (!direccion.pais) errores.push("País es obligatorio.");
        if (!direccion.codigo_postal) errores.push("Código postal es obligatorio.");
    }

    return errores;
};

export const validateUserUpdate = (data: any) => {
    const errores: string[] = [];
    const { email, nombre, edad, direccion } = data;

    if (email !== undefined && (typeof email !== "string" || !email.includes("@"))) {
        errores.push("El email debe ser un string válido con '@'.");
    }
    if (nombre !== undefined && typeof nombre !== "string") {
        errores.push("El nombre debe ser un string.");
    }
    if (edad !== undefined && typeof edad !== "number") {
        errores.push("La edad debe ser un número.");
    }
    if (direccion !== undefined) {
        if (typeof direccion !== "object") {
            errores.push("La dirección debe ser un objeto.");
        } else {
            const { calle, ciudad, pais, codigo_postal } = direccion;
            if (!calle) errores.push("La calle es obligatoria.");
            if (!ciudad) errores.push("La ciudad es obligatoria.");
            if (!pais) errores.push("El país es obligatorio.");
            if (!codigo_postal) errores.push("El código postal es obligatorio.");
        }
    }

    return errores;
};


/**this validawte if the id is a valid id of the user
 * @param {string} id - id of the user that youu wanna validate
 * @returns {boolean} - `true` if is valid, `false if not. 
 */
export const isValidUserId = (id: string): boolean => {
    return mongoose.Types.ObjectId.isValid(id);
};