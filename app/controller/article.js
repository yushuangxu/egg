const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async list() {
        const { ctx } = this
        const result = await ctx.service.article.list()
        if (result) {
            ctx.body = {
                code: 200,
                data: result
            }
        } else {
            ctx.body = {
                code: 500,
                errMsg: '服务器错误'
            }
        }
    }
    async add() {
        const { ctx } = this
        const params = {
            ...ctx.request.body
        }
        const result = await ctx.service.article.add(params)
        if (result == 200) {
            ctx.body = {
                code: 200,
                data: {},
                msg: '新建成功'
            }
        } else {
            ctx.body = {
                code: 500,
                data: {},
                msg: '服务器错误'
            }
        }
    }
}
module.exports = ArticleController