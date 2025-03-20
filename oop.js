class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    // console.log(`welcome ${this.name} and age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(id, name, age) {
    super(name, age);
    this.id = id;
  }
  display() {
    console.log(`id is ${this.id} welcome ${this.name} and age: ${this.age}`);
  }
}
const p1 = new Student(5, "moon", 27);
p1.display();
