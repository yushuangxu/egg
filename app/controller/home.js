'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async list() {
		const { ctx } = this
		const result = await ctx.service.home.list()
		if (result) {
			ctx.body = {
				status: 200,
				data: result
			}
		} else {
			ctx.body = {
				status: 500,
				errMsg: '获取失败'
			}
		}
	}
	async add() {
		const { ctx } = this
		const params = {
			...ctx.request.body
		}
		const result = await ctx.service.home.add(params)
		if (result) {
			ctx.body = {
				status: 200,
				data: result,
			}
		} else {
			ctx.body = {
				status: 500,
				errMsg: '添加失败'
			}
		}
	}
	async update() {
		const { ctx } = this
		const params = {
			...ctx.request.body
		}
		const result = await ctx.service.home.update(params)
		if (result) {
			ctx.body = {
				status: 200,
				data: result
			}
		} else {
			ctx.body = {
				status: 500,
				errMsg: '编辑失败'
			}
		}
	}
	async getHomeById() {
		const { ctx } = this
		console.log('ctx.params', ctx.params)
		const result = await ctx.service.home.getHomeById(ctx.params.id)
		if (result) {
			ctx.body = {
				status: 200,
				data: result
			}
		} else {
			ctx.body = {
				status: 500,
				errMsg: '获取失败'
			}
		}
	}
	async delete() {
		const { ctx } = this
		const { id } = ctx.request.body
		const result = await ctx.service.home.delete(id)
		if (result) {
			ctx.body = {
				status: 200,
				data: result
			}
		} else {
			ctx.body = {
				status: 500,
				errMsg: '删除失败'
			}
		}
	}
}

module.exports = HomeController;
