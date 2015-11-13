var assert = require("assert");
var Thecar = require("../car");

describe("ferry kata-", function(){
	it("should create car ", function(Done){
		var car = new Thecar("yellow", 7);
		//console.log(car);
		assert.equal(car.color, "yellow");
		assert.equal(car.NumberOfPeople, 7);
		Done();
	})
})