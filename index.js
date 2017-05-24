const BodyParser = require('koa-body');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const routes = require('./lib/routes');
routes(router);

app.use(BodyParser());
app.use(router.routes());

app.listen(3000);
