
module.exports = app => {
	const { router, controller, } = app;
	
    router.post('/upload/doAdd',controller.upload.doAdd)
	
}