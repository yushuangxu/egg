
module.exports = app => {
    const { router, controller, } = app;
    router.get('/article/list', controller.article.list)
    router.post('/article/add', controller.article.add)
}