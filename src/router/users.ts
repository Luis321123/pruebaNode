import express from 'express';

import { getAllUsers, deleteUser, getUserByAnId, getUsersByCity} from '../controllers/users';


export default (router: express.Router) => {
    router.get('/users',getAllUsers),
    router.get('/users/:id', getUserByAnId),
    router.get('/users/ciudad/:ciudad', getUsersByCity);
    router.delete('/users/:id',deleteUser);
}

