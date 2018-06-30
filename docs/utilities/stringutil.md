# StringUtil

## arrToString\(array, delimiter\) {#arrtostring}

Converts and array to string using the delimiter passed

```text
StringUtil.arrToString(['apple','banana','orange'], '-');
// => 'apple-banana-orange'
```

## toSentenceCase\(string\) {#tosentencecase}

Converts a string to a sentence case - only the first letter of the sentence is capitalized.

```text
StringUtil.toSentenceCase('the quick brown fox');
// => 'The quick brown fox'
```

## toTitleCase\(string\) {#totitlecase}

Converts a string to a title case - the first letter of every word is capitalized

```text
StringUtil.toTitleCase('the quick brown fox');
// => 'The Quick Brown Fox'
```

