# Iterating Maps

```
let superHeroes = new Map();

superHeroes.set('Batman', {
  realName = 'Bruce Wayne',
  power: 'Sly',
  weakness: 'Physical strength'
});

superHeroes.set('Spiderman', {
  realName = 'Peter Parker',
  power: 'Spider senses',
  weakness: 'Physical strength'
});

for (let [key, value] of superHeroes) {
  // do something with key and value
}

superHeroes.forEach((value, key) => {
  // do something with the value and key
});

Array.from(superHeroes.keys); // will create an array with all the keys
Array.from(superHeroes.values()); // will create an array with all the values

))
```