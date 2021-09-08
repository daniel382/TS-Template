# TS Template
This project is intended to serve as a template for typescript projects. It doesn't suggests any architecture so the choice is entirely yours.

This project is not a definitive guide, instead, it is a base or a recommendation to help you to get started with your project without wasting time. So, my recommendation is that you read it and use it as needed, removing typescript or any other configurantion you want.

## Configuring typescript
Fist of all, you need to install and configure the typescript lang (yes, I'm calling it lang because deno can run it without transpile process).

```yarn add typescript -D```
```yarn tsc --init```

## Optional step
Install ts-node-dev which is a kind of sum of typescript compliler (tsc) and nodemon.

```yarn add -D ts-node-dev```

After run the above command, add this script to your package.json file: `"dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify ./index.ts"`

If you are running typescript with path aliases, you will need to install `tsconfig-paths`.
```yarn add -D tsconfig-paths```

and update your dev command:
`"dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only --ignore-watch node_modules --no-notify ./index.ts"`

NOTE: This step is optional because the TDD process works with tests all of the time, so you'll only run your app towards the end of the development process, and this may not be true if you use integration tests.

## Configuring Eslint
The intention here is to maintain a consistent coding style throughout the project.

```yarn add -D esling```
```yarn eslint --init```

After run these commands, install the dependencies seggested by eslint.

## Configuring jest
Jest will be our test runner.

```yarn add -D jest ts-jest @types/jest```
```yarn jest --init```

Add `"jest": true` in `env` property of your .eslintrc file.

## Configuring babel
Babel will help us with the build process of the production code, in addition, it will convert our path aliases to a format that javascript can understand

```yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver```

## Configuring lint staged
Lint staged is a library that run commands only on staged files. It is very useful to help us keep our versioned code standardized and tested.

```yarn add -D lint-staged eslint-plugin-standard eslint-config-standard-with-typescript```

Create the `.lintstagedrc.json` file and put your staged code there.

NOTE: Here we are using the standard code style, feel free to use any other of your choice.

## Configurin husky
Husky is a library that allow us to perform certain actions at certain times. Here we will use it to run our lint-staged commands before any commits and also to run coverage tests before any git push. So, all you have to do is install and configure it.

```yarn add -D husky```
```yarn husky install```
```yarn husky add .husky/pre-commit 'yarn lint-staged'```
```yarn husky add .husky/pre-push 'yarn test:ci'```

## Using this project
If you want to use this project as a start point wihtout any change, all you have to do is clone it and change some things, like its metadata in package.json and its origin.

To change the origin, go to the folder where you cloned it and hit on your teminal:

```git remote set-url origin git://new.url.here```

If you don't have a remote repo, do this:

```git remote remove origin```

## Contributing
As an open source project, TS Template welcomes contributions of all forms.
