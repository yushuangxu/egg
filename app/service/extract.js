const Service = require('egg').Service;
class extractService extends Service {
    async list(params) {
        const { app } = this;
        try {
            const result = await app.mysql.select('extract', {
                offset: parseInt(params.page - 1) * parseInt(params.pageSize),
                limit: parseInt(params.pageSize),
                orders:[['id','DESC']]
            });
            const count = await app.mysql.query('select count(id) as count from extract');

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
            await app.mysql.insert('extract', params);
            return 200;

        } catch (error) {
            return null;
        }
    }
    async delete(id) {
        const { app } = this;
        try {

            const result = await app.mysql.delete('extract', { id });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async update(params) {
        const { app } = this;
        try {
            const result = await app.mysql.update('extract', params);
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
            const result = await app.mysql.select('extract', {
                where: { id }
            });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
module.exports = extractService;