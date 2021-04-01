// Using the pseudoclassical Pattern

function CreateAnimal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}

function CreateDog(name, color, location, numberOfLegs) {
  CreateAnimal.call(this, location, numberOfLegs);
  this.name = name;
  this.color = color;
}

CreateAnimal.prototype = {
  eat() {
    console.log(`I love in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
  },
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
  },
};

CreateDog.prototype = {
  bark() {
    return `I am ${this.name} nad I can bark`;
  },
  changeColor(newColor) {
    this.color = newColor;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} and I can also bark`;
  },
};

function CreateCat(name, colorOfEyes, color, location, numberOfLegs) {
  CreateDog.call(this, name, color, location, numberOfLegs);
  this.colorOfEyes = colorOfEyes;
}

CreateCat.prototype = {
  meow() {
    return `I am ${this.name} and I can do meow meow`;
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};

let horse = new CreateAnimal("India", 6);
let oreo = new CreateDog("Oreo", "white", "India", 4);
let kitty = new CreateCat("Meow", "blue", "black", "USA", 5);

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);
Object.setPrototypeOf(CreateCat.prototype, CreateDog.prototype);

// Using class Pattern

class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    console.log(`I love in ${this.location} and I can eat`);
  }
  changeLocation(newLocation) {
    this.location = newLocation;
  }
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
  }
}

class Dog extends Animal {
  constructor(name, color, location, numberOfLegs) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }

  bark() {
    return `I am ${this.name} nad I can bark`;
  }
  changeColor(newColor) {
    this.color = newColor;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} and I can also bark`;
  }
}

class Cat extends Dog {
  constructor(name, colorOfEyes, color, location, numberOfLegs) {
    super(name, color, location, numberOfLegs);
    this.colorOfEyes = colorOfEyes;
  }
  meow() {
    return `I am ${this.name} and I can do meow meow`;
  }
  changeName(newName) {
    this.name = newName;
  }
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}

let horse = new Animal("India", 6);
let oreo = new Dog("Oreo", "Black", "USA", 8);
let kitty = new Cat("Kitty", "Blue", "black", "Russia", 8);
