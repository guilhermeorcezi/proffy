<h3 align="center">
    <img alt="Proffy" width="280" title="#logo" src="./github_assets/logo.png">
    <br>
</h3>
<p align="center"> 🚀 <strong>Proffy</strong> Project developed during the 2nd edition of Rocketseat's NLW.
 </p>

<p align="center">
   <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/guilhermeorcezi/Proffy#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/guilhermeorcezi/Proffy/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/guilhermeorcezi/Proffy/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

# :pushpin: Table of Contents

- [About](#sobre)
- [Technologies](#tecnologias-utilizadas)
- [How to run](#como-usar)
- [How to Contribute](#como-contribuir)

<a id="sobre"></a>

## :bookmark: About

The <strong>Proffy</strong> is a project made to connect teachers to students.

## :rocket: Technologies

The project was developed using the following technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Knex](http://knexjs.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

### Web Screenshot
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
       <img src="./github_assets/web1.png" width="400px">
       <img src="./github_assets/web2.png" width="400px">
</div>

### Mobile Screenshot
<div style="display: flex; flex-direction: 'row';">
   <img src="./github_assets/mobile1.png" width="180">
   <img src="./github_assets/mobile2.png" width="180">
   <img src="./github_assets/mobile3.png" width="180">
   <img src="./github_assets/mobile4.png" width="180">
</div>

## :fire: How to run

### :exclamation: Back-End (API server)
Clone the project on your computer. To install the dependencies and run the **Server** (development mode) execute:
```bash
cd server
yarn install // npm install
yarn dev // npm dev
```

### :exclamation: Front-End (Web Application)
To start ** Frontend ** of React use the commands:
```bash
cd web
yarn install // npm install
yarn start // npm start
```
After the process is over, the `localhost: 3000` page containing the developed project will automatically open in your browser.

### :exclamation: Mobile

To look the mobile application with React Native, first you need to put the server's IP (or computer's IP) in the `src/services/api.js file` and then execute the commands:
``` bash
# It is NOT necessary to execute a bottom line if you already have Expo (CLI) installed
global yarn add install expo-cli // npm install -g expo-cli
cd mobile
yarn install // npm installation
yarn start // npm start
```

### :recycle: How to contribute
- First, leave a ⭐ if you like it!
- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'feat: My new feature'`
- Push your branch: `git push origin my-feature`

## :memo: License

This project is under the MIT license. See the [licence page](https://opensource.org/licenses/MIT) for more details.

---

<h4 align="center">
    Made with 💜 by <a href="https://www.linkedin.com/in/guilherme-orcezi" target="_blank">Guilherme Orcezi</a>
</h4>
