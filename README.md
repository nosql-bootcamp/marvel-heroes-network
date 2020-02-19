# Marvel Heroes Network

L'objectif de cet exercice est d'analyser les liens entre Heroes et Comics Marvel grâce à la base graphe Neo4J.

## TODO

* Créer le graphe des Heroes dans Neo4J, à partir des données disponibles dans le dossier `data`. Les noeuds du graphe sont soit des Heroes, soit des Comics.
* Répondez à la question suivante : existe-t-il un Hero qui connait deux Heros différents qui eux-mêmes ne se connaissent pas ? (un Hero connait un autre Hero s'il apparaissent dans un même Comic)

## Liens utiles

* Import Tool Neo4J : https://neo4j.com/docs/operations-manual/current/tutorial/import-tool/

## Premiers éléments de solution

Il est d'abord nécessaire de préparer correctement les fichiers CSV afin de pouvoir les importer avec l'`import-tool`.

Pour cela, 3 scripts de préparation des CSV peuvent être utilisés : 
```
yarn install
mkdir dist
node prepare-heroes.js > dist/heroes.csv
node prepare-comics.js > dist/comics.csv
node prepare-comics-heroes.js > dist/comics-heroes.csv
```

L'import peut donc se faire correctement avec les fichiers "préparés" : 
```
neo4j-admin import --nodes=./dist/heroes.csv --nodes=./dist/comics.csv --relationships=./dist/comics-heroes.csv
```

Le résultat de l'import devrait être le suivant : 
```
IMPORT DONE in 3s 946ms.
Imported:
  40045 nodes
  75257 relationships
  80090 properties
```