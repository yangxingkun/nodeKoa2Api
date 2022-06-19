const { createUser } = require("../service/user.service");
const { userRegisterError } = require('../constant/err.type')
class User {
  async register(ctx, next) {
    // 1. 获取数据
    // console.log(ctx.request.body)
    const { user_name, password } = ctx.request.body;
    // 2. 操作数据库
    try {
      const res = await createUser(user_name, password);
      console.log(res)
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
        console.log(err)
        ctx.app.emit('error', userRegisterError, ctx)
    }
  }
  async login(ctx, next) {
    ctx.body = {
      success: true,
      msg: "用户登录成功",
      data: null,
    };
  }
  async add(ctx, next) {
    ctx.body = {
      success: true,
      msg: "记录添加成功",
      data: null,
    };
  }
  async update(ctx, next) {
    console.log(ctx.request, "拿到请求数据");
    ctx.body = ctx.request.body;
  }
}

module.exports = new User();
