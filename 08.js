/*

 8. Explain, using relevant examples, your strategy for implementing a REST-API with
 	Node/Express and show how you can “test” all the four CRUD operations programmatically
 	using for example the Request package

 */
//------------------------------------------------------------------------------------------------------------------
/*
 REST with Express
 My strategy would be very much based on the one presented in slides by Lars:
*/
 //Assume we had the following "data model"
 var persons = [];
 persons.push({id:1,name:"Lukas"});//...
 function findPerson(id){
 return persons.filter(function(person){
 return person.id === id;
 })[0];

  //We gonna use Grouping Routes with app.route(..)
 //app,route(..) returns an instance of a single route,
// which can then be used to handle HTTP verbs with optional middleware.

	 app.route("/person")
	 .all(function(req,res,next){
		 console.log("A request made on /person");
		 next();
	 })
	 .get(function(req,res, next){
		 res.end(JSON.stringify(persons));
	 })
	 .put(function(req,res, next){})
	 .delete( function(req,res, next){})
	 .post(function(req,res, next){}

// Using the Router object
// A router is an isolated instance of middleware and routes.
// Routers can be thought of as "mini" applications, capable only of performing middleware and routing functions.
// Every express application has a built-in app router

	 var express = require('express');
	 var router = express.Router();

	 router.all("/",function(req,res,next){})

	 router.get("/",function(req,res, next){
		 res.end(JSON.stringify(persons));
	 });

	 router.get("/:id",function(req,res, next){
		 res.end(JSON.stringify(findPerson(req.params.id)));
	 });
	 router.put("/",function(req,res, next){});
	 router.delete("/",function(req,res, next){});
	 router.post("/",function(req,res, next){});

	 module.exports = router;

