Reproduces an issue with react-scripts@5 and react-json-to-table 


Instructions: 

```
yarn
yarn start

```

In the terminal you will get this warning/error


```
WARNING in ./node_modules/react-json-to-table/build/lib/components/JsonToTable/index.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/djohnston/git/repros/json-to-table-issue/node_modules/react-json-to-table/src/components/JsonToTable/index.ts' file: Error: ENOENT: no such file or directory, open '/home/djohnston/git/repros/json-to-table-issue/node_modules/react-json-to-table/src/components/JsonToTable/index.ts'
 @ ./node_modules/react-json-to-table/build/lib/components/index.js 10:20-44
 @ ./src/App.tsx 7:0-50 35:37-48
 @ ./src/index.tsx 7:0-24 11:33-36

WARNING in ./node_modules/react-json-to-table/build/lib/components/index.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/djohnston/git/repros/json-to-table-issue/node_modules/react-json-to-table/src/components/index.tsx' file: Error: ENOENT: no such file or directory, open '/home/djohnston/git/repros/json-to-table-issue/node_modules/react-json-to-table/src/components/index.tsx'
 @ ./src/App.tsx 7:0-50 35:37-48
 @ ./src/index.tsx 7:0-24 11:33-36

```


The applicaiton seems to work fine though, and it builds fine. 




