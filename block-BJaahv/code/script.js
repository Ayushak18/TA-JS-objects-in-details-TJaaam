// Creating object using function

function createObj(name, id, noOfProjects) {
  let obj = {
    name: name,
    id: id,
    noOfProjects: noOfProjects,
    getProjects: function () {
      return obj.noOfProjects;
    },
    changeName: function (newName) {
      return (obj.name = newName);
    },
    incrementProject: function () {
      return ++obj.noOfProjects;
    },
    decrementProject: function () {
      return --obj.noOfProjects;
    },
  };

  return obj;
}

let ayush = createObj("Ayush", 12, 5);

// Prototypal Pattern

let objMethods = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    return (this.name = newName);
  },
  incrementProject: function () {
    return ++this.noOfProjects;
  },
  decrementProject: function () {
    return --this.noOfProjects;
  },
};

function createObj(name, id, noOfProjects) {
  let obj = Object.create(objMethods);
  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;
  obj.methods = objMethods;
  return obj;
}

// Pseudoclassical Way

function CreateObj(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreateObj.prototype = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    return (this.name = newName);
  },
  incrementProject: function () {
    return ++this.noOfProjects;
  },
  decrementProject: function () {
    return --this.noOfProjects;
  },
};

let ayush = new CreateObj("Ayush", 12, 5);

// Using Class

class Person {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

  getProjects() {
    return this.noOfProjects;
  }
  changeName(newName) {
    return (this.name = newName);
  }
  incrementProject() {
    return ++this.noOfProjects;
  }
  decrementProject() {
    return --this.noOfProjects;
  }
}

let ayush = new Person("Ayush", 12, 5);
