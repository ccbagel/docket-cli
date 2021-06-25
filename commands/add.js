const conf = new (require('conf'))()
const chalk = require('chalk')

function add(task) {
    //get current todo list
    let todoList = conf.get("todo-list");

    if(!todoList) {
        //default value for todos-list
        todoList = [];
    }

    //push new task to the todos-list
    todoList.push({
        text: task,
        done: false
    })

    //set todo-list in conf
    conf.set("todo-list", todoList)

    //display msg to user
    console.log(
        chalk.greenBright.bold("Task has been added successfully!")
    );
}

module.exports = add;