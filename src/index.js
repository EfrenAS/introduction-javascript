
const person = {
  name: 'Tony',
  lastname: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 75401,
    lat: 5465468,
    lng: 6845316
  }
}

const person2 = { ...person }

person2.name = 'Peter'

console.log(person)
console.log(person2)