/*
Oregon Trail assessment breakdown

// example constructor function for a Dog class
function Dog (name, breed, isGoodBoy) {
    this.name = name;
    this.breed = breed;
    this.isGoodBoy = isGoodBoy;
}

Following this example, create constructor functions for a Traveler and a Wagon.

A Traveler has these properties:
- a name property with an initial value that must be provided as a parameter to the constructor
- a food property with an initial value of 1
- an isHealthy property with an initial value of true
*/

// Write the Traveler constructor function here

// test traveler constructor
// NOTE: to run tests, open git bash, cd to directory containing this file and run node main.js
const testTraveler = new Traveler("test");
console.log("Testing traveler constructor function...");
console.log("Expected: Traveler { name: 'test', food: 1, isHealthy: true }");
console.log("Actual:", testTraveler);

/*
A Wagon has these properties:
- a capacity property with an initial value that must be provided as a parameter to the constructor
- a passengerList property with an initial value of an empty array
*/

// Write the Wagon constructor function here
// YOUR CODE HERE

// test wagon constructor
const testWagon = new Wagon(3);
console.log("Testing wagon constructor function...");
console.log("Expected: Wagon { capacity: 3, passengerList: [] }");
console.log("Actual:", testWagon);

Traveler.prototype.hunt = function() {
  // increases the traveler's food by 2.
  // YOUR CODE HERE
};

// test traveler.hunt method
testTraveler.hunt();
console.log("Testing traveler hunt method...");
console.log("Expected: Traveler { name: 'test', food: 2, isHealthy: true }");
console.log("Actual:", testTraveler);

Traveler.prototype.eat = function() {
  // If the traveler has less than 1 food, sets the travelers isHealthy property to false.
  // Else, decreases the travelers food by 1
  // YOUR CODE HERE
};

// test traveler.eat method
testTraveler.eat();
testTraveler.eat();
testTraveler.eat();
console.log("Testing traveler eat method...");
console.log("Expected: Traveler { name: 'test', food: 0, isHealthy: false }");
console.log("Actual:", testTraveler);

Wagon.prototype.getAvailableSeatCount = function() {
  // Return the number of empty seats, determined by the capacity compared to the number of passengers in passengerList.
  // YOUR CODE HERE
};

//test wagon.getAvailableSeatCount
console.log("Testing wagon getAvailableSeatCount method...");
console.log("Expected: 3");
console.log("Actual:", testWagon.getAvailableSeatCount());

Wagon.prototype.join = function(traveler) {
  // If there is space, add the traveler to the wagon.
  // If the wagon is full, don't add them.
  // YOUR CODE HERE
};

//test wagon.join method
testWagon.join(testTraveler);
console.log("Testing wagon join method...");
console.log(
  "Expected:",
  `Wagon {
    capacity: 3,
    passengerList: [ Traveler { name: 'test', food: 0, isHealthy: false } ]
  }`
);
console.log("Actual:", testWagon);

Wagon.prototype.shouldQuarantine = function() {
  // Return true if there is at least one unhealthy person in the wagon. Return false if not.
  // YOUR CODE HERE
};

//test wagon.shouldQuarantine method
const testWagon2 = new Wagon(2);
console.log("Testing wagon shouldQuarantine method...");
console.log("Expected: true false");
console.log(
  "Actual:",
  testWagon.shouldQuarantine(),
  testWagon2.shouldQuarantine()
);

Wagon.prototype.totalFood = function() {
  // Return the total amount of food among all occupants of the wagon.
  // YOUR CODE HERE
};

//test wagon.totalFood method
const testTraveler2 = new Traveler("test2");
testWagon2.join(testTraveler2);
console.log("Testing wagon totalFood method...");
console.log("Expected: 0 1");
console.log("Actual:", testWagon.totalFood(), testWagon2.totalFood());

/*
// example constructor function which inherits from the Dog class from line 5
function GuardDog (name, breed, isGoodBoy, attackWord) {
    Dog.call(this, name, breed, isGoodBoy);
    this.attackWord = attackWord;
}

// create the GuardDog prototype from the Dog prototype
GuardDog.prototype = Object.create(Dog.prototype);
// set the GuardDog prototype's constructor to the GuardDog constructor function
GuardDog.prototype.constructor = GuardDog;

// add methods the same way we did for a regular class
GuardDog.prototype.bark = function () {
    // barking code here
}

Now lets add 2 new types of travelers using inheritance.
The Doctor class extends the Traveler class but it has one additional method.
*/

// Write the Doctor constructor here
// YOUR CODE HERE

// test doctor constructor
const testDoctor = new Doctor("test");
console.log("Testing doctor constructor function...");
console.log("Expected: Doctor { name: 'test', food: 1, isHealthy: true }");
console.log("Actual:", testDoctor);

Doctor.prototype.heal = function(traveler){
    // change the passed in traveler's isHealthy property to true
   
}

// test doctor heal method
testDoctor.heal(testTraveler)
console.log("Testing doctor heal method...");
console.log("Expected: true");
console.log("Actual:", testTraveler.isHealthy);

// The Hunter class extends the Traveler class but it starts with 2 food instead of 1 and has slightly different methods.

// Write the Hunter constructor here
// YOUR CODE HERE


// test hunter constructor
const testHunter = new Hunter("test");
console.log("Testing hunter constructor function...");
console.log("Expected: Hunter { name: 'test', food: 2, isHealthy: true }");
console.log("Actual:", testHunter);

Hunter.prototype.hunt = function(){
    // Increase the hunter's food by 5. (A normal traveler gains only 2.)
    // YOUR CODE HERE
}

// test hunter hunt method
testHunter.hunt()
console.log("Testing hunter hunt method...");
console.log("Expected: Hunter { name: 'test', food: 7, isHealthy: true }");
console.log("Actual:", testHunter);

Hunter.prototype.eat = function(){
    // If the hunter has less than 2 food, set the hunters food to 0 and their isHealthy property to false
    // Otherwise, decrease the hunters food by 2
    // YOUR CODE HERE
}

// test hunter eat method
testHunter.eat()
testHunter.eat()
testHunter.eat()
testHunter.eat()
console.log("Testing hunter eat method...");
console.log("Expected: Hunter { name: 'test', food: 0, isHealthy: false }");
console.log("Actual:", testHunter);

Hunter.prototype.giveFood = function(traveler, numOfFoodUnits){
    // Transfers numOfFoodUnits from the hunter to a different traveler. If the hunter has less food than they are being asked to give, 
    // then no food should be transferred.
    // YOUR CODE HERE
}

// test hunter giveFood method
testHunter.hunt()
testHunter.giveFood(testTraveler, 5)
testHunter.giveFood(testTraveler, 1)
console.log("Testing hunter givefood method...");
console.log("Expected: 0 5");
console.log("Actual:", testHunter.food, testTraveler.food);





// FINAL TEST CODE
// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);