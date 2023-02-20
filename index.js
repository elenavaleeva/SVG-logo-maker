const inquirer = require('inquirer');
const svg = require('./lib/svg');
const { Triangle, Circle, Square } = require('./lib/shapes');

function question() {
    inquirer.prompt([
        {
            name: "text",
            type: "input",
            message: "Enter text for the logo "
        },
        {
            name: "textColor",
            type: "input",
            message: "enter text color"
        },
        {
            name: "shapeColor",
            type: "input",
            message: "Enter shape text for the logo "
        },
        {
            name: "shapeType",
            type: "list",
            message: "Select a shape for the logo",
            choices: ["circle", "square", "triangle"],
        },

    ]).then(responds => {
        console.log(responds);
        let shape;
        if (responds.shapeType === "circle") {
            shape = new Circle
        } if (responds.shapeType === "triangle") {
            shape = new Triangle
        } if (responds.shapeType === "square") {
            shape = new Square
        }
    })
}
question();