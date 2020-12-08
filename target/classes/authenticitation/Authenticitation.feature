@authenticitation
Feature: Authenticitation - OrangeHRM
  En tant que utilisateur je souhaite m authentifier

  @authenticitation
  Scenario: Authenticitation-OrangeHRM
    Given J ouvre l application Orange
    When Je saisie la login
    And Je saisie le mot de passe
    And Je clique sur le bouton
    Then Je verifie le compte admin
    
    
