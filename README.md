<h1 align="center">
  :books: CollegeHub
</h1>

<h4 align="center">
  💈Node.js back-end for CollegeHub, a collaborative study application
</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mattheuseinloft/collegehub-api?color=%232a9df4">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mattheuseinloft/collegehub-api?color=%232a9df4">

  <img alt="License" src="https://img.shields.io/github/license/mattheuseinloft/collegehub-api?color=%232a9df4">
</p>

<p align="center">
  <a href="#gear-tools">Tools</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-how-to-run">How To Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :gear: Tools

- [VSCode](https://code.visualstudio.com/): Code editor
- [Insomnia](https://insomnia.rest/): REST client
- [Docker](https://www.docker.com/): Container virtualization
- [DBeaver](https://dbeaver.io/): PostgreSQL client

## :rocket: Technologies

This project is being developed with the following technologies:

- [TypeScript](https://www.typescriptlang.org/): Programming language
- [Node.js](https://nodejs.org/): Server-side JavaScript runtime environment
- [Express](https://expressjs.com/): Web framework for Node.js
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) & [EditorConfig](https://editorconfig.org/): Code standardization and formatting
- [date-fns](https://date-fns.org/): Date manipulation
- [uuidv4](https://www.npmjs.com/package/uuidv4): Generation of Universally unique identifiers
- [PostgreSQL](https://www.postgresql.org/): Relational database management system

## :computer: How To Run

### Requirements
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- Environment variables in .env file
- Create a connection with Postgres and create a database "gostack_gobarber"
- Run migrations (yarn typeorm migration:run)
- Run a container using [PostgreSQL Image](https://hub.docker.com/_/postgres)

### Running the application
From your command line:
```bash
# Clone this repository
$ git clone https://github.com/mattheuseinloft/collegehub-api

# Move to the application directory
$ cd collegehub-api

# Install dependencies
$ yarn

# Start the backend server
$ yarn dev:server
```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/mattheuseinloft/collegehub-api/blob/master/LICENSE) for more information.

---

Made with 💙 and ☕ by Mattheus Einloft
