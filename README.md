# ashnode
sample node Project


After cloning 

 - npm install   
(installs the node modules) 

- npm run start 
(Sript starts the server on port 7000

- Postman collection shared with working api's on the server

- Hit /doLogin which is currently a dummy doLogin with jwt support 
use once for accessing the other api's which is secured with middleware


Following tasks checked 
a) Create RESTful API application in NodeJS - [x]

b) The application will have ‘user’ route which will have handling for following methods:  - [x]

                -> GET /users - to fetch all users

                -> GET /users/:id - to fetch a particular user

                -> POST /users - to add new all user

                -> PUT /users/:id - to update user info

                -> DELETE /users/:id - to delete particular user

c) enable CORS  - [x]

d) enable JWT token checking middleware for all above endpoints (use hardcoded username and password to create JWT token) - [x]

e) add testing framework of choice, to add unit tests for above endpoints  (Todo Later)

d) add relevant npm scripts to build and test the application - [x]

e) for storing users use mongoDB as database  [x]

f) user schema should be as given: - [x]
