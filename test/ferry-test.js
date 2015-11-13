var assert = require("assert");
var Ferry = require("../ferry");
var car = require("../car");

describe("ferry kata-", function(){
	it("should create ferry ", function(){
		var ferry = new Ferry(9, 10);
		//console.log(ferry);
		assert.equal(ferry.maximumCarsAllowed, 9);
		assert.equal(ferry.maximumPeopleAllowed, 10);
	})
   
   it("should accept and reject cars on board", function(){
		var ferry = new Ferry(9, 10);
		var car1 = new car("blue", 7);
		assert.equal(ferry.board(car1), "accepted");

		var car5 = new car("green", 3);
		assert.equal(ferry.board(car5), "accepted");

		var carR = new car("maroon", 16);
		assert.equal(ferry.board(carR), "rejected");
	});

   it("should know how many cars of a certain color are on the Ferry", function(){
   	var ferry = new Ferry(9, 10);
		var car1 = new car("blue", 7);
		ferry.board(car1)
		assert.deepEqual(ferry.carColors, {"blue" : 1});

   })

   it("should update  people and car counts correctly when a car leaves the Ferry", function(){
   	var ferry = new Ferry(9, 10);
		var car1 = new car("maroon", 9);
		ferry.board(car1)
		assert.deepEqual(ferry.carColors, {"maroon" : 1});
		assert.deepEqual(ferry.unboard(car1), "car unboarded");
		assert.deepEqual(ferry.carColors, {"maroon" : 0});
		assert.deepEqual(ferry.unboard(car1), "no more cars");
   })


    it("should give a car 50% discount after three trips on the same ferry", function(){
   	var ferry = new Ferry(9, 10);
		var car1 = new car("maroon", 2, 1);
		
		assert.deepEqual(ferry.board(car1), "accepted");
		assert.deepEqual(ferry.board(car1), "accepted");
        assert.deepEqual(ferry.board(car1), "half price");

   })

     it("should give a free trip after 7 trips on any Ferry", function(){
   	var ferry = new Ferry(9, 100);
		var car5 = new car("blue", 6, 9);

		assert.deepEqual(ferry.board(car5), "accepted");
		assert.deepEqual(ferry.board(car5), "accepted");
		assert.deepEqual(ferry.board(car5), "half price");
		assert.deepEqual(ferry.board(car5), "accepted");
		assert.deepEqual(ferry.board(car5), "accepted");
		assert.deepEqual(ferry.board(car5), "accepted");
		assert.deepEqual(ferry.board(car5), "You can go free");
              //console.log(ferry.board(car1))
   })
});