### Create package.json

yarn init -y

### Install dependencies

yarn add -D nodemon
npm i express cors morgan helmet sqlite3 dotenv knex bcryptjs

JWT

- npm i jsonwebtoken

Sessions and Cookies
-npm i express-session

.env file
//could do a secrets file that exports and object then call secrets.PORT, etc...
PORT = 5000
JWT_SECRET = "super secret key string"

### PACKAGE.JSON

"server": "nodemon",
"start": "node index.js",

### .env

PORT = 5000;
JWT_SECRET = "supersecret";
