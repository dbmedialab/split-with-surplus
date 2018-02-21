# split-with-surplus
String.split with a limit where the surplus is placed as a last element.

``` js
npm install split-with-surplus
```

``` js
import split from 'split-with-surplus';

split('a:b:c:d:e:f', ':', 3);
// ['a', 'b', 'c', 'd:e:f']
```
