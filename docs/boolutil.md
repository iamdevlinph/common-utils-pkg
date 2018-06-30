# BoolUtil

## toBool\(val\) {#tobool}

Accepts any value and check if it matches to a list of predefined true values

```text
BoolUtil.toBool('y');
// => true
```

{% hint style="info" %}
This method uses the following to determine if the value is true

* 'true'
* 'yes'
* 'y'
* '1'

All values are parsed into strings and compared to the default list of true values
{% endhint %}


