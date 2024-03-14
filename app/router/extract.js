
module.exports = app => {
    const { router, controller, } = app;
    router.get('/extract/list', controller.extract.list);
    router.post('/extract/add', controller.extract.add);
    router.post('/extract/delete', controller.extract.delete);
    router.post('/extract/info', controller.extract.info);
    router.post('/extract/update', controller.extract.update);
};