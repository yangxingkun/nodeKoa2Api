const Router = require("@koa/router");
const {
  upload,
  create,
  update,
  remove,
  restore,
  findAll
} = require("../controller/goods.controller");

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
router.put("/:id", auth, hadAdminPermission, validator, update);

// 删除商品接口
// router.delete("/:id", auth, hadAdminPermission, remove);
// 删除商品接口(软删除)

router.post('/:id/off', auth, hadAdminPermission, remove)
router.post('/:id/on', auth, hadAdminPermission, restore)
router.get('/', findAll)

module.exports = router;
