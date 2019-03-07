import * as Router from 'koa-router';
import { default as generalController } from './controller/general';

const router = new Router();

router.get('/', generalController.helloWorld);
router.get('/login', generalController.login);

export {router};
