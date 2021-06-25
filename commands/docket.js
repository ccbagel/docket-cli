const chalk = require("chalk");
const figlet = require("figlet");


function docket() {
        figlet("Docket!", function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
                console.log(
                    chalk.magentaBright(data)
                )
                const desc = chalk.white(`Welcome to Docket! A NodeJS CLI todo list. To get started run ` + chalk.red(`todos --help `))
                console.log(desc)
        });
    }

module.exports = docket;