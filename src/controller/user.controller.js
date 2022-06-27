const { createUser, getUerInfo ,updateById} = require("../service/user.service");
const { userRegisterError } = require("../constant/err.type");
const jwt = require("jsonwebtoken");
class User {
  async register(ctx, next) {
    // 1. 获取数据
    // console.log(ctx.request.body)
    const { user_name, password } = ctx.request.body;
    // 2. 操作数据库
    try {
      const res = await createUser(user_name, password);
      console.log(res);
      // 3. 返回结果
      ctx.body = {
        code: 0,
        message: "用户注册成功",
        result: {
          id: res.id,
          user_name: res.user_name,
        },
      };
    } catch (err) {
      console.log(err);
      ctx.app.emit("error", userRegisterError, ctx);
    }
  }
  async login(ctx, next) {
    const { user_name } = ctx.request.body;
    const { password, ...res } = await getUerInfo({ user_name });
    console.log(res)
    // 拿到  id: 14, user_name: 'yxk', is_admin: false   组合生成签证
    try {
      ctx.body = {
        code: 0,
        message: "记录添加成功",
        result: {
          token: jwt.sign({ res }, process.env.JWT_SECRET, { expiresIn: "1d" }),
        },
      };
    } catch (error) {
      console.error("用户登录失败", error);
    }
  }
  async modefiyPassword(ctx, next) {
    // 1. 获取数据
    const id = ctx.state.user.id;
    // console.log(id, "[][]");
    const password = ctx.request.body.password;
    // console.log(password, "[][]");
    // 2. 操作数据库
    if (await updateById({ id, password })) {
      ctx.body = {
        code: 0,
        message: "修改密码成功",
        result: "",
      };
    } else {
      ctx.body = {
        code: "10007",
        message: "修改密码失败",
        result: "",
      };
    }
  }
  async update(ctx, next) {
    // console.log(ctx.request, "拿到请求数据");
    ctx.body = ctx.request.body;
  }
}

module.exports = new User();
