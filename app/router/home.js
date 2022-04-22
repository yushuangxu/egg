
module.exports = app => {
	const { router, controller } = app;
	router.get('/list', controller.home.list);
	router.post('/add', controller.home.add)
	router.post('/update', controller.home.update)
}