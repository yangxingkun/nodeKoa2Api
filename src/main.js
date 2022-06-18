const Koa=require("koa")
const path = require('path');
const chalk = require('chalk');
const app=new Koa()
app.use((ctx,next)=>{
ctx.body='hello api'
})
require('dotenv').config({
    override: true,
    path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`)
  });
  
console.log(chalk.red.bold.bgWhite(process.env.ApiSign));
app.listen(3000,(ctx)=>{
console.log(
    chalk.blue.underline.bold('server is running on http://localhost:3000/')
  );
})