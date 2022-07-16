# OSM League Status

Easily find which teams are available on a specific league.

## Install dependencies

This project uses Puppeteer to automate browser interaction, and dotenv to load environment variables with user credentials.

Install dependencies used on this project:

```
npm install
```

## How to use

There are 2 steps to make this project work in your local setup.

### User credentials

Add your Online Soccer Manager username and password to a `.env` file.

Example:

```
OSM_USERNAME="username"
OSM_PASSWORD="password"
```

These environment variables will be loaded into the `process.env` global variable by the `dotenv` package.

The credentials are needed for the script to log in to your account.

### Choose the league

Edit the `index.js` file, changing the value of the `league` variable at the top of the file.

Replace it with whatever country you want to get the status of the league from.

This project only supports **1° division competitions**. This means that if you set this variable to a different value (e.g, `France`), the script will return the state of the teams from the 1° division of that country.

Example:

```js
const league = "Spain" 
```

Response from the console:

```js
[
  { team: 'Espanyol', isAvailable: true },
  { team: 'Osasuna', isAvailable: true },
  { team: 'Getafe', isAvailable: true },
  { team: 'Almería', isAvailable: true },
  { team: 'Celta de Vigo', isAvailable: true },
  { team: 'Cádiz', isAvailable: true },
  { team: 'Elche', isAvailable: true },
  { team: 'Mallorca', isAvailable: true },
  { team: 'Rayo Vallecano', isAvailable: true },
  { team: 'Valladolid', isAvailable: true },
  { team: 'Girona', isAvailable: true },
  { team: 'Atlético Madrid', isAvailable: false },
  { team: 'Real Madrid', isAvailable: false },
  { team: 'Barcelona', isAvailable: false },
  { team: 'Real Betis', isAvailable: false },
  { team: 'Sevilla', isAvailable: false },
  { team: 'Villarreal', isAvailable: false },
  { team: 'Athletic Bilbao', isAvailable: false },
  { team: 'Real Sociedad', isAvailable: false },
  { team: 'Valencia', isAvailable: false }
]
```

Now you know which teams are taken and which others aren't.

Some interesting features that could be built on top of this project are:

- Make an event about a certain team that you like, but is difficult to get, so as soon as the team is availabe, select it to manage it in the game.
- Set a schedule to run the script at different times. This way you could increase your chances of getting your favorite team.