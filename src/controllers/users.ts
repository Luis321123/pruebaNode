import express from 'express';
import { Request, Response } from 'express';

import { getUsers, deleteUserById, getUserById, getUserByDirect, UserModel } from '../db/users';
import { getPaginationParams } from "../helpers/pagination";
import { isValidUserId } from "../validations/userValidations";
export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const { page, limit } = getPaginationParams(req.query);

        const [users, totalUsers] = await Promise.all([
            getUsers(page, limit),
            UserModel.countDocuments()
        ]);

        return res.status(200).json({
            totalUsers,
            totalPages: Math.ceil(totalUsers / limit),
            currentPage: page,
            users
        });
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getUserByAnId = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        if (!isValidUserId(id)) {
            return res.status(400).json({ message: "ID de usuario no válido." });
        }

        const user = await getUserById(id);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        return res.status(500).json({ message: "Error interno del servidor." });
    }
};

//Find the users by city, the path is example: "/users/ciudad/quito" 
export const getUsersByCity = async (req: Request, res: Response) => {
    try {
        const { ciudad } = req.params;

        if (!ciudad) {
            return res.status(400).json({ message: 'Se requiere una ciudad' });
        }

        const users = await getUserByDirect(ciudad);

        if (users.length === 0) {
            return res.status(404).json({ message: 'No se encontraron usuarios para esta ciudad' });
        }

        return res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener usuarios por ciudad:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};
export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        if (!isValidUserId(id)) {
            return res.status(400).json({ message: "ID de usuario no válido." });
        }

        const deletedUser = await deleteUserById(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }

        return res.status(200).json({
            message: `El usuario ${deletedUser.nombre} ha sido eliminado exitosamente.`,
        });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        return res.status(500).json({ message: "Error interno del servidor." });
    }
};