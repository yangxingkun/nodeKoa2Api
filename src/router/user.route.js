const Router=require("@koa/router")
const {register,login,add,update} =require("../controller/user.controller")
const {
    userValidator,
    verifyUser,
    crpytPassword,
    verifyLogin,
  } = require('../middleware/user.middleware')
const router=new Router({
    prefix:"/users"
})
router.post('/register', userValidator, verifyUser, crpytPassword, register)
router.post('/add',add)
router.post('/login',login)
router.post('/update',update)

module.exports=router