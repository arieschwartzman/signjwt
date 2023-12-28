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

## Running the Application

To start the server, run:
npm start


## API Endpoints

- `POST /sign` - Creates a JWT from the provided payload.

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Used to create JWTs

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
