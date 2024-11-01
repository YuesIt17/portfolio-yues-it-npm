# Project portfolio-yues-it-npm

#### Preparation

- before to run npx lerna commands need to set up access git through the terminal: ssh -T git@github.com

---

#### Initialization

- init project packages: yarn install
- to build packages: npx lerna run build
- to set internal dependencies (for example "@portfolio-yues-it-npm/icons": "file:../icons") to run again: yarn install

---

#### Install a npm package for a specific lerna package

- yarn workspace @portfolio-yues-it-npm/utils add date-fns

---

#### Run build, test or lint

- to run test via: npx lerna run test
- to run commands at the same time: npx lerna run test,build,lint
- to run tests or build for one package (scope):
  - npx lerna run build --scope=@portfolio-yues-it-npm/ui
  - npx lerna run test --scope=@portfolio-yues-it-npm/utils

---

#### Run the build to update packages inside workspaces

- for example, if you need to update @portfolio-yues-it-npm/utils to @portfolio-yues-it-npm/ui, then to run build: npx
  lerna run build --scope=@pportfolio-yues-it-npm/utils
- after that to run install: yarn install

---

#### To install portfolio-yues-it-npm packages into your project

Write in the .yarnrc.yml file:

- add registry setting: npmRegistryServer: "https://some-art.com/artifactory/api/npm/portfolio-yues-it-npm/"
- set a timeout if necessary: httpTimeout: 600000
- run the installation of the required package:
  - yarn add @portfolio-yues-it-npm/ui
  - yarn add @portfolio-yues-it-npm/utils
  - yarn add @portfolio-yues-it-npm/icons
- to check how the package works in your project, you can enter the package name to package.json:
  "@portfolio-yues-it-npm/ui": "file:../portfolio-yues-it-npm/packages/ui" and then yarn install

---