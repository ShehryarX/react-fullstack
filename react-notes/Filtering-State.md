# Filtering State

- Accessing `props` inside classes requires you to use `this.props` to refer to the data
- Generally do not mutate the `state` directly! This can cause `async` problems, so it's better to use a local variable than to reassign to a state variable