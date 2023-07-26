# Simple Phone Book

This project is a simple phone book using React, Node, Prisma, and SQLite.

## Running the project

This project uses a client-server archtecture, so you need to install the API and the CLIENT separately.

### Running the API

cd into api directory
> cd api

Create the .env file (from .env.template)

````bash
cp .env.template .env
````

download the dependencies

````bash
yarn
````

create the database

````bash
yarn prisma migrate dev
````

Run the api

````bash
yarn dev
````

### Runnig the client

From root directory, cd into client

````bash
cd ui
````

Install the dependencies

````bash
yarn
````

Run the project

````bash
yarn dev
````
