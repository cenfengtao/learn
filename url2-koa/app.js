const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const bodyParser = require('koa-bodyparser');//对应post提交数据进行格式处理
const controller=require("./controller");

const app = new Koa();

app.use(bodyParser());

// add router middleware:
app.use(controller());

app.listen(3030);
console.log('app started at port 3030...');