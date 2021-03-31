let animalMethods = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
  },
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
  },
};

let dogMethods = {
  bark() {
    alert(`I am ${this.name} and I can bark`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColor(newColor) {
    this.color = newColor;
  },
  summary() {
    console.log(
      `I am ${this.name} and I am of ${this.color} color. I can also bark`
    );
  },
};

let catMethods = {
  meow() {
    alert(`I am ${this.name} and I can do meow meow`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I am also do meow meow`;
  },
};

function animal(location, numberOfLegs) {
  let animalProprerties = Object.create(animalMethods);
  animalProprerties.location = location;
  animalProprerties.numberOfLegs = numberOfLegs;
  return animalProprerties;
}

function dog(name, color) {
  let dogProperties = Object.create(dogMethods);
  dogProperties.name = name;
  dogProperties.color = color;
  return dogProperties;
}

function cat(name, colorOfEyes) {
  let catProperties = Object.create(catMethods);
  catProperties.name = name;
  catProperties.colorOfEyes = colorOfEyes;
  return catProperties;
}

Object.setPrototypeOf(dogMethods, animalMethods);
Object.setPrototypeOf(catMethods, animalMethods);
