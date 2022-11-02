const Service = require('egg').Service;
class ArticleService extends Service {
    async list(params) {
        const { app } = this;
        try {
            const result = await app.mysql.select('article', {
                offset: parseInt(params.page - 1) * parseInt(params.pageSize),
                limit: parseInt(params.pageSize),

            });
            const count = await app.mysql.query('select count(id) as count from article');

            return {
                list: result,
                count: count[0].count
            };
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async add(params) {
        const { app } = this;

        try {
            await app.mysql.insert('article', params);
            return 200;

        } catch (error) {
            return null;
        }
    }
    async delete(id) {
        const { app } = this;
        try {

            const result = await app.mysql.delete('article', { id });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async info(id) {
        const { app } = this;
        if (!id) {
            console.log('id不能为空');
            return null;
        }
        try {
            const result = await app.mysql.select('article', {
                where: { id }
            });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
module.exports = ArticleService;