import express from 'express';
import { createUser, getUserByEmail, updateUserById, deleteUserById, getUserById} from '../db/users';
import { authentication, random } from '../helpers';

export const register = async (req: express.Request, res: express.Response) => {
    try{
        const{email, nombre, edad, direccion} = req.body;
        
        if (!email || !nombre || !direccion) {
            return res.sendStatus(400);
        }
        const existingUser = await getUserByEmail(email);
        
        if (existingUser){
            return res.status(409).json({ message: 'Ya hay un usuario con ese email' });
        }

        const user = await createUser({
            email,
            nombre,
            edad,
            fecha_creacion: Date.now(),
            direccion:{
                calle: direccion.calle,
                ciudad: direccion.ciudad,
                pais: direccion.pais,
                codigo_postal: direccion.codigo_postal,
            }
        });
        
        return res.status(200).json(user).end();

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const update = async (req: express.Request, res: express.Response) => {
    try{
        const { id } = req.params;
        const{email, nombre, edad, direccion} = req.body;

        if (!email || !nombre || !edad || !direccion) {
            return res.status(400).json({ message: 'hay un campo que no cumple con los requisitos o faltan por completar' });
        }
        const existingUser = await getUserById(id);
        
        if (!existingUser) {
            return res.sendStatus(400).json({ message: 'No hay un usuario el cual se pueda actualizar' });
        }

        const salt = random();
        const user = await updateUserById(id,{
            email,
            nombre,
            edad,
            direccion:{
                calle: direccion.calle,
                ciudad: direccion.ciudad,
                pais: direccion.pais,
                codigo_postal: direccion.codigo_postal,
            }
        });
        
        return res.status(200).json(user).end();

        
    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

