### Assignment
Microservice to send emails using email tempaltes. It will require email template name and data to be replaced in email body which i am getting from pug template. 

NOTE: we can save email templates in database table, just need to fetch it from db and then can replace hardcode variables with dynamic values.
Unit Tests are not added.

run `npm i` to install all dependencies.

Node version : 16.14.0

### 📗 Swagger :: API Document

[Swagger](https://swagger.io/) is Simplify API development for users, teams, and enterprises with the Swagger open source and professional toolset.

Easily used by Swagger to design and document APIs at scale.

Start your app in development mode at `http://localhost:3000/api-docs`

Modify `swagger.yaml` file to your source code.


### 🔮 PM2 :: Advanced, Production process manager for Node.js

[PM2](https://pm2.keymetrics.io/) is a daemon process manager that will help you manage and keep your application online 24/7.

- production mode :: `npm run deploy:prod` or `pm2 start ecosystem.config.js --only prod`
- development mode :: `npm run deploy:dev` or `pm2 start ecosystem.config.js --only dev`
- development mode Nodemon :: `npm run dev`
- run test :: `npm run test`

Modify `ecosystem.config.js` file to your source code.

### 🏎 SWC :: a super-fast JavaScript / TypeScript compiler

[SWC](https://swc.rs/) is an extensible Rust-based platform for the next generation of fast developer tools.

`SWC is 20x faster than Babel on a single thread and 70x faster on four cores.`

- tsc build :: `npm run build`
- swc build :: `npm run build:swc`

Modify `.swcrc` file to your source code.

## 🗂 Code Structure (default)

```bash
│
├── /.vscode
│   ├── launch.json
│   └── settings.json
│
├── /src
│   ├── /config
│   │   └── index.ts
│   │
│   ├── /controllers
│   │   └── index.controller.ts
│   │
│   ├── /dtos
│   │   └── email.dto.ts
│   │
│   ├── /exceptions
│   │   └── HttpException.ts
│   │
│   ├── /emails
│   │   ├── welcome
│   │   │    ├──html.pug
│   │   │    └──subject.pug
│   │   └── notification
│   │
│   ├── /interfaces
│   │   ├── routes.interface.ts
│   │   └── email.interface.ts
│   │
│   ├── /middlewares
│   │   ├── error.middleware.ts
│   │   └── validation.middleware.ts
│   │
│   ├── /models
│   │   └── 
│   │
│   ├── /routes
│   │   └── index.route.ts
│   │
│   ├── /services
│   │   └── email.service.ts
│   │
│   ├── /tests
│   │   ├── index.test.ts
│   │  
│   │
│   ├── /utils
│   │   ├── logger.ts
│   │   ├── util.ts
│   │   └── vaildateEnv.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .editorconfig
├── .env.development.local
├── .env.production.local
├── .env.test.local
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .huskyrc
├── .lintstagedrc.json
├── .prettierrc
├── .swcrc
├── ecosystem.config.js
├── jest.config.js
├── nodemon.json
├── package-lock.json
├── package.json
├── swagger.yaml
└── tsconfig.json