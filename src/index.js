const person = {
  name: "John",
  lastname: "Doe",
  age: 50
}; // H00XC01

// { name: "John", lastname: "Doe", age: 50} => H00XC01

const personTwo = {
  name: "John",
  lastname: "Doe",
  age: 50
}; // H00XC02

// { name: "John", lastname: "Doe", age: 50} => H00XC02

// const coppiedPerson = person // H00XC01
const coppiedPerson = { ...person }; // { name: "John", lastname: "Doe", age: 50} => H00XC03

coppiedPerson.name = "Juan"; // H00XC01 => name = "Juan"
coppiedPerson.lastname = "Pérez"; // H00XC01 => lastname = "Pérez"
coppiedPerson.age = 20; // H00XC01 => age = 20

const numberOne = 10; // 10

let numberTwo = numberOne; // 10

numberTwo = 25; //25

console.log({ numberOne });

console.log({ person });

console.log({ coppiedPerson });

if (person === personTwo) {
  // H00XC01 === H00XC02
  console.log("Las personas son iguales");
}

// Object.freeze

const test = "Soy un test";

let testTwo = "Soy otro test";

testTwo = " Soy el test número dos";

// test = "Soy el test número uno";

const subject = {
  name: "Desarrollo Móvil",
  schedule: "M-M"
}; // H00XC04
// { name: "Desarrollo Móvil", schedule: "M-M"} => H00XC04

Object.freeze(subject);
// subject.name = "Desarrollo Web";

console.log({ subject });

console.log({ test, testTwo });

// arrray methods

const people = [
  {
    name: "John",
    lastname: "A",
    age: 50
  },
  {
    name: "Juan",
    lastname: "B",
    age: 55
  },
  {
    name: "Pedro",
    lastname: "C",
    age: 70
  },
  {
    name: "Jose",
    lastname: "D",
    age: 16
  },
  {
    name: "Miguel",
    lastname: "E",
    age: 25
  }
];

const mappedPeople = [...people].map(
  (person) => (person.name = `C. ${person.name}`)
);

const filterPeople = [...people].filter((person) => person.age > 18);

console.log(people, mappedPeople, filterPeople);

// Ejercicio
const users = [
  {
    name: "John",
    username: "Juanito99",
    email: "juanito99999@mail.com",
    balance: 100
  },
  {
    name: "Pedro",
    username: "Petter97",
    email: "petter99@mail.com",
    balance: 1000
  },
  {
    name: "Jacinto",
    username: "jacinto88",
    email: "jacinto88@mail.com",
    balance: 0
  }
];

// Usuarios con mas de 100 en su cuenta
function balance(users){
  return users.balance
}

// Usuarios donde su email sea mayor a 20 caracteres

// Cambiar el nombre del usuario a Sr. ${nombre}
