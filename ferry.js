module.exports = function(NumberOfCars, NumberOfPassengers){
	this.color = NumberOfCars;
	this.Number = NumberOfPassengers;

	this.OnBoard = function(car){
		NumberOfPassengers = 0;
		NumberOfCars = 0;
		if (car < 100) {
			return "accepted";
			NumberOfCars ++;
			NumberOfPassengers ++;

		}else {
			return "rejected";
		}
	}
	//return car;
}

