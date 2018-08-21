# Function and Class-based Components
- Functional components just send JSX
  - Returns just static data
  - It doesn't care about any sort of `state` or anything else that happens with other components

```
import Reactfr from 'react';

const FunctionalComponent = () => {
  return (
    ...
  );
}
```

- Class-based components
  - Ability to know what's happening in the application
  - Have a record of data that is used during the application

```
import React, { Component } from 'react';

class ClassBasedComponent extends Component {
  render() {
    return (
      ...
    );
  }
}

```