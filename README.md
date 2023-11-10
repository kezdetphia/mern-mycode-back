# myCode Backend

## Project Overview

Welcome to the backend repository of myCode – a robust web application designed for efficient code management. This backend component serves as the RESTful API, powered by Node.js and Express, and stores data in MongoDB.

For the frontend counterpart, please refer to [myCode Frontend Repository](https://github.com/kezdetphia/mern-mycode-front). The live application is deployed on Netlify.

## Technologies

- **Node.js:** JavaScript runtime for server-side development.
- **Express:** Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB:** NoSQL database for flexible and scalable data storage.

## API Endpoints

The backend exposes the following example for a RESTful API endpoint:

1. **`GET /api/codes`**
    **Description:** Retrieves all code snippets saved by the user.
   - Request Body: title, language, description, code


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-backend-repo.git

cd your-backend-repo
npm install
MONGO_URI=your_mongodb_connection_string
PORT=your_preferred_port
npm node server.js

The server will be accessible at http://localhost:your_preferred_port.

Contact

    LinkedIn: Mark Feher
    GitHub (Front End): https://github.com/kezdetphia/mern-mycode-front

Feel free to reach out on GitHub or LinkedIn for collaboration or if you have any questions about the project.