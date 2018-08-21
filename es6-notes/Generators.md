# Generators

- Create a function with a `*` after the keyword `function`
  - Run the generator by accessing the method `generatorName.next()`, which will execute the next code block after the `yield` in question
- This lets us stop and start the generator whenever we want

```
function getOrder() {
  return "Pizza and chips"
}

function* generator() {
  alert("Hello there!");
  yeild 'Step one completed.';
  
  alert("Your order is ${getOrder()}.");
  yield 'Stop two completed.';
  
  alert("Thank you for shoppign with us.");
  yield 'Step three completed';
  
  return 'finished';
}

let gen = generator();

// run the generator
gen.next(); 
gen.next(); 
gen.next(); 
```

`gen.next()` will return an object such as `{ value='Step one completed.', done: false }` and `{ value = 'finished', done: true }`.

```
for (var i of generatorName()) {
  // will iterate through the rest of the generator yeilds
}
```

- Using the `for of` combination with generators allows us to avoid repeating code
  - For example, if we had a car object and we wanted to extract the properties `doors`, `colour` and `model`, we can simply create a generator that returns these properties
    - This helps us avoid saying `car.doors`, `car.colour`, and `car.model` numerous times
- We can reuse generators

Consider the example below to explain this phenomena:

```
const stores = {
  store1: 'New York',
  store2: 'India',
}

const car = {
  id: 1,
  brand: 'Ford',
  model: 1999,
  doors: 4,
  colour: 'black',
  wheels: 4,
  stores: stores
}

function* storesGenerator(storesObj) {
  yield storesObj.store1;
  yield storesObj.store2;
}

function* carsGenerator(carObject) {
  yield carObject.doors;
  yield carObject.colour;
  yield carObject.model;
  yield* storesGenerator(carObject.stores);
  // equivalent to:
  // yield carObject.store1; 
  // yield carObject.store2; 
}

let newCar = [];

for (let i of car) {
  newCar = [...newCar, i];
}
```

To include a generator inside another generator, you need to delegate one by putting a `*`. The `*` means whatever value is being generated should be included as a `yeild` statement in the function. 