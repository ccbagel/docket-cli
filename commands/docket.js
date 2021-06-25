const chalk = require("chalk");
const figlet = require("figlet");


function docket() {
        figlet("Docket!", function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
                console.log(data)
                const desc = chalk.white.bgMagenta(`Welcome to Docket! A NodeJS CLI todo list. To get started run --help `)
                console.log(desc)
        });
    }

module.exports = docket;