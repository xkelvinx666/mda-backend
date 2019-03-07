import * as Router from 'koa-router';
import { default as fieldController } from './controller/field';
const router = new Router();

// GENERAL ROUTES

// USER ROUTES
router.get('/fields',  fieldController.getField);

export {router};
