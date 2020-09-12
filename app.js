const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//const to contain teamMembers Array generated as members added
const teamMembers = []

//executes the createTeam function 
createTeam()


function createTeam() {
    //first prompt to determine the role of the member
    inquirer.prompt([
        {
            type: "list",
            message: "Choose role",
            choices: ["Manager", "Engineer", "Intern"],
            name: "role"
        }
    ])
        //depending on the role chosen above, otherInfo will be renamed on the front end view
        .then(response => {
            let role = response.role
            if (role === "Manager") {
                otherInfo = "Office Number"
            } else if (role === "Engineer") {
                otherInfo = "GitHub Username"
            } else if (role === "Intern") {
                otherInfo = "School"
            }

            //inquirer prompt for member details
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
                    //prompt to determine if createTeam function will loop or end
                    type: "list",
                    message: "Add another member?",
                    choices: ["Yes", "No"],
                    name: "addNew"
                },
            ])
                .then(response => {
                    console.log(response)
                    // if statement determining the class of the received response
                    if (role === "Manager") {
                        newMember = new Manager(response.name, response.id, response.email, response.otherInfo)
                    } else if (role === "Engineer") {
                        newMember = new Engineer(response.name, response.id, response.email, response.otherInfo)
                    } else if (role === "Intern") {
                        newMember = new Intern(response.name, response.id, response.email, response.otherInfo)
                    };

                    //pushes response to the array
                    teamMembers.push(newMember);

                    //if statement to determine if adding a member (looping the function) or generating the html
                    if (response.addNew === "Yes") {
                        createTeam()
                    } createHTML()
                })
        })
}

//function to generate html
function createHTML() {
    //if statement to check if directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
}

