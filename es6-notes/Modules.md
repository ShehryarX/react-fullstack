# Modules

To declare modules, we need to use the keyword `export` and `import`.

You can export variables in a Javscript file by doing `export const name = value;`, and import them somewhere else by doing `import { name } from './exportingFileName.js'`. This also works for functions, arrays, and more.  

If, in the exporting file, we want to export multiple variables, we can do the following:

```
export {
  var1,
  var2,
  function1,
  function2,
  arr1,
  arr2,
};
```

We can also alias the names to export under a different name. For example:

```
export {
  var1 as coolVar1,
  var2 as coolVar2
}
```

This means that outside classes will import `var1` and `var2` as `coolVar1` and `coolVar2`, respectively. 

When importing, we can also use this type of aliasing by doing the following: 

```
import {
  random as randomFunction,
  ...
}
```

Later in the program, we can access `random` through `randomFunction`. 

To import everything from a file, we `import * as objectName from './exportingFileName.js'`. We can access the exports through the `objectName.exportName`.

The keyword `default` can be used for exporting modules. When you export a function as default, you don't need to use `{ exportName }`, rather you can just use `exportName` in the import. You can only export one object as `default` for a module.