import express from 'express';
import { createUser, getUserByEmail, updateUserById, deleteUserById, getUserById} from '../db/users';
import { authentication, random } from '../helpers';

export const register = async (req: express.Request, res: express.Response) => {
    try{
        const{email, password, nombre, edad, direccion} = req.body;
        
        if (!email || !password || !nombre|| !edad || !direccion) {
            return res.sendStatus(400);
        }
        const existingUser = await getUserByEmail(email);
        
        if (existingUser){
            return res.status(409).json({ message: 'Ya hay un usuario con ese email' });
        }

        const salt = random();
        const user = await createUser({
            email,
            nombre,
            authentication:{
                salt,
                password:authentication(salt,password),
            },
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
        const{email, password, nombre, edad, direccion} = req.body;
        

        if (!email || !password || !nombre || !edad || !direccion) {
            return res.sendStatus(400);
        }
        const existingUser = await getUserById(id);
        
        if (!existingUser) {
            return res.sendStatus(400);
        }

        const salt = random();
        const user = await updateUserById(id,{
            email,
            nombre,
            authentication:{
                salt,
                password:authentication(salt,password),
            },
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

