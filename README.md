# AV1 Express API

This project is a simple API built using Express.js. It provides endpoints for managing items with basic CRUD operations.

## Project Structure

```
av1-express-api
├── src
│   ├── app.js               # Initializes the Express application and sets up middleware
│   ├── server.js            # Entry point for starting the server
│   ├── controllers          # Contains business logic for API routes
│   │   └── index.js
│   ├── routes               # Defines API routes
│   │   └── index.js
│   ├── middleware           # Custom middleware functions
│   │   └── errorHandler.js
│   ├── services             # Functions for data manipulation
│   │   └── index.js
│   └── config               # Configuration settings
│       └── index.js
├── test                     # Contains tests for the API endpoints
│   └── app.test.js
├── .gitignore               # Specifies files to ignore by Git
├── package.json             # Project metadata and dependencies
└── README.md                # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd av1-express-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
npm run dev
```

The server will start on `http://localhost:3000`.

## API Endpoints

- `GET /items` - Retrieve a list of items.
- `POST /items` - Create a new item.

## Testing

To run the tests, use the following command:
```
npm test
```

## License

This project is licensed under the MIT License.