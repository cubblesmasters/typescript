# @cubbles/typescript-boilerplate

This package contains a boilerplate to implement Cubbles components using [typescript](https://www.typescriptlang.org/). This package is build under the [webpack](https://webpack.js.org/) approach and uses [ts-loader](https://webpack.js.org/guides/typescript/) to compile the typescript code.

## Setup YOUR package on top of this template

### Step 1: GIT - Clone

```bash
git clone https://github.com/cubblesmasters/typescript.git <your-package-name>
```

### Step 2: GIT - Change the origin

```bash
git remote rm origin
git remote add origin git@github.com:<your-git>/<your-package-name>.git
git config master.remote origin
git config master.merge refs/heads/master
```

### Step 3: NPM - Init the package for your purposes

```bash
npm init
...
```

## The boilerplate base sample

If you check the `src` folder of this boilerplate, you will find a folder called `elementary` that contains one script:

* **element.ts**: contains the logic of a Cubbles elementary coded using typescript.

A demo of this component is available [online](https://cubbles.world/sandbox/cubbles-typescript-boilerplate@1.0.0-SNAPSHOT/cubbles-typescript-boilerplate-elementary/SHOWROOM.html).

## Development scripts

This boilerplate includes a set of scripts to build, locally deploy, validate and upload your webpackages using npm as follows:

```bash
npm run [script-name]
```

Also, you can install [ntl](https://www.npmjs.com/package/ntl) globally and then run it to access the scripts as shown below:

```bash
$ ntl
✔  Npm Task List - v3.0.0
? Select a task to run: (Use arrow keys)
❯ build
  build:watch
  build:prod
  clean
  upload
  upload:prod
  validate-manifest
(Move up and down to reveal more choices)
```

> For more information about available scripts check [this](https://cubbles.gitbook.io/docs/v/coder-template-doc/developing-vanilla-boilerplate/available-scripts).