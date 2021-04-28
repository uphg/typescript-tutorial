class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

/**
 * 等同于如下 JS： 
 * 
 * class Student {
 *   fullName: string;
 * 
 *   firstName: any;
 *   middleInitial: any;
 *   lastName: any;
 * 
 *   constructor(firstName, middleInitial, lastName) {
 *     this.firstName = firstName
 *     this.middleInitial = middleInitial
 *     this.lastName = lastName
 * 
 *     this.fullName = firstName + " " + middleInitial + " " + lastName;
 *   }
 * }
 */

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "#", "User");

console.log(greeter(user))