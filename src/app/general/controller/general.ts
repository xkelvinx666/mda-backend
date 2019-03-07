import { BaseContext } from 'koa';
import * as jwt from 'jsonwebtoken';
import { config } from '../../../config';
import { Controller } from '../../../decorators/class/controller';
import { JSONResponse } from '../../../decorators/function/json-response';

@Controller
export default class GeneralController {

    public static async helloWorld (ctx: BaseContext) {
        ctx.body = 'Hello World!';
    }

    @JSONResponse
    public static async login (ctx: BaseContext) {
        const token = jwt.sign({}, config.jwtSecret, { expiresIn: config.jwtExpiresIn });
        ctx.body = token;
    }

}
