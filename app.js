const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



// const sample = new Manager("me", "#123", "email@email.com", "123456");
// const array = [sample]
// console.log(sample)

// render(array)


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

createTeam()
function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            message: "Choose role",
            choices: ["Manager", "Engineer", "Intern"],
            name: "role"
        }
    ])
        .then(response => {
            let role = response.role
            if (role === "Manager") {
                otherInfo = "Office Number"
            } else if (role = "Engineer") {
                otherInfo = "GitHub Username"
            } else if (role = "Intern") {
                otherInfo = "School"
            }
            inquirer.prompt([
                {
                    type: "input",
                    message: "Member Name:",
                    name: "name",
                },
                {
                    type: "input",
                    message: "Member ID:",
                    name: "id",
                },
                {
                    type: "input",
                    message: "Member Email:",
                    name: "email",
                },
                {
                    type: "input",
                    message: `Enter ${otherInfo}`,
                    name: "otherInfo",
                },
                {
                    type: "list",
                    message: "Add another member?",
                    choices: ["Yes", "No"],
                    name: "addNew"
                },
            ])
                .then(response => {
                    console.log(response)
                    if (role === "Manager"){
                        newMember = new Manager (response.name, response.id, response.email, response.otherInfo)
                    } else if (role === "Engineer"){
                        newMember = new Engineer (response.name, response.id, response.email, response.otherInfo)
                    } else if (role === "Intern"){
                        newMember = new Intern (response.name, response.id, response.email, response.otherInfo)
                    };
                    if (response.addNew === "Yes"){
                        createTeam()
                    }
            })
        })
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
