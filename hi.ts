interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello，" + person.firstName + " and " + person.lastName
}

console.log(greeter({ firstName: 'Jack', lastName: 'Bark' }))