const Koa = require('koa')
const Router = require('@koa/router')
const json = require('koa-json')
const koaBody = require('koa-body');
const configureRoutes = require('./routes')
const config = require('./config');

const app = new Koa();
const router = new Router()

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(json({ pretty: false }));

configureRoutes(router);

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});

app.listen(config.api.port, function(){
  console.log(`Koa server running on port ${config.api.port}`)
});

