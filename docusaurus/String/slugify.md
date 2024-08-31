<!-- Generated by documentation.js. Update this documentation by updating the source code. -->## slugifyConverts a string into a slug for URL usage.### Parameters*   `string` **[String][1]** string to convert to slug### Examples```javascript
slugify('The quick brown fox');
// => 'the-quick-brown-fox'

slugify('A. more-Complicated string!..');
// => 'a-more-complicated-string'

slugify('wïth speciäl chærs');
// => 'with-special-chars'
```Returns **[String][1]** Returns slug version of the string.**Meta***   **version**: 2.1.0[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String