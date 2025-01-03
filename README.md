# Authentciation and Authorization API

## Tech Stack

<p>
    <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
    <img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
    <img alt="prisma" src="https://img.shields.io/badge/prisma-black?style=flat-square&logo=prisma&logoColor=white" />
    <img alt="prisma" src="https://img.shields.io/badge/prisma-purple?style=flat-square&logo=postgresql&logoColor=white" />
</p>

## Local Setup

1. Cloning repo


```
git clone https://github.com/rajatnai84/node-js-auth.git
cd node-js-auth
```

2. Set .env
   
3. Install dependancies
   
> works with node v22.12.0 and npm 11.0.0

```bash
npm i
```

4. Run project

```bash
npm run start
```

#### If Postgres connection not work

   
1. Craete the database locally

```sql
CREATE DATABASE <give-db-name>;
```

2. Change .env

```bash
DATABASE_URL=<new>
```

3. Migrate 

```bash
npx prisma migrate dev --name init
```

4. Run project

```bash
npm run start
```

## Testing

> Mannual Testing with the Postman

1. Register

post: `localhost:8080/auth/register`

```json
{
    "email": <valid-email>,
    "name": <name>,
    "username": <username>,
    "password": <password>
}
```

2. Login

post: `localhost:8080/auth/login`
   
```json
{
    "username": <username or email>,
    "password": <password>
}
```

3. Authotization Working

> Set the token in the authorization header as Bearer token which you would get after login.

get: `localhost:8080/users/getAll`

output: Have all users data.
   



