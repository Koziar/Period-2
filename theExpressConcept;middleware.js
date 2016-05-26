/*

 5. Explain, using relevant examples, the Express concept; middleware

 */
//------------------------------------------------------------------------------------------------------------------
/*

 Express middlewares and Node modules are pluggable JavaScript components, which make Express apps very modular,
 flexible, and extensible.
 The middleware system allows small re-usable programs to handle HTTP-specific functionalities.
 An Express application is essentially a stack of middleware which are executed in a pipeline (serially).

 Express is a routing and middleware web framework that has minimal functionality of its own:
 An Express application is essentially a series of middleware function calls.

 Middleware functions are functions that have access to the request object (req), the response object (res),
 and the next middleware function in the application’s request-response cycle.
 The next middleware function is commonly denoted by a variable named next.

 Middleware functions can perform the following tasks:
 - Execute any code.
 - Make changes to the request and the response objects.
 - End the request-response cycle.
 - Call the next middleware function in the stack.

 An Express application can use the following types of middleware:
 > Application-level middleware
 > Router-level middleware
 > Error-handling middleware
 > Built-in middleware
 > Third-party middleware

 ..:: NEXT() ::..
 next() call inside a middleware invokes the next middleware or route handler depending
 on whichever is declared next. But next() call inside a route handler invokes the next
 route handler only. If there is a middleware next then it’s skipped. Therefore middleware functions
 must be declared above all route handlers.
 If the current middleware function does not end the request-response cycle, it must call next()
 to pass control to the next middleware function. Otherwise, the request will be left hanging.
 */

// ..:: Application-level middleware ::..
//This example shows a middleware function with no mount path.
// The function is executed every time the app receives a request.
var app = express();

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

//This example shows a middleware function mounted on the /user/:id path.
//The function is executed for any type of HTTP request on the /user/:id path.
app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

//Here is an example of loading a series of middleware functions at a mount point, with a mount path.
//It illustrates a middleware sub-stack that prints request info for any type of HTTP request to the /user/:id path.
app.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// ..:: Router-level middleware ::..
//Router-level middleware works in the same way as application-level middleware,
// except it is bound to an instance of express.Router().
var router = express.Router();

//The following example code replicates the middleware system that is shown above for application-level middleware,
// by using router-level middleware:
var app = express();
var router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next router
    if (req.params.id == 0) next('route');
    // otherwise pass control to the next middleware function in this stack
    else next(); //
}, function (req, res, next) {
    // render a regular page
    res.render('regular');
});

// ..:: Error-handling middleware ::..
// Error-handling middleware functions are defined in the same way as other middleware functions,
// except with four arguments instead of three, specifically with the signature (err, req, res, next)):
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// ..:: Third-party middleware ::..
// Use third-party middleware to add functionality to Express apps.
// Install the Node.js module for the required functionality, then load it in your app
// at the application level or at the router level.
// The following example illustrates installing and loading the cookie-parsing middleware function cookie-parser.

// $ npm install cookie-parser

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());




//------------------------------------------------------------------------------------------------------------------
// Source -> http://expressjs.com/en/guide/using-middleware.html

// ---------------------------------

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");

var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/jokeApi');

var app = express();

// view engine setup                                            ----- All this is middelvare -----
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');//                                            From here

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'secret_3162735',saveUninitialized:true, resave: true}));

app.use('/api', api);

app.use(function (req, res, next) {
    var session = req.session;
    if (session.userName) {
        return next();
    } else {
        if (req.body.userName) {
            session.userName = req.body.userName;
            return res.redirect('/');
        } else {
            req.url = '/login';
            return next();
        }
    }
});

app.use('/', routes);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Development error handler. Will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });//                                                           To here
    });
}//                                                        ----- All this is middelvare ---------

// Production error handler. No stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;