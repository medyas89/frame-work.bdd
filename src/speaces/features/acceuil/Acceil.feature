@accueil
Feature: Accueil-OrangeHRM
  En tant que utilisateur orange je souhaite acceder au module Recruitment

  Background: 
    Given Je me connecte sur l application OrangeHRM
    When Je saisie le login "Admin"
    And Je saisie le mot de passe "admin123"
    And Je clique sur login
    Then Redirection vers l accueil

  @recruitment
  Scenario: Acceder au module Recruitment
    When je clique sur le module Recruitment
    Then je verifie la page Recruitment "Candidates"

  @pim
  Scenario: Acceder au module PIM
    When je clique sur le module PIM
    Then je verifie la page PIM "Configuration"
