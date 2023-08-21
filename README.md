# Ng Lib Using Dynamic Import of Lib using Lodash not Tree Shaking Correctly


## To Investigate

1. Uncomment import in `projects/liba/src/lib/liba.module.ts`.

2. Build the libs `ng build libb`, `ng build liba`

3. Build the app `ng build`.

Note the size of `main.js`.

4. Comment import in `projects/liba/src/lib/liba.module.ts`

5. Rebuild `ng build liba`

6. Rebuild `ng build`

Compare the size of `main.js` - it should be 30kb less.
