//requires Employee.js file
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
      }
      //Github is unique data for Engineer
      getGithub(){
          return this.github
      }
      getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;

