const controller = require('./controller')

const configureRoutes = function (router){
    let app = router;
    app.get('/gettasks', async (ctx, next) => {
        try {
            let result = await controller.getTasks(ctx.request, ctx.response);
            ctx.body = result;
        } catch (error) {
            ctx.body = error;
        }
      });

      app.get('/gettask/:id', async (ctx, next) => {
        try {
            let result = await controller.getTask(ctx.request, ctx.response);
            ctx.body = result;
        } catch (error) {
            ctx.body = error;
        }          
      });

      app.post('/addtask', async (ctx, next) => {
        try {
            let result = await controller.addTask(ctx.request, ctx.response);
            ctx.body = result;
        } catch (error) {
            ctx.body = error;
        }          
      });

      app.post('/updatetask', async (ctx, next) => {
        try {
            let result = await controller.updateTask(ctx.request, ctx.response);
            ctx.body = result;
        } catch (error) {
            ctx.body = error;
        }          
      });

      app.post('/deletetask', async (ctx, next) => {
        try {
            let result = await controller.deleteTask(ctx.request, ctx.response);
            ctx.body = result;
        } catch (error) {
            ctx.body = error;
        }          
      });
}

module.exports = configureRoutes;