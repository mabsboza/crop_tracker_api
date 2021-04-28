# Crop Tracker API

## Technology Stack

- Node
- Express 
- JWT 
- Postgres
- Heroku

## Development env setup

- Run: `npm install`
- Set up env variables, create a `.env` file equal to `.env.example` with your credentials.
- To create local database env run: `npm setup`

## Development

- To run server: `npm start`


## API
- Use an Api tool like `Postman`
- Deployed in Heroku, check if server is online `http://crop-tracker-api.herokuapp.com/`
- Signup `/api/v1/auth/signup`

  {
    "email": "",
    "first_name": "",
    "last_name": "",
    "password": ""
  }

- Signin `/api/v1/auth/signin`

   Token in `HEADER`
   
  {
    "email": "",
    "password": ""
  }
