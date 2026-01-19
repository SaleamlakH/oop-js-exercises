/**
 * create a class called "Person" with properties for name, age and country. 
 * a method to display the person's details. 
 * Create two instances  and display their details.
 */

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    details() {
        return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
    }
}

let person1 = new Person('Rekik', '24', 'Ethiopia');
let person2 = new Person('Ezra', '23', 'Ethiopia');

console.log('person1 details');
console.log(person1.details());

console.log('\nperson2 details');
console.log(person2.details());
