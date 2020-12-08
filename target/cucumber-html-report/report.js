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
  "duration": 541293400,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.get(String)\" because \"this.driver\" is null\r\n\tat com.e2eTests.automation.stepDefinitions.AuthenticitationStepDefinition.jOuvreLApplicationOrange(AuthenticitationStepDefinition.java:22)\r\n\tat ✽.Given J ouvre l application Orange(authenticitation/Authenticitation.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AuthenticitationStepDefinition.jeSaisieLaLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AuthenticitationStepDefinition.jeSaisieLeMotDePasse()"
});
formatter.result({
  "status": "skipped"
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
});