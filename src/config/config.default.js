const path = require('path');
const dotenv= require('dotenv')
dotenv.config({
    override: true,
    path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`)
});
// console.log(chalk.red(process.env.ApiSign));
// console.log(chalk.red.bold.bgWhite(process.env.NODE_ENV));
// console.log(chalk.red.bold.bgWhite(process.env.APP_PORT));
module.exports=dotenv