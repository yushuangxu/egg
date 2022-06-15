const Service = require('egg').Service;
class TagService extends Service {
    async list() {
        const { app } = this
        try {
            const result = await app.mysql.select('tag')
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    async add(params) {
        const { app } = this
        try {
            const list = await app.mysql.select('tag')
            const item = list.find(item => {
                return item.tagname === params.tagname
            })
            if (item) {
                return 100
            } else {
                await app.mysql.insert('tag', params)
                return 200
            }
        } catch (error) {
            return null
        }
    }
}
module.exports = TagService