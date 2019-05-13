const Koa = require('koa');
const app = new Koa();
// 注意require('koa-router')返回的是函数:
const bodyParser = require('koa-bodyparser');//对应post提交数据进行格式处理
const controller=require("./controller");
const isProduction = process.env.NODE_ENV === 'production';
let templating = require('./templating');

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

if (! isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

app.use(bodyParser());

app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add router middleware:
app.use(controller());

app.listen(3030);
console.log('app started at port 3030...');