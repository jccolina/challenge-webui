# challenge-webui
### Technologies
* Cypress
* Typescript

### How to run
* Install dependencies:  
```
npm install
```
* Run cypress test on headed mode
```
npm run cy:headed
```
* Run cypress tests on headless mode  
```
npm run cy:run
```

Notes:
1. Notice that the first page is not always the expected https://www.football-data.org/ therefore sometimes the test is failing
2. Since the expected url is not exactly https://www.football-data.org/ but https://www.football-data.org/index.php therefore since this is a challenge the test was changed to make the test passing. 
3. Additional cypress command was added before clicking the link on results to avoid cross origin error on cypress