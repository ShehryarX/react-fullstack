# Higher Order Components

You use HOCs when you have some portion of code that you want to reuse somewhere else in the application. This simplifies a lot of code in the long run and is there to prevent code redundancy.

You can create a higher order component by generalizing it and applying it like a wrapper within a component. Here you would need to use `props.children` heavily.

We can also pass components upon rendering:

UserHOC.js

```
import React from 'react';

const UserHOC = (WrappedComponent, arg1) => {
    return (props) => (
        <div>
            <WrappedComponent />
        </div>
    )
}

export default UserHOC; 
```

User.js

```
import React from 'react';

import UserHOC from '../hoc/UserHOC';

const User = () => {
    return (
        <div>
            Hello
        </div>
    );
}

export default UserHOC(User, 'Hello');
```

UserHOC is wrapping around User through the `export default UserHOC(User, 'Hello')`. When React comes to rendering User, it will go to UserHOC, pass User and 'Hello', then render whatever that returns!

Something interesting we are doing is found here:

```
return (props) => (
  <div>
    <WrappedComponent />
  </div>
)
```

ReactRouter will pass on props to the component it will render next. In this case, it will pass props to the UserHOC.js, therefore we are able to access it. We are unable to access props in User.js beacuse it is not what is being exported directly, because UserHOC is.

In order to pass our props to the WrappedComponent, we do: `<WrappedComponent {...props} />`

We would use this because we can pass different arguments and pass components as arguements.

Note that we can call the component we are receiving anything, not necessarily WrappedComponent.