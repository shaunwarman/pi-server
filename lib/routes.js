const {filterHeadline} = require('./headlines');
const {request, getKey} = require('roto-fantasy-headlines');

module.exports = function (router) {
  router.get('/', async function (ctx, next) {
      try {
        const response = await request();
        const content = getKey('Content', response);

        ctx.body = filterHeadline(content);
        ctx.status = 200;
      }
      catch (e) {
        ctx.body = e;
        ctx.status = 503;
      }
  });

  router.get('/hello', function (ctx, next) {
    ctx.body = 'hello\n';
    ctx.status = 200;
  });
}
