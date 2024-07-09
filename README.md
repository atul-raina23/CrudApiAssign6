Start the server:

bash

    node index.js

The server should now be running on http://localhost:3000.
Step 4: Test the API

You can use tools like Postman or curl to test the API endpoints.

    Get all users:

    bash

GET http://localhost:3000/api/users

Get a user by ID:

bash

GET http://localhost:3000/api/users/1

Create a new user:

bash

POST http://localhost:3000/api/users
Content-Type: application/json
{
    "name": "New User",
    "email": "newuser@example.com"
}

Update a user:

bash

PUT http://localhost:3000/api/users/1
Content-Type: application/json
{
    "name": "Updated User",
    "email": "updateduser@example.com"
}

Delete a user:

bash

    DELETE http://localhost:3000/api/users/1

This is a simple example of a RESTful API using Node.js and Express. In a real-world application, you'd likely use a database to persist data instead of an in-memory array, and add validation, error handling, and other features.
