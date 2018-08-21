# Pure Components

You can `extends PureComponent`, which means that React will not run `render()` unless the `state` of a component has changed. This saves us from checking countless conditions inside the `shouldComponentUpdate()` method. Pure components are useful because we don't want React to render a huge app hundreds of times!