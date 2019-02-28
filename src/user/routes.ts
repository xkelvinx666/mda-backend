import * as Router from 'koa-router';
import { default as userController } from './controller/user';
import { MIDDLEWARE } from '../kernal/http';

const {jwt} = MIDDLEWARE;

const router = new Router();

// GENERAL ROUTES

// USER ROUTES
router.get('/users', jwt, userController.getUsers);
router.get('/users/:id', jwt, userController.getUser);
router.post('/users', jwt, userController.createUser);
router.put('/users/:id', jwt, userController.updateUser);
router.delete('/users/:id', jwt, userController.deleteUser);

export {router};
