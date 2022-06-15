
module.exports = app => {
    const { router, controller, } = app;
    router.get('/classify/list', controller.classify.list)
    router.post('/classify/add', controller.classify.add)
}