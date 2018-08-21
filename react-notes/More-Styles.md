# More on Styles

- You can use inline styles along with backticks
- You can also use style objects and specify the `style` attribute
- You can also hot-swap the `className` based on a condition and specify the rules in the imported CSS file
- We can use `glamor` by running `npm install --save glamor`
  - This is how we use [glamor](https://github.com/threepointone/glamor):
  ```
  import { css } from 'glamor';
  
  ...
  
  let newsItem = css({
    padding: '20px',
    boxSizing: 'border-box',
    borderBottom: '1px solid grey',
    ':hover': {
      color: 'red',
    },
    '@media(max-width: 1000px)': {
      color: 'blue'
    }
  });


  return (
    <div {...newsItem}>
      ...
    </div>
  );
  ```
  We can add multiple CSS styles by doing `{...newsItem} {...anotherItem}`
  This essentially uses data attributes to append styles.
  Alternatively, we can do `className='${newsItem} ${anotherItem}'`
  