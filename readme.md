`yarn install` (requires node v14 or later)  
`yarn test`

--------------------------

Prerequisites
- [node](https://nodejs.org/en/) installed on the local machine

Setup
- fork this repository
- clone fork of this repository to the local machine

To run tests execute:

`yarn install`

`yarn test`

---------------------------

Changes to the initial (interwie-starter) code:
- moved ```pages``` folder to the project level
- removed ```specs``` folder from ```test``` folder so ```test``` folder would contain only test files
- updated path to the `specs` in the ```wdio.config.js``` file to accommodate an update of the ```test``` folder structure
- installed `dot`, `html` and `allure` reporters (see ```package.json``` file)
- configured `allure reporter` in ```wdio.config.js``` file

Project structure:
- current project is structured following the Page Object Model
- each file in ```pages``` folder represents a specific page with its webelements and appropriate methods 
- `util` file in the ```pages``` folder contains methods that can be used across the application
- ```assert_data``` folder contains expected data
- ```payloads``` folder contains simulated user data

Expected output in the terminal after running tests:

![](/images/terminal-output.png)
