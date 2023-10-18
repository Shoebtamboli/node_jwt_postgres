# Node.js JWT Authentication with PostgreSQL

This project demonstrates a simple authentication system using Node.js, Express, PostgreSQL, and JWT. It contains routes for user registration and login, and it utilizes Docker for easy setup and deployment.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [cURL](https://curl.se/) or [Postman](https://www.postman.com/downloads/) for API testing

## Setting Up and Running the Project

1. **Clone the Repository**:

   ```bash
   git clone [YOUR_REPOSITORY_LINK]
   cd node_jwt_postgres
   ```

2. **Start the Docker Containers:**

   ```bash
   docker-compose up
   ```

   This command will build and start the Node.js app and PostgreSQL database containers. The Node.js app will be accessible at http://localhost:3000.

3. **Stop the Docker Containers:**

   When you're done, you can press Ctrl + C in the terminal and then run:

   ```bash
   docker-compose down
   ```

## Testing the APIs

### User Registration

**Endpoint**: `POST http://localhost:3000/register`

**Payload**:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

**cURL Command**:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username": "testuser", "password": "testpassword"}' http://localhost:3000/register
```

### User Login

**Endpoint**: `POST http://localhost:3000/login`

**Payload**:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

**cURL Command**:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username": "testuser", "password": "testpassword"}' http://localhost:3000/login
```

On successful login, you will receive a JWT token in the response. This token can be used to access protected routes by including it in the Authorization header:

## Accessing Protected Routes

To access a protected route, include the JWT token obtained from the login process in the Authorization header of your request.

```
Authorization: Bearer YOUR_JWT_TOKEN
```

### Get the Users

**Endpoint**: `GET http://localhost:3000/users`

**cURL Command**:

```bash
curl -X GET -H "Authorization: Bearer YOUR_JWT_TOKEN" http://localhost:3000/users
```

## Testing the Database:

If you want to check the data in the PostgreSQL database:

1. **Connect to the PostgreSQL container:**

   ```bash
   docker exec -it node_jwt_postgres_db_1 psql -U myuser -d mydb
   ```

   This command might vary based on the name of your PostgreSQL container (node_jwt_postgres_db_1 is just a common naming convention).

2. **List the tables:**

   ```sql
   \dt
   ```

3. **Query the users table:**

   ```sql
   SELECT * FROM users;
   ```

   You should see the user you just registered.

4. Exit the PostgreSQL prompt:

   ```sql
   \q
   ```

These steps will allow you to test the registration and login functionality as well as inspect the data in your PostgreSQL database.
