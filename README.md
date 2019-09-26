# Sort with exclusions

Allows you to sort an array while using a callback to determine which elements to exclude.
Uses Array.sort under the hood. No external dependencies.

### Example
```javascript
  const sortWithExclusions = require('sort-with-exclusions');
  
  sortWithExclusions([3, 2, 1], value => value === 3); // => [3, 1, 2]
  
  // Using an Array.sort comparison function
  sortWithExclusions([3, 2, 1], value => value == 1, (a, b) => a - b); // => [2, 3, 1]
```

# Installation
```bash
$ npm install sort-with-exclusions
```

# License

MIT © Andy Hansen
