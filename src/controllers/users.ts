import express from 'express';
import { Request, Response } from 'express';

import { getUsers, deleteUserById, getUserById, getUserByDirect } from '../db/users';

export const getAllUsers = async(req : express.Request, res: express.Response) => {
    try{
        const users = await getUsers();

        return res.status(200).json(users);
    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getUserByAnId = async (req: express.Request, res: express.Response) => {
    try{

        const users = await getUserById(req.params.id);

        return res.status(200).json(users);
    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getUsersByCity = async (req: Request, res: Response) => {
    try {
        const { ciudad } = req.params;

        if (!ciudad) {
            return res.status(400).json({ message: 'Se requiere una ciudad' });
        }

        const users = await getUserByDirect(ciudad);

        if (users.length === 0) {
            return res.status(404).json({ message: 'No se encontraron usuarios en esta ciudad' });
        }

        return res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener usuarios por ciudad:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try{
        const{ id } = req.params;
        
        const deletedUser = await deleteUserById(id);

        return res.json(` the user ${deletedUser.nombre} has been deleted`);
        
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}