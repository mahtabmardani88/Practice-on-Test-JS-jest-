# This is practice on test js code 
---
> in the test we have 3 test library
<ol>
  <li>jasmine</li>
  <li>mocha</li>
  <li>jest</li>
</ol>

### jest
jest is new and popular library in test js

> we have js file  and we have test file inside test file we have jsFileName.test.js or jsFileName.spec.js
 inside js file we write code and should export and in the test file should require and write code with describe and inside describe we have test or it and inside it or test we should write expect  and with npm test doing test 
 
 ---

 > for start should write 

 ```test.js
 
 npm init --yes

 npm i jest --save-dev

if can not read key word  :

 npm install @types/jest 
```

---
we have some popular method in test
<ol>
  <li>.ToBe( the means have we in the method this order )</li>
  <li>.ToContain( the means have we in the method this order for string )</li>
  <li>.ToEqual( the means have we in the method obj this order if for obj we use toBe we get the error and better we use equal )</li>
   <li>...</li>
</ol>

> test(" ",()=>{}) or it("",()=>{}) 

> inside we use 

> {const result or expect().toBe();}

```javascript
describe(
    test()   or   
    it()
)