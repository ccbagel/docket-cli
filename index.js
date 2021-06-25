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
.option("-t, --tasks <tasks...>, 'The tasks to mark done. If not specified, all tasks will be marked done.'")
.action(markDone)

program.parse();