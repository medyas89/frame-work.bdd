@adduser
Feature: AjoutUtilisateur - OrangeHRM
En tant que utilisateur je souhaite d'ajouter u

@adduser
Scenario Outline: AjoutUtilisateur - OrangeHRM
Given I want to write a step with <name>
When I check for the <value> in step
Then I verify the <status> in step

Examples: 
| name  | value | status  |
| name1 |     5 | success |
| name2 |     7 | Fail    |
