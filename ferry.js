module.exports = function(NumberOfCars, NumberOfPeople){
	this.maximumCarsAllowed = NumberOfCars;
	this.maximumPeopleAllowed = NumberOfPeople;


	var car_count = 0;
	var people_count = 0;
	var trip_count = {};
	this.carColors = {};

	this.board = function(car){
		//check if how many people in the car
		if(car_count < this.maximumCarsAllowed && car.NumberOfPeople < this.maximumPeopleAllowed-people_count){
			car_count++;
			people_count++;
			if(this.carColors[car.color] === undefined){
				this.carColors[car.color] = 0;
			}
			this.carColors[car.color]++;

			if(trip_count[car.plate]  === undefined) {
				trip_count[car.plate] =0;
			}
			trip_count[car.plate]++;

			if(trip_count[car.plate] === 3){
				return "half price";
			} if(trip_count[car.plate] === 7){
				return "You can go free";
			}

			return "accepted";
		}else {
			return "rejected";
		}
	}
	this.unboard = function(car){
		//check if how many people in the car
		if(car_count > 0){
			car_count--;
			people_count--;
			this.carColors[car.color]--;
			return "car unboarded";
		}else {
			return "no more cars";

		}
	}
}