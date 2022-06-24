'use strict';

const Controller = require('egg').Controller;

class TagController extends Controller {
	async list() {
		const { ctx } = this
		const result = await ctx.service.tag.list()
		if (result) {
			ctx.body = {
				code: 200,
				data: result
			}
		} else {
			ctx.body = {
				code: 500,
				errMsg: '获取失败'
			}
		}
	}
	async add() {
		const { ctx } = this
		const params = {
			...ctx.request.body
		}
		const result = await ctx.service.tag.add(params)
		if (result == 200) {
			ctx.body = {
				code: 200,
				data: {},
				msg: '新建成功'
			}
		} else if (result == 100) {
			ctx.body = {
				code: 100,
				data: {},
				msg: '标签名重复!'
			}
		} else {
			ctx.body = {
				code: 500,
				errMsg: '添加失败'
			}
		}
	}
	async delete() {
		const { ctx } = this
		const { id } = ctx.request.body
		console.log(id)
		const result = await ctx.service.tag.delete(id)
		if (result) {
			ctx.body = {
				code: 200,
				msg: '删除成功'
			}
		} else {
			ctx.body = {
				code: 500,
				errMsg: '删除失败'
			}
		}
	}
}

module.exports = TagController;
