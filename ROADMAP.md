## First steps with typescript

```yarn add typescript -D```
```yarn tsc --init```

## Optional step
Install ts-node-dev which is a kind of sum of typescript compliler (tsc) and nodemon.

```yarn add -D ts-node-dev```

After run the above command, add this script to your package.json file: `"dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify ./index.ts"`

To run typescript with paths, you need to install `tsconfig-paths`.
```yarn add -D tsconfig-paths```

and update your dev command:
`"dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only --ignore-watch node_modules --no-notify ./index.ts"`

## Configuring Eslint
```yarn add -D esling```
```yarn eslint --init```

After ru these commands, install the dependencies seggested by eslint.

## Configuring jest
```yarn add -D jest ts-jest @types/jest```
```yarn jest --init```
```yarn add -D ```

in `env` property, add `"jest": true` in your .eslintrc file.

## Configuring babel
```yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver```
