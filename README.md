# playwrightandgauge

An example project illustrating testing E2E with "ATDD/BDD" Gauge +PLaywright, top scalable E2E Test frameworks 2022.


## About

The project uses nodejs, gauge (test runner), gauge-js (plugin) and playwright (Lib), VS Code. All dependencies are managed using `npm`.
The test is executed with headless chrome as default.

### Prerequisites

- Install npm and init : `npm init -y`
- Setup gauge:
  - Install gauge: `npm install -g @getgauge/cli`
  - Install gauge-js plugin: `gauge install js`
- Install playwright : `npm i -D playwright`  
- Install VS Code extension: https://docs.gauge.org/getting_started/installing-gauge.html?os=linux&language=javascript&ide=vscode
- Open the project and click on `Run Spec`  to execute the specification or `Run Scenario` for seperate scenario.
![image](https://user-images.githubusercontent.com/13244276/159581529-98934f87-b205-472c-a1f8-c9e5f7c05c6a.png)
- The reports and screenshots will be automatically generated and exported to  folders `./reports"` and `./screenshots` 
