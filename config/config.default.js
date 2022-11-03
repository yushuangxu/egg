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
			host: '106.52.176.150',
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
			enable: true,
		},
	};


	config.jwt = {
		secret: '123456'
	};
	// 跨域配置
	config.cors = {
		origin: 'http://viewer.frost.pub',
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
