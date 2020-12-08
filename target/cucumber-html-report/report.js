$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authenticitation/Authenticitation.feature");
formatter.feature({
  "line": 2,
  "name": "Authenticitation - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m authentifier",
  "id": "authenticitation---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@authenticitation"
    }
  ]
});
formatter.before({
  "duration": 8877312900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authenticitation-OrangeHRM",
  "description": "",
  "id": "authenticitation---orangehrm;authenticitation-orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@authenticitation"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "J ouvre l application Orange",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisie la login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisie le mot de passe",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur le bouton",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Je verifie le compte admin",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticitationStepDefinition.jOuvreLApplicationOrange()"
});
formatter.result({
  "duration": 3389943400,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticitationStepDefinition.jeSaisieLaLogin()"
});
formatter.result({
  "duration": 84212700,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticitationStepDefinition.jeSaisieLeMotDePasse()"
});
formatter.result({
  "duration": 15114900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"txtPassword5\"}\n  (Session info: chrome\u003d87.0.4280.88)\n  (Driver info: chromedriver\u003d86.0.4240.22 (398b0743353ff36fb1b82468f63a3a93b4e2e89e-refs/branch-heads/4240@{#378}),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 13 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027DESKTOP-HPDMSOR\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61398}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d86.0.4240.22 (398b0743353ff36fb1b82468f63a3a93b4e2e89e-refs/branch-heads/4240@{#378}), userDataDir\u003dC:\\Users\\Medyas\\AppData\\Local\\Temp\\scoped_dir284_1439148389}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d87.0.4280.88, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: a69a05818a460a9cddc7fc24d02e7914\n*** Element info: {Using\u003did, value\u003dtxtPassword5}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.e2eTests.automation.pageObjects.AuthenticitationPage.fillPass(AuthenticitationPage.java:31)\r\n\tat com.e2eTests.automation.stepDefinitions.AuthenticitationStepDefinition.jeSaisieLeMotDePasse(AuthenticitationStepDefinition.java:36)\r\n\tat ✽.And Je saisie le mot de passe(authenticitation/Authenticitation.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AuthenticitationStepDefinition.jeCliqueSurLeBouton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AuthenticitationStepDefinition.jeVerifieLeCompteAdmin()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current page URL is : https://opensource-demo.orangehrmlive.com/");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2590175600,
  "status": "passed"
});
});