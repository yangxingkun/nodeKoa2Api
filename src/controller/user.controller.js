const { createUser } = require("../service/user.service");

class User {
  async register(ctx, next) {
    let { user_name, password } = ctx.request.body;
    let res = await createUser(user_name, password);
    ctx.body = res;
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
