@connexion
Feature: Authentification - OrangeHRM
En tant que utilisateur je souhaite m'authentifier

@cnx-passant
Scenario: Authentification - OrangeHRM
Given Je me connecte sur l application OrangeHRM
When Je saisie le login "Admin"
And Je saisie le mot de passe "admin123"
And Je clique sur login
Then Redirection vers l accueil

@cnx-non-passant
Scenario Outline: Authentification - OrangeHRM
Given Je me connecte sur l application OrangeHRM
When Je saisie le login "<login>"
And Je saisie le mot de passe "<password>"
And Je clique sur login
Then Je verifie les messages d'erreur de la page connexion "<messages>"

Examples:
| login | password | messages |
| | | Username cannot be empty |
| test | test123 | Invalid credentials |
| Admin | test123 | Invalid credentials |
| test | admin123 | Invalid credentials |

@forgot-password
Scenario: Verification mot de passe oublié
Given Je me connecte sur l application OrangeHRM
When Je clique sur le lien "Forgot your password?" //linkText
And Je verifie la page Forgot Your Password
And Je saisie username
And Je clique sur le bouton Reset Password

@widgets
Scenario: Verification des widgets
Given Je me connecte sur l application OrangeHRM
When Je clique sur le widget Linkedin
Then Redirection vers la page linkedin
When Je clique sur le widget Facebook
Then Redirection vers la page facebook
When Je clique sur le widget twitter
Then Redirection vers la page twitter
When Je clique sur le widget youtube
Then Redirection vers la page youtube