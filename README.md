## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Generate DB

```bash
#Generate our migrations
npm run typeorm migration:generate migrations/initial-schema

#Run our migration
npm run typeorm migration:run
```

## API Reference

#### POST Create new user

```bash
  http://localhost:3000/auth/signup


  # body
  {
    "email": "email_1@company.com",
    "password": "uno"
  }
```

#### POST Signin user

```bash
  http://localhost:3000/auth/signin

  # body
  {
    "email": "email_1@company.com",
    "password": "uno"
  }
```

#### GET Verify signed user

```bash
  http://localhost:3000/auth/whoami
```

#### GET All users

```bash
  http://localhost:3000/auth
```

#### GET Specific user

```bash
  http://localhost:3000/auth/1
```

#### PATCH Update specific user

```bash
  http://localhost:3000/auth/1
```

#### DELETE Specific user

```bash
  http://localhost:3000/auth/1
```

#### GET New report

```bash
  http://localhost:3000/reports?make=ford&model=mustang&lng=0&lat=0&mileage=20000&year=1981
```

#### PATCH Approve report

```bash
    http://localhost:3000/reports/1

  # body
  {
      "approved":true
  }
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
