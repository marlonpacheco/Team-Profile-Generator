//requires Employee.js file
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
      }
      //School is unique data for Intern
      getSchool(){
          return this.school
      }
      getRole(){
        return "Intern"
    }
}

module.exports = Intern;