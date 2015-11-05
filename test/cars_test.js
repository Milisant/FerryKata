var assert = require('assert');
var Cars = require("../car");

describe('Test My Car', function(){
	it("should find how many passenger in the car", function(Done){
      var cars = new Cars("red", 5);
        console.log(cars);
		assert.equal("red", cars.color);
		assert.equal(5, cars.number);

		Done();
	});
});