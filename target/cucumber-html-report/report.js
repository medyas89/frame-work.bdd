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
  "duration": 9188001600,
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
  "duration": 3006144600,
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
  "duration": 81444500,
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
  "duration": 59623700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeCliqueSurLogin()"
});
formatter.result({
  "duration": 2929413400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.redirectionVersLAccueil()"
});
formatter.result({
  "duration": 31812900,
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
  "duration": 2925681400,
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
  "duration": 32928700,
  "status": "passed"
});
formatter.after({
  "duration": 1360742200,
  "status": "passed"
});
formatter.before({
  "duration": 8427721500,
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
  "duration": 2819091500,
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
  "duration": 75272800,
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
  "duration": 59931400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeCliqueSurLogin()"
});
formatter.result({
  "duration": 3347365900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.redirectionVersLAccueil()"
});
formatter.result({
  "duration": 27594500,
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
  "duration": 1835752100,
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
  "duration": 31707700,
  "status": "passed"
});
formatter.after({
  "duration": 1981857600,
  "status": "passed"
});
});