# Strings and Numbers

## Strings

`repeat` allows you to repeat strings as many times as you want

```
string.repeat(numberOfTimes)
```

`indexOf` gives us the position of a substring within a string. In ES6, we can use `.startsWith(substring)` to check if a string starts with a substring. We can also specify where to start by doing `.startsWith(substring, startIndex)`. 

There is also `.endsWidth` which does a similar operation. `.endsWidth(substring, wordLength)` checks if the first `wordLength` characters of the string ends with the substring.

We also have `includes(substring)`. 
Rather than `indexOf`, we get a boolean return value rather than an index.

## Numbers
`Number.isSafeInteger(number)` checks if an integer is safe according to Javascript. If you put a valid integer, it will return true. If you put in a decimal, it will return false. 

`Number.isInteger(number)` does a similar process.

`Math.trunc(42.8)` truncs the number. This chops off the decimal or fractional portion.