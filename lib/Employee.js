class Employee {
    // constructor for Employee info
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName(){
        return this.name
    };
    getId(){
        return this.id
    };
    getEmail(){
        return this.email
    };
    getRole(){
        return "Employee"
    }
  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Email: ${this.email}`);
    }
  }

  module.exports = Employee;
  
  // for in file testing purposes only
  const sample = new Employee("me", "#123", "email@email.com");
  
  sample.printInfo();
  
