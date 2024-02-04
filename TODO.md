- [ ] Corriger le reset du inputnumber, les checkbox fonctionnet mais pas le inputnumber
- bien mettre les promotions dans le calcul du prix
- empecher d'accéder aux autres pages si on est pas connecté

  Quand on clique sur "Payer", le centre est remplacé par une page où il est possible de saisir deux uuids : celui de la
  commande et celui d'une transaction bancaire. Quand on clique sur un bouton "Vérifier", on vérifie :
  s'il existe une transaction bancaire avec cet uuid,
  si le montant correspond au montant de la commande,
  si le destinataire est bien le n° de compte de la boutique.
  Si tout est ok, la commande passe en état "finalized".

- régler le login et logout, en gros la navbar + afficher les children en fonction de là où on est dans la navbar ex :
  si je suis dans shop, je veux voir ses enfants dans la navbar
- Uncaught runtime errors:
  ERROR
  Avoided redundant navigation to current location:   quand on clique sur un lien de la navbar alors qu'on est déjà sur
  la page

- Mettre en français les noms
- manipulation directe de la source de données locale, sans passer par le contrôleur et les services. à corriger
- fixer cette navbar de mort
- changer les objectKey en ...mapState(['shopUser'])
- corriger ce putain de accountamount qui s'affiche pas