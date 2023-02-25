const inquirer = require('inquirer');
const SVG = require('./lib/svg');
const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');

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
        shape.setColor(responds.shapeColor);
        const svg = new SVG()
        svg.setText(responds.text);
        svg.setShape(shape);
        fs.writeFileSync('logo.svg', svg.render())
    })
}





question();
// FileSystem.writeFileSync('logo.svg', svg(responds.text, responds.textColor, responds))

//     .catch((err) => console.log(err));
