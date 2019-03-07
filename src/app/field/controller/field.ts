import { BaseContext } from 'koa';
import { getManager, Repository } from 'typeorm';
import { User } from '../../user/entity/user';

export default class FieldController {

    public static async getField (ctx: BaseContext) {
        // get a user repository to perform operations with user
        const userRepository: Repository<User> = getManager().getRepository(User);

        const userId = 1 || ctx.params.id;
        const user: User = await userRepository.findOneOrFail(userId);
        const fields = user.fields;
        if (Array.isArray(fields)) {
            ctx.status = 200;
            ctx.body = fields;
        } else {
            ctx.status = 404;
        }
    }
}
