# fuse-box-typechecker

## (needs fuse-box 2.0.0.beta.8 ++)

### How to install
```npm install git://github.com/fuse-box/fuse-box-typechecker --save-dev```


### Output sample
![Output sample](https://github.com/fuse-box/fuse-box-typechecker/raw/master/image/sampleNew.png "Output sample")


### How to use
```javascript

var TypeHelper = require('fuse-box-typechecker').TypeHelper


// test async worker
var testSync = TypeHelper({
    tsConfig: './tsconfig.json',
    name: 'Test Sync'
})

testSync.runSync();



// test sync worker
var testAsync = TypeHelper({
    tsConfig: './tsconfig.json',
    name: 'Test async'
})

testAsync.runAsync();


```



