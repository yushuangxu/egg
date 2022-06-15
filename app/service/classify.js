const Service = require('egg').Service;
class ClassifyService extends Service {
    async list() {
        const { app } = this
        try {
            const result = await app.mysql.select('classify')
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    async add(params) {
        const { app } = this
        try {
            const list = await app.mysql.select('classify')
            const item = list.find(item => {
                return item.classname === params.classname
            })
            if (item) {
                return 100
            } else {
                await app.mysql.insert('classify', params)
                return 200
            }
        } catch (error) {

            return null
        }
    }
}
module.exports = ClassifyService