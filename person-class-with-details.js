class Person {
    #birthYear;

    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.setBirthYear();
    }

    details() {
        return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
    }

    setBirthYear() {
        const currentYear = new Date().getFullYear();
        this.birthYear = currentYear - this.age;
    }

    updateAge() {
        const currentYear = new Date().getFullYear();
        const currentAge = currentYear - this.birthYear;
        this.age = currentAge;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0 || !Number(value)) return;
        return this._age = value;
    }
    
    get birthYear() {
        return this.#birthYear;
    }

    set birthYear(value) {
        this.#birthYear = value;
    }

    static whoIsOlder(person1, person2) {
        return person1.age > person2.age ? person1 : person2;
    }

    static showDetailInTable(...people) {
        console.table(people);
    }

    // create a give number of instances
    static createInstances(...instancesData) {
        let instances = [];

        for (const data of instancesData) {
            let person = new this(...data);
            person.setBirthYear();
            instances.push(person);
        }

        this.showDetailInTable(...instances)
    }
}

let person1 = ['Rekik', '24', 'Ethiopia'];
let person2 = ['Ezra', '23', 'Ethiopia'];
let person3 = ['somebody', '20', 'Ethiopia'];

Person.createInstances(person1, person2, person3);
