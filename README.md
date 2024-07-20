# JWT Authentication Example

This project is a simple Node.js application that demonstrates JWT-based authentication using Express.js. It includes routes for user login and a protected route that requires a valid JWT for access.

## Features

- User login with JWT generation.
- Protected route that requires JWT authentication.
- Password hashing with bcryptjs.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## Installation

1. **Clone the Repository**:

    ```sh
    git clone <repository-url>
    cd jwt-auth-example
    ```

2. **Install Dependencies**:

    ```sh
    npm install
    ```

## Configuration

1. **Secret Key**: The secret key for signing JWTs is set in the `routes/auth.js` file. Update `'your_secret_key'` with a secure key.

    ```javascript
    const token = jwt.sign({ username }, 'your_secret_key', { expiresIn: '1h' });
    ```

## Usage

1. **Start the Server**:

    ```sh
    npm start
    ```

    Or, for development with auto-restarting:

    ```sh
    npm run dev
    ```

2. **Endpoints**:

    - **Login**:
      - **URL**: `/api/login`
      - **Method**: POST
      - **Body**: 
        ```json
        {
          "username": "user1",
          "password": "password1"
        }
        ```
      - **Response**:
        ```json
        {
          "token": "<JWT-token>"
        }
        ```

    - **Protected Route**:
      - **URL**: `/api/protected`
      - **Method**: GET
      - **Header**: 
        ```
        Authorization: Bearer <JWT-token>
        ```
      - **Response**:
        ```json
        {
          "msg": "Welcome user1!"
        }
        ```

## Testing

You can test the endpoints using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

1. **Obtain a JWT** by sending a POST request to `/api/login`.
2. **Access the protected route** by sending a GET request to `/api/protected` with the JWT in the Authorization header.

## Development

To add new features or modify the existing code:

1. **Modify the code** in `app.js`, `routes/auth.js`, and `middleware/auth.js`.
2. **Test your changes** locally.
3. **Commit and push** your changes to the repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Your Name
