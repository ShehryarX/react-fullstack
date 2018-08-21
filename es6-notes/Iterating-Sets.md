# Iterating Sets

```
let mySet = new Set(['John', 'Harry', 'Shehryar', 'Anne', 'Lola', 'Smith']);

for (let item of mySet) {
  // do something with this item
}

mySet.forEach((item) => {
  // do something with this item
});

// this does not work because mySet is not an array, it's a Set
// to solve this, we need to put [...mySet]
let filtered = mySet.filter((item) => {
  // filter something through a condition
  return item.contains('o');
});

```