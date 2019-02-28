import { BaseContext } from 'koa';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config';

export default class GeneralController {

    public static async helloWorld (ctx: BaseContext) {
        ctx.body = 'Hello World!';
    }

    public static async login (ctx: BaseContext) {
        const token = jwt.sign({}, config.jwtSecret, { expiresIn: config.jwtExpiresIn });
        ctx.body = token;
    }

}
