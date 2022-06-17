
module.exports = app => {
    const { router, controller, } = app;
    router.get('/tag/list', controller.tag.list)
    router.post('/tag/add', controller.tag.add)
    router.post('/tag/delete', controller.tag.delete)
}