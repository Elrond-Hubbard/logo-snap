const inquirer = require('inquirer')
const fs = require('fs');
const {Shape, Square, Triangle, Circle} = require('./lib/shapes');
const SVG = require('./lib/svg');

const questions = [{
    type: "input",
    message: "Enter up to three characters for your logo:",
    name: "logoText",
}]

function init() {
    inquirer
        .prompt()
        .then((answers) => {
            console.log(answers)
        })
}
init()