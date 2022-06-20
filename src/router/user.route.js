const Router = require("@koa/router");
const {
  register,
  login,
  modefiyPassword,
  update,
} = require("../controller/user.controller");
const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
} = require("../middleware/user.middleware");
const { auth } = require("../middleware/auth.middleware");

const router = new Router({
  prefix: "/users",
});
router.post("/register", userValidator, verifyUser, crpytPassword, register);
router.post("/login", userValidator, verifyLogin, login);
router.patch("/", auth,crpytPassword, modefiyPassword);
// router.patch("/", (ctx, next) => {
//   console.log(ctx.request.header.authorization)
//   ctx.body = ctx.request.header.authorization;
// });

router.post("/update", update);

module.exports = router;
