const conf = new (require("conf"))();
const chalk = require("chalk");

function list() {
    const todoList = conf.get("todo-list");

    if(todoList && todoList.length) {
        //user has tasks in todo list
        console.log(
            chalk.magentaBright.bold("Tasks in GREEN are DONE, tasks in RED are NOT DONE")
        )

        todoList.forEach((task, index) => {
            if(task.done) {
                console.log(
                    chalk.greenBright.bold(`${index}. ${task.text}`)
                )
            } else {
                console.log(
                    chalk.red.bold(`${index}. ${task.text}`)
                )
            }
        })
    } else {
        //user doesnt have any
        console.log(
            chalk.redBright.bold("You do not have any tasks yet!")
        )
    }
}

module.exports = list;