# typeStash
> Redux type-management library:



**Why typeStash**:

- typeStash removes the need for a dedicated "types" file
- I developed this because I find the process of creating types to be disruptive

## Index:
1. [Installation:](#installation)
2. [Usage:](#usage)
5. [API:](#api)
6. [Dependencies:](#dependencies)
7. [Author:](#author)
8. [License:](#license)

***
## Installation:
```
npm install --save typeStash
```

***
## Usage:

- access your types through the library's `.use()` method
- if there is no existing constant that matches the input, it creates it; otherwise, it returns it

**Actions:**
```js
// without typeStash:
import { type__APP_RENDER } from '../App_types.js';

export default (bool) => {
  return {
    type: type__APP_RENDER,
    payload: bool
  };
};

// with typeStash:
import typeStash from 'typeStash';

export default (bool) => {
  return {
    type: typeStash.use('APP_RENDER'),
    payload: bool
  };
};
```

**Reducers:**
```js
// without typeStash:
import { type__App_RENDER } from '../App_types.js';

export default (state = false, action) => {
  switch(action.type) {
    case type__App_RENDER:
      return action.payload;
    default:
      return state;
  };
};

// with typeStash:
import typeStash from 'typeStash';

export default (state = false, action) => {
  switch(action.type) {
    case typeStash.use('App_RENDER'):
      return action.payload;
    break;
    default:
      return state;
  };
};
```

***
## API:
## typeStash.use([*string*]):

- This method lets you access and create type's through the library
- By convention, name your types in all caps

**Arguments**([*1*]):

1. [*type_name*]:
    - A string which gets used as the type

**Returns**: [*string*]

**Example**:
```js
typeStash.use('POST_CREATE');
```

***
## Dependencies:
-**none**

## Author:
**[Dane Sirois](https://www.linkedin.com/in/dane-sirois/)**

## License:
**[MIT](https://opensource.org/licenses/MIT)**
