const Router = require("@koa/router");
const { upload, create } = require("../controller/goods.controller");

const { auth, hadAdminPermission } = require("../middleware/auth.middleware");
const { validator } = require("../middleware/goods.middleware");

// const {
//   userValidator,
//   verifyUser,
//   crpytPassword,
//   verifyLogin,
// } = require("../middleware/user.middleware");
const router = new Router({
  prefix: "/goods",
});
/* 商品上传 */
router.post("/upload", auth, hadAdminPermission, upload);
/* 商品添加 */
// 发布商品接口
router.post("/", auth, hadAdminPermission, validator, create);
module.exports = router;
