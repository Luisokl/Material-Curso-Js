class Person {
    constructor(name,age) {
        this.name = name;  //propriedade 
        this.age = age;
    }
}

// this.  se refere ao proprio objeto 

// Instanciando, criando o objeto:
let personOne = new Person('João', 20);
let personTwo = new Person('Maria', 30);
let personThree = new Person('Luis', 29);

//verificando valores 

console.log(`personOne = ${personOne.name} tem ${personOne.age} anos`);
console.log(`personTwo = ${personTwo.name} tem ${personTwo.age} anos`);
console.log(`personThree = ${personThree.name} tem ${personThree.age} anos`);