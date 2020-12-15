$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("acceuil/Accueil.feature");
formatter.feature({
  "line": 2,
  "name": "Accueil-OrangeHRM",
  "description": "En tant que utilisateur orange je souhaite acceder au module Recruitment",
  "id": "accueil-orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@accueil"
    }
  ]
});
formatter.before({
  "duration": 9801377100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le login \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Redirection vers l accueil",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 5137190200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "AuthentificationOutlineStepDefinition.jeSaisieLeLogin(String)"
});
formatter.result({
  "duration": 67769700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationOutlineStepDefinition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 58200300,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeCliqueSurLogin()"
});
formatter.result({
  "duration": 5942577400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.redirectionVersLAccueil()"
});
formatter.result({
  "duration": 26797101,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Acceder au module Recruitment",
  "description": "",
  "id": "accueil-orangehrm;acceder-au-module-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@recruitment"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "je clique sur le module Recruitment",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "je verifie la page Recruitment \"Candidates\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccueilStepDefinition.jeCliqueSurLeModuleRecruitment()"
});
formatter.result({
  "duration": 42885600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidates",
      "offset": 32
    }
  ],
  "location": "AccueilStepDefinition.jeVerifieLaPageRecruitment(String)"
});
formatter.result({
  "duration": 24817500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.e2eTests.automation.stepDefinitions.AccueilStepDefinition.jeVerifieLaPageRecruitment(AccueilStepDefinition.java:31)\r\n\tat ✽.Then je verifie la page Recruitment \"Candidates\"(acceuil/Accueil.feature:15)\r\n",
  "status": "failed"
});
formatter.write("Current page URL is : https://opensource-demo.orangehrmlive.com/index.php/dashboard");
formatter.after({
  "duration": 61833848499,
  "status": "passed"
});
formatter.before({
  "duration": 8281849000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte sur l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le login \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Redirection vers l accueil",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2750318599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "AuthentificationOutlineStepDefinition.jeSaisieLeLogin(String)"
});
formatter.result({
  "duration": 66800799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationOutlineStepDefinition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 52413900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeCliqueSurLogin()"
});
formatter.result({
  "duration": 4193615400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.redirectionVersLAccueil()"
});
formatter.result({
  "duration": 24524700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Acceder au module PIM",
  "description": "",
  "id": "accueil-orangehrm;acceder-au-module-pim",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@pim"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "je clique sur le module PIM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "je verifie la page PIM \"Configuration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccueilStepDefinition.jeCliqueSurLeModulePIM()"
});
formatter.result({
  "duration": 1552436700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Configuration",
      "offset": 24
    }
  ],
  "location": "AccueilStepDefinition.jeVerifieLaPagePIM(String)"
});
formatter.result({
  "duration": 1027698799,
  "status": "passed"
});
formatter.after({
  "duration": 1403508100,
  "status": "passed"
});
});