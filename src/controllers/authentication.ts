import express from 'express';

import { createUser, getUserByEmail, updateUserById, getUserById} from '../db/users';
import { validateUser, validateUserUpdate } from "../validations/userValidations";

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const errores = validateUser(req.body);

        if (errores.length > 0) {
            return res.status(400).json({ message: "Errores de validación", errores });
        }

        const { email, nombre, edad, direccion } = req.body;

        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ message: "Ya existe un usuario con ese email." });
        }

        const user = await createUser({
            email,
            nombre,
            edad: edad || null,
            fecha_creacion: new Date(),
            direccion,
        });

        return res.status(201).json({ message: "Usuario registrado con éxito", user });

    } catch (error) {
        console.error("Error al registrar usuario:", error);
        return res.status(500).json({ message: "Error interno del servidor." });
    }
};

export const update = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        if (!Object.keys(updates).length) {
            return res.status(400).json({ message: "No se proporcionaron datos para actualizar." });
        }

        const existingUser = await getUserById(id);
        if (!existingUser) {
            return res.status(404).json({ message: "El usuario no existe." });
        }

        const errores = validateUserUpdate(updates);
        if (errores.length > 0) {
            return res.status(400).json({
                message: "Errores de validación",
                errors: errores
            });
        }

        const updatedUser = await updateUserById(id, updates);

        return res.status(200).json({ message: "Usuario actualizado con éxito", user: updatedUser });
        
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        return res.status(500).json({ message: "Error interno del servidor." });
    }
};