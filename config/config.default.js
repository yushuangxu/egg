/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};
	// use for cookie sign key, should change to your own and keep security
	config.mysql = {
		// 单数据库信息配置
		client: {
			// host
			host: '175.178.251.199',
			// 端口号
			port: '3306',
			// 用户名
			user: 'forst',
			// 密码
			password: 'xs19860514',
			// 数据库名
			database: 'forst',
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	};
	config.keys = appInfo.name + '_1646895693217_463';
	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: true
		},
		domainWhiteList: ['http://flog.frost.pub', 'http://localhost:3000','http://localhost:3002']
	};


	config.jwt = {
		secret: '123456'
	};
	// 跨域配置
	config.cors = {
		credentials: true,
		origin: 'http://127.0.0.1:8082',
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',

	};
	// add your middleware config here
	config.middleware = [];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};
	config.multipart = {
		mode: 'file',
	};
	return {
		...config,
		...userConfig,
	};
};
