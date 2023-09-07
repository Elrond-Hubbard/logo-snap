const inquirer = require('inquirer')
const fs = require('fs');
const {Shape, Square, Circle, Triangle} = require('./lib/shapes');
const SVG = require('./lib/svg');

const questions = [{
    type: "input",
    message: "Enter up to three characters for your logo text:",
    name: "logoText",
},
{
    type: "input",
    message: "Enter a color keyword or hex value for your logo text:",
    name: "logoTextColor",
},
{
    type: "list",
    message: "Select a logo background shape:",
    name: "logoShape",
    choices: ["Square", "Circle", "Triangle"],
    default: ["Square"]
},
{
    type: "input",
    message: "Enter a color keyword or hex value for your logo background",
    name: "logoShapeColor",
}];

function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, () => console.log('success!'))
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const svg = new SVG();
            svg.setText(answers.logoText, answers.logoTextColor)
            const shape = eval(`new ${answers.logoShape}()`)
            shape.setColor(answers.logoShapeColor)
            svg.setShape(shape)
            writeToFile('./examples/logo.svg', svg.render())
        })
}
init()