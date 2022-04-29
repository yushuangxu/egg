'use strict';

const Service = require('egg').Service
class userService extends Service {
	async create(params) {
		console.log(params)
		const { app } = this
		try {
			const result = await app.mysql.insert('member', params)
			return result
		} catch (error) {
			console.log(error)
			return null
		}
	}
	async isUser(account, password) {
		const { app } = this
	
		try {
			const result = await await app.mysql.get('member', {
				account, password
			})
			return result
		} catch (error) {
			return null
		}
	}

}
module.exports = userService