# Login Functionality

This is a README file for the Login functionality implementation.

## Overview

The login functionality performs the following operations:

- **Email Check**: Checks if the email exists in the database.
- **Password Comparison**: If the email is found, compares the provided password with the stored password.
- **Unauthorized Responses**:
  - If the email is not found, returns a `401 Unauthorized` response.
  - If the email is found, but the password does not match, returns a `401 Unauthorized` response.
- **Successful Login**: If the email and password match:
  - Creates a JWT token for authentication.

## API Endpoint

### POST `/auth/login`

#### Request Body

```json
{
  "email": "aftab@octek.co",
  "password": "password"
}
```

#### Response Body

```json
"data": {
    "user": "user object",
    "token": "JWT Token"
}
```

 ### Dependencies
- @sendgrid/mail
- bcrypt
- cors
- dotenv
- express
- fs
- jsonwebtoken
- module-alias
- mysql2
- nodemon
- path
- project
- redis
- sequelize
- server
- sequelize-cli
