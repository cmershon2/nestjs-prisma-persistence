# NestJS Persistence Module with Prisma
This repository contains the source code for a NestJS project demonstrating how to build a persistence module using Prisma.

## Introduction
In this project, I set up Prisma to manage database interactions within a NestJS application. I create a dedicated persistence module to encapsulate database logic. This makes sure that the codebase remains modular and maintainable.

I also created an example user module to demonstrate how the persistence module can be implemented. Please note that the user module is simply for demonstration and should not be used in production enviroments as no authentication has been implemented.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm
- NestJS CLI
- Postgres
- Prisma CLI

## Getting Started
Follow these steps to get the project up and running:

1. Clone the Repository
```sh
git clone https://github.com/cmershon2/nestjs-prisma-persistence.git
cd nestjs-prisma-persistence
```
2. Install Dependencies
```sh
npm install
```
3. Configure the Database by creating a .env file with your database connection information:
``` env
DATABASE_URL="postgresql://your-connection-string"
```
4. Run the Migration
``` sh
npx prisma migrate dev --name init
```
5. Start the Application
``` sh
npm run start:dev
```

## License
This project is licensed under the MIT License.

Happy coding! 🌟