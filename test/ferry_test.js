var assert = require('assert');
var Ferries = require("../ferry");

describe('Test Ferry', function(){
	it("should find how many cars in the ferry and how many people", function(Done){
      var ferry = new Ferries(100, 500);
        console.log(ferry);
		assert.equal(100, ferry.Number);
		assert.equal(500, ferry.HowMany);
		
		Done();
	});
});