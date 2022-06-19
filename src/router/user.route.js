const Router=require("@koa/router")
const {register,login,add,update} =require("../controller/user.controller")
const router=new Router({
    prefix:"/users"
})
router.post('/register',register)
router.post('/add',add)
router.post('/login',login)
router.post('/update',update)

module.exports=router