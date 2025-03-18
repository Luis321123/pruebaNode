import express from 'express';

import { register, update } from '../controllers/authentication';

export default (router:express.Router) => {
    router.post('/auth/register', register);
    router.put('/auth/update/:id', update);
};