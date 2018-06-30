# FileUtil

## convertBytes\(number, decimals\) {#strtoarray}

Converts bytes to a human readable format

```text
FileUtil.convertBytes(1);
// => '1 byte(s)'

FileUtil.convertBytes(1024);
// => '1 kB'

FileUtil.convertBytes(1234);
// => '1.205078125 kB'

FileUtil.convertBytes(1024, 2);
// => '1.21 kB'
```


