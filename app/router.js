'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	require('./router/home')(app)
	require('./router/user')(app)
	require('./router/article')(app)
	require('./router/upload')(app)
	require('./router/tag')(app)
	require('./router/classify')(app)
};
