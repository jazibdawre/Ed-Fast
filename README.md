## ED-Fast ##

An e-Learning Website with content / video sharing


## File Structure

```
.
|--Client/                  -> Frontend
├── config/                 -> Configuration settings of various middlewares used like DB, Loggers, etc
├── middleware/             -> Contains custom middlewares for authentication, file upload etc.
├── models/                 -> Contains DB models
├── routes/                 -> Files exporting respective routers connecting routes to function in controllers
├── test/                   -> Contains Chai and Mocha tests for routes
├── app.js                  -> Sets up express app with routers, middlewares etc and exports it
├── index.js                -> Connects to DB and starts the server, file to be run for starting the app
└── package.json            -> Npm package.json file


#### Backend

- Node.js v12.18.3
- Express.js v4.17.1
- Mongoose v5.8.10
- Multer v1.4.2


#### Frontend

- HTML5
- CSS3
- ReactJs                 (16.6+)
- Material-UI             (4.9.0)
- ES6 JavaScript
- axios                   (0.19.2)
