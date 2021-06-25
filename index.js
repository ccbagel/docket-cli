#! /usr/bin/env node
const {program} = require("commander");
const docket = require("./commands/docket");
const list = require("./commands/list");
const add = require("./commands/add");
const markDone = require("./commands/markDone");
const chalk = require("chalk");
const figlet = require("figlet");

program 
.command("docket")
.description(
    chalk.magentaBright("Welcome to Docket!")
)
.action(docket)


program
.command("list") 
.description(
    chalk.magentaBright("List all TODO tasks")
)
.action(list)


program
.command("add <task>")
.description(
    chalk.magentaBright("Add a new TODO task")
)
.action(add)

program
.command("mark-done")
.description(
    chalk.magentaBright("Mark commands done")
)
.option("-t, --tasks <tasks...>, 'after you run `todos mark-done --tasks <tasks> , please specify what number the task was to avoid deleting all tasks. if you're seeing this error, you might also have typed in a command wrong. run todos --help to fix it` '")
.action(markDone)

program.parse();