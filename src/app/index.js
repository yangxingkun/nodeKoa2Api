const Koa = require("koa2");
const path = require("path");
const cors = require("koa2-cors"); //跨域处理
const koaBody = require("koa-body");
const parameter=require("koa-parameter")
const staticResource = require("koa-static");
const router = require("../router");
const errHandler = require("./errHandler");
const app = new Koa();
require("../config/config.default");
app.use(parameter(app))
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.resolve("./src/upload"),
      keepExtensions: true,
    },
  })
);
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.use(staticResource(path.join(__dirname, "../../static")));
app.use(staticResource(path.join(__dirname, "../upload")));
/* 如何配置多个静态路径 */
app.on("error", errHandler);
module.exports = app;
