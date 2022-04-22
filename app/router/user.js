
module.exports = app => {
	const { router, controller, jwt } = app;
	router.post('/createUser', controller.user.createUser);
	router.post('/user/login', controller.user.login)
	router.post('/user', jwt, controller.user.index)
}