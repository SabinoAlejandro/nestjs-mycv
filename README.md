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

## API Reference

#### POST Create new user

```http
  http://localhost:3000/auth/signup
```

body
```bash
  {
    "email": "email_1@company.com",
    "password": "uno"
  }
```

#### POST Signin user

```http
  http://localhost:3000/auth/signin
```

body
```bash
  {
    "email": "email_1@company.com",
    "password": "uno"
  }
```

#### Verify signed user

```http
  http://localhost:3000/auth/whoami
```


#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
