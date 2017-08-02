const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    let now = Date().toString();
    let log = `${now} | ${req.method} : ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        // console.log('Unable to append to server.log');
    });
    next();
});


// parse application/x-www-form-urlencoded 
// app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());
 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain');
//   res.write('you posted:\n');
//   res.end(JSON.stringify(req.body, null, 2));
// });

// import message route
const routes = require('./controller/messages')(app);
// app.use(require('./controller/messages'));


// connect to mongoose 
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio", {
    useMongoClient: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Mongoose connected successfully"));


// *****To expand on server make sure all existing routes are above everything concerning webpackMiddleware*****


// code below is to make sure that webpack does not run in production
if (process.env.NODE_ENV !== 'production') {

    // if not running in production environment run webpack
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    app.use(webpackMiddleware(webpack(webpackConfig)));

} else {
    app.use(express.static('dist'));
    // if anyone makes any request to any route give them the index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}


app.listen(port, () => console.log(`Listening on PORT: ${port}`));
