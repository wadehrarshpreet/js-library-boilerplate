# js-library-boilerplate

Rollup based javascript library boilerplate featuring Babel 7, ESLint, flow, jest, JSDoc, Rollup, semantic-release and live debugginga.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![coverage statements](./coverage/badge-statements.svg)](https://github.com/pamepeixinho/jest-coverage-badges)
[![coverage lines](./coverage/badge-lines.svg)](https://github.com/pamepeixinho/jest-coverage-badges)
[![coverage functions](./coverage/badge-functions.svg)](https://github.com/pamepeixinho/jest-coverage-badges)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

![js-library-boilerplate logo](https://www.memecreator.org/static/images/memes/5155637.jpg)

- [js-library-boilerplate](#js-library-boilerplate)
  - [Getting Started:](#getting-started)
  - [External dependencies:](#external-dependencies)
  - [Installation:](#installation)
  - [Documentation:](#documentation)
  - [:coffee: The source code:](#coffee-the-source-code)
    - [The project structure:](#the-project-structure)
    - [Npm scripts:](#npm-scripts)

<a name="getting-started"></a>
## Getting Started: ##

This boilerplate including a basic code to start creating a js based library.

Start with cloning the project:

```bash
$ git clone --depth=1 git://github.com/wadehrarshpreet/js-library-boilerplate.git your-project-name
```

- Remove the .git directory (rm -rf your-project-name/.git).
- Edit package.json and change the name of the project to your project name.
- The boilerplate without any changes supporting creating a library for both CommonJS, es6 modules, amd and browser. 


Now, create a new github project and do:
	
```bash
$ git init
$ git remote add origin https://github.com/your-name/your-project-name.git
$ git add -A
$ npm run commit
$ git push origin master
```

This project is using [semantic-release](https://github.com/semantic-release/semantic-release) to automatic handling of the version of your library. To be able to automatic release a new version you must configure Travis-CI to your new project:

- Go to [https://travis-ci.org/](https://travis-ci.org/) and either signup or signin.
- Select your new project and click setting.
- You MUST configure a token or [semantic-release](https://github.com/semantic-release/semantic-release) will not be able to commit changes:
  - Create a new token (see [here](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) how to do it).
  - Permissions needed in the github token:
    - repo:
      - repo:status
      - repo_deployment
      - public_repo
    - admin:org:
      - read:org
    - admin:repo_hook:
      - write:repo_hook
    - user:
      - user:email
  - In your Travis-CI project setting, go to the environment settings section and add a new environment variable with the name 'GH_TOKEN' and the generated token as the data.
- To test everything just push something into github and it should update everything automatic!

Allow doing npm publish automatically by [semantic-release](https://github.com/semantic-release/semantic-release):

- You need a npm token (see [here](https://docs.npmjs.com/getting-started/working_with_tokens#how-to-create-new-tokens)) and add it as the NPM_TOKEN environment variable to Travis-CI like you did with the GH_TOKEN for github.
- Update the release section in package.json and add '@semantic-release/npm' to both 'prepare', 'publish' and 'verifyConditions'.

<a name="dependencies"></a>
## External dependencies: ##

This project is using the following awesome libraries/utilities/services:

- [babel 7](https://babeljs.io/)
- [better-npm-run](https://github.com/benoror/better-npm-run)
- [commitizen](http://commitizen.github.io/cz-cli)
- [JSDoc](https://jsdoc.app/)
- [ESLint](https://eslint.org/)
- [flow](https://flow.org/)
- [jest](https://jestjs.io/)
- [npm-run-all](https://github.com/mysticatea/npm-run-all)
- [rollup](https://rollupjs.org/)
- [semantic-release](https://github.com/semantic-release/semantic-release)

<a name="inst"></a>
## Installation: ##

via [**yarn**](https://yarnpkg.com/):

```bash
$ yarn add your-library
```

via **npm**:

```bash
$ npm install your-library
```

<a name="docs"></a>
## Documentation: ##

To generate the library documentation using jsdocs:

```bash
$ yarn doc
```

or:

```bash
$ npm run doc
```

<a name="code"></a>
## :coffee: The source code: ##

### The project structure: ###

```
- your-library/lib/ - All the sources should be here.
- your-library/lib/types/ - All the flow type declarations.
- your-library/__tests__/ - All the unit tests.
- your-library/build-tool/rollup.config.js - The configuration for [rollup](https://rollupjs.org/).
- your-library/build-tool/build.js - Script to generate build ES, CJS(using babel), UMD, IIFE, AMD(using rollup). 
- .editorconfig - The [coding style settings](https://editorconfig.org/) for this project.
- .prettierrc - Prettier configuration for this project.
```

### Npm scripts: ###

When using with **yarn** then use the following syntax:

```bash
$ yarn name params
```

Or with just **npm**:

```bash
$ npm name params
```

- **start** - Run the code in development mode.
- **build** - Build the production mode.
- **lint** - Lint :cop: using [ESLint](https://eslint.org/).
- **flow** - [Flow](https://flow.org/) checks.
- **test** - Run tests using jest
- **dev** - Build development builds(no minify)
- **dev:watch** - watch dev build (no minify)
- **commit** - using commitzen wizard to make commit
- **release** - Using semantic-release to create new release

<a name="credits"></a>
* [https://wadehrarshpreet.com](https://wadehrarshpreet.com)
* [LinkedIn](https://www.linkedin.com/in/wadehrarshpreet/)
* [Twitter](https://twitter.com/wadehrarshpreet/)

