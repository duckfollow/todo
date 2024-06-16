# To-Do List API

This is a simple REST API for a To-Do List application built with Node.js and Express.js, without connecting to a database.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/todo-api.git
    cd todo-api
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

The server will run on `http://localhost:3000`.

### API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
