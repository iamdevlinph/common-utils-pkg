<!-- Generated by documentation.js. Update this documentation by updating the source code. -->## readableBytesConverts a number of bytes to a human readable file size.### Parameters*   `bytes` **[Number][1]** number of bytes to show
*   `decimals` **[Number][1]?** optional number of decimals to show### Examples```javascript
readableBytes(1234);
// => 1.205078125 kB

readableBytes(1234, 2);
// => 1.21 kB
```Returns **[String][2]** Returns a human readable file size.**Meta***   **version**: 1.0.0[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String