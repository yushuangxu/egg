const Service = require('egg').Service
class HomeService extends Service {
	async list() {
		const { app } = this
		try {
			const result = await app.mysql.select('home')
			return result
		} catch (error) {
			console.log(error)
			return null
		}
	}
	async add(params) {
		console.log(params)
		const { app } = this
		try {
			const result = await app.mysql.insert('home', params)
			return result
		} catch (error) {
			console.log(error)
			return null
		}
	}
	async update(params) {
		const { app } = this
		try {
			const result = await app.mysql.update('home', params)
			return result
		} catch (error) {
			console.log(error)
			return null
		}
	}
	async getHomeById(id) {
		const { app } = this
		if (!id) {
			console.log('id不能为空')
			return null
		}
		try {
			const result = await app.mysql.select('home', {
				where: { id }
			})
			return result
		} catch (error) {
			console.log(error)
			return null
		}
	}
	async delete() {
		const { app } = this
		try {
			const result = await app.mysql.delete('home', { id })
			return result
		} catch (error) {
			console.log(error)
			return null
		}
	}
}

module.exports = HomeService
