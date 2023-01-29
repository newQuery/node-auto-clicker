# NodeJs Autoclicker

|  | version |
|--|--|
| Node | v18.13.0 |
| NPM | 8.19.3 |

## Pourquoi ?

Je ne parvenais pas à lancer mon Bouftou Royal


## Installation

- Avoir Node 18+ d'installer sur la machine
- Cloner le repository `git clone git@github.com:newQuery/node-auto-clicker.git [PATH du dossier]`
- Lancer un terminal depuis le dossier
- Lancer la commande `npm run start`

## Configuration

La configuration se trouve dans le fichier `config.json` à la racine du projet


```json
{
  "startKey": "s",
  "stopKey": "t",
  "pauseKey": "p",
  "mouseButton": "right", // options: right, left, center
  "millisecondsBetweenEachClick": 10
}
```
