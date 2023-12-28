# JWT API Service

This is a simple Express application that provides an API for creating JSON Web Tokens (JWTs).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository:
git clone https://github.com/ariescghwartzman/signjwt.git
2. Install dependencies:
cd signjwt npm install



### Environment Variables

This project requires the following environment variables:

- `PORT` - The port on which the server will run. If not provided, defaults to 3000.
- `API_KEY` - The API key for authenticating requests.

## Configuring .env for Local Development

To configure your application for local development, you need to create a `.env` file in the root directory of your project. This file will contain key-value pairs, which represent environment variables.

Here's an example of what your `.env` file might look like:

PORT=3000 

API_KEY=your_api_key


## Running the Application

To start the server, run:
npm start


## API Endpoints

- `POST /sign` - Creates a JWT from the provided payload.

    For example:

    ```bash
    curl -X POST https://{host}/sign \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: your_api_key' \
    -d '{
    "secret": "your_secret",
    "audience": "your_audience"
    }'
    ```
    If the request is successful, you will receive a response like this:

    ```json
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWRpZW5jZSI6InlvdXJfYXVkaWVuY2UiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTUxNjI0MjYyMn0.ih1a0wR5p07s7B8eIiKA7TbCqxGVuCwK3I2C6l1BwEI"
    }
    ```

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Used to create JWTs

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
