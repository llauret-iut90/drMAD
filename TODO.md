Quand on clique sur "Payer", le centre est remplacé par une page où il est possible de saisir deux uuids : celui de la
commande et celui d'une transaction bancaire. Quand on clique sur un bouton "Vérifier", on vérifie :
s'il existe une transaction bancaire avec cet uuid,
si le montant correspond au montant de la commande,
si le destinataire est bien le n° de compte de la boutique.
Si tout est ok, la commande passe en état "finalized".

- manipulation directe de la source de données locale, sans passer par le contrôleur et les services. à corriger
