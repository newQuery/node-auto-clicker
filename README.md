# NodeJs Autoclicker

|  | version |
|--|--|
| Node | v18.13.0 |
| NPM | 8.19.3 |

## Pourquoi ?

Je ne parvenais pas à lancer mon Bouftou Royal


## Installation

- Install [Node 18+](https://nodejs.org/en/)
- Clone the repository `git clone git@github.com:newQuery/node-auto-clicker.git [PATH du dossier]`
- Open a terminal 
- Run `npm run start` from the root folder to run the autoclicker

## Configuration

Edit the `./config.json` file

Set `isCtrlActive` to `true` if you want to start with `CTRL+[START KEY]`

```json
{
  "startKey": "s",
  "stopKey": "t",
  "pauseKey": "p",
  "mouseButton": "right",
  "isCtrlActive": false,
  "millisecondsBetweenEachClick": 10
}
```
