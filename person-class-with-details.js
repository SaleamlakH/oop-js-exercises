/**
 * create a class called "Person" with properties for name, age and country. 
 * a method to display the person's details. 
 * Create two instances  and display their details.
 * 
 * a static method to compare the ages of two Person instances and returns the older one.
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

    static whoIsOlder(person1, person2) {
        return person1.age > person2.age ? person1 : person2;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0 || !Number(value)) return;
        return this._age = value;
    }
}

let person1 = new Person('Rekik', '24', 'Ethiopia');
let person2 = new Person('Ezra', '23', 'Ethiopia');

console.log('person1 details');
console.log(person1.details());

console.log('\nperson2 details');
console.log(person2.details());

let olderPerson = Person.whoIsOlder(person1, person2);
console.log("\nThe older person is\n", olderPerson.details());
