# Microservices Study - Comments Service

## Overview

This project is part of our microservices study, where we are building a simple comments service using **Node.js** and **Express**. The service provides an API to create and retrieve comments associated with specific posts. This project helps illustrate how individual microservices work, interact, and store data.

## Features
- **GET /posts/:id/comments**: Retrieve all comments for a specific post by providing the post ID.
- **POST /posts/:id/comments**: Create a new comment for a specific post by providing the post ID and content of the comment.

## In-Memory Data Storage
Currently, comments are stored in an **in-memory object** (`commentsByPostId`), which organizes comments by their post ID. This is sufficient for prototyping but would need to be replaced by persistent storage in a production environment.

## How to Run
1. Make sure **Node.js** is installed on your system.
2. Clone the repository.
3. Run `npm install` to install dependencies.
4. Start the server with `node index.js` or `nodemon index.js`.
5. The server will run on **port 4001**.

## Example Usage
- To **create a comment** for a post, send a **POST** request to `/posts/:id/comments` with JSON data in the following format:

  ```json
  {
    "content": "This is a comment"
  }
  ```

- To **retrieve comments** for a specific post, send a **GET** request to `/posts/:id/comments`.

## Notes
- The server does not persist data; once the server is restarted, all comments will be lost.
- In a real microservices environment, each service would have its own dedicated database.

## Next Steps
- Implement persistent storage using a database (e.g., MongoDB or PostgreSQL).
- Add more advanced error handling and validation for incoming data.
- Expand to handle additional features, such as editing or deleting comments.