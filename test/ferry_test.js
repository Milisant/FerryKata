var assert = require("assert");
var Ferry = require("../ferry");

describe("the ferry", function(){
	it("should return the number of cars the number of passengers", function(Done){
		var theFerry = new Ferry(50, 100);
		console.log(theFerry);
		assert.equal(theFerry.NumberOfCars);
		assert.equal(theFerry.NumberOfPassengers);
		Done();
	})
	it("should get how many cars are onBoard", function(Done){
	  var theFerry = new Ferry();
	  var kata = theFerry.OnBoard(50, 100);
		console.log(kata);
		assert.equal(kata.NumberOfCars);
		assert.equal(kata.NumberOfPassengers);
		Done();
	})
})