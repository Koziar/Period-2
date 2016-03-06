/*

 4. Explain, using relevant examples, concepts related to the testing a REST-API using
 	Node/JavaScript + relevant packages

 */
//------------------------------------------------------------------------------------------------------------------
/*
 When testing a Node.Js apps REST-API one can simply use the Request module. This is done by seeign if the request is
 not failed and then returning something that will show that the test passed. This is the easiest and simplest way
 to test a REST-API. But API tests can also be made using mocha, chai, jasmine or any other testing module.
 */
Get:

	request('http://localhost:3000/api/joke', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
		}
	});

Post:

	request({
			url: "http: //localhost:3000/api/joke",
			method: "POST",
			json: true,
			body: {
				joke: "joke"
			}
		},
		function (error, res, body) {
			if (!error && res.statusCode == 200) {
				console.log(body);
			}
		});

