/*

 9. Explain, using relevant examples, about testing JavaScript code, relevant packages
 	(Mocha etc.) and how to test asynchronous code

 */
//------------------------------------------------------------------------------------------------------------------
/*
 the package.json file (for review):
 { 
     "name": "testing", 
     "version": "1.0.0", 
     "description": "", 
     "main": "index.js", 
     "scripts": { 
     "test": "mocha" 
     }, 
     "author": "", 
     "license": "ISC", 
     "devDependencies": { 
     "chai": "^3.5.0", 
         "mocha": "^2.4.5" 
     }
  }
*/

 // module to be tested:
function add(n1, n2) {
	return n1 + n2;
}

function addAsync(n1, n2, callback) {
	setTimeout(function () {
		var result = n1 + n2;
		console.log("In timer function");
		callback(result);
	}, 1000);
}

module.exports.add = add;
module.exports.addAsync = addAsync;

//The actual test:
/** 
 * Created by favl on 02/03/2016. 
 */

var expect = require("chai").expect;
var adder = require("../module");

// The two tools above, mocha and chai, are the main ones we are using for testing of our node.js applications.
// Mocha is the framework and chai is the assertion set that provides
// many different methods to test how our code is working and help us find errors.
// We use the expect keyword to write a test that will give us the result we expect!!

describe("Test calculator", function () {
	it("should return 4", function () {
		expect(adder.add(2, 2)).to.be.equal(4);
	});

	it("should return 4 asynchronously", function(done) {
		adder.addAsync(3, 3, function(res) {
			expect(res).to.be.equal(6);
			done();
		})
	});
});

//------------------------------------------------------------------------------------------------------------------
// Good explanation! ->> https://www.youtube.com/watch?v=Q8Jl85FJz4E&list=PLw5h0DiJ-9PAdZwGJCYb7a9P2mJHayQQ3
