<!-- Generated by documentation.js. Update this documentation by updating the source code. -->## toBooleanConverts any value to a Boolean equivalent.**Note:** If no user-defined array is passed, the default true values are:\['true', 'yes', 'y', '1'].### Parameters*   `val` **any** value to check if true or false
*   `trueValuesArr` **AnyArray?** optional array of user defined true values### Examples```javascript
toBoolean('y');
 // => true

toBoolean(null);
// => false
```Returns **[Boolean][1]** Returns a boolean equivalent of the value.**Meta***   **version**: 3.1.1[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
