
const chalk = require("chalk");
const app= require("./app");
app.listen(process.env.APP_PORT, (ctx) => {
  console.log(
    chalk.blue.underline.bold(
      `server is running on http://localhost:${process.env.APP_PORT}/`
    )
  );
});
