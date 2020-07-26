function Person(name) {
  this.name = name
  console.log(this.name);

}

console.log(Person('Tom'));
console.log(new Person('Tom1'));
