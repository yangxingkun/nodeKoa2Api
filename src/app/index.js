const Koa = require("koa2");
const path = require("path");
const cors = require("koa2-cors"); //跨域处理
const koaBody = require('koa-body');
const staticResource = require("koa-static");
const userRouter=require("../router/user.route")
const errHandler = require('./errHandler')
const app = new Koa();
require("../config/config.default");
app.use(koaBody());
app.use(cors());
app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(staticResource(path.join(__dirname, "/static")));
app.on("error",errHandler)
module.exports=app