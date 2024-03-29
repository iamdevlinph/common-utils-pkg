<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

# toBoolean

Converts any value to a Boolean equivalent.

**Note:** If no user-defined array is passed, the default true values are:

\['true', 'yes', 'y', '1'].

### Parameters

*   `val` **any** value to check if true or false
*   `trueValuesArr` **[array][1]** of user defined true values (optional, default `true,'true','yes','y','1',1`)

### Examples

```javascript
toBoolean('y');
 // => true

toBoolean(null);
// => false
```

Returns **[boolean][2]** equivalent of the value.

**Meta**

*   **version**: 3.1.1

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean


* Source: [to-boolean.ts](https://github.com/iamdevlinph/common-utils-pkg/blob/main/src/to-boolean/to-boolean.ts#L24-L39)