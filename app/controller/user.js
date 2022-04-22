const Controller = require('egg').Controller;

class UserController extends Controller {
	async createUser() {
		const { ctx } = this
		const { account, password } = ctx.request.body

		const result = await ctx.service.user.create({ account, password })
		ctx.body = {
			code: 200,
			data: result,
			msg: '操作成功'
		}
	}

	async login() {
		const { ctx, app } = this
		const data = ctx.request.body
		const isValid = await ctx.service.user.isUser(data.account, data.password)
		console.log(isValid)
		if (isValid) {
			const token = app.jwt.sign({
				account: data.account
			}, app.config.jwt.secret)
			ctx.body = {code:200 , msg:'登陆成功', token}
		} else {
			ctx.body = '该用户名不存在'
		}

	}
	// 验证token，请求时在header配置 Authorization=`Bearer ${token}`
	// 特别注意：token不能直接发送，要在前面加上Bearer字符串和一个空格
	async index() {
		const { ctx } = this
		ctx.body = { code: 201, msg: '验证成功' }
	}
}

module.exports = UserController