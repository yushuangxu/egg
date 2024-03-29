
module.exports = app => {
    const { router, controller, } = app;
    router.get('/article/list', controller.article.list);
    router.post('/article/add', controller.article.add);
    router.post('/article/delete', controller.article.delete);
    router.post('/article/info', controller.article.info);
    router.post('/article/update', controller.article.update);
};