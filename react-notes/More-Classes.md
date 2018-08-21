# More on Classes

By default, when you extend, the constructor of the superclass is automatically called.

```
class Car {
  constructor() {
    this.wheels = 4;
    this.model = 'Good';
  }
}

class Ford extends Car { 

}

Ford f = new Ford();

console.log(f.wheels); // prints out 4
```

To specify more instructions in the constructor of the child class, you do the following:

```
constructor() {
  super(); // calls Car's constructor
  this.warranty = '2 years';
}
```

In React, this concept applies because all classes `extends React`. This means that any `props` stored in the superclass are accessible throughout the whole app.  