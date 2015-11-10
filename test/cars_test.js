var assert = require("assert");
var Car = require("../car");

describe("the car", function(){
	it("should return the color of car an the number of passengers", function(Done){
		var theCar = new Car("red", 10);
		assert.equal(theCar.color, "red");
		assert.equal(theCar.Number, 10);
		Done();
	})
})