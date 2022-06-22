const Router = require("@koa/router");
const { upload, create,update } = require("../controller/goods.controller");

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

// 发布商品接口
router.post("/", auth, hadAdminPermission, validator, create);

// 修改商品接口
router.put('/:id', auth, hadAdminPermission, validator, update)

module.exports = router;
