'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4

var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

//function to calcul days passed
function date(dateP, dateR)
{
	
	var datepic = new Date(dateP); //convert Pickup date to Date
	var p = datepic.getDate(); //get date(day) of the date
	var dateret = new Date(dateR); //convert Return date to date
	var r = dateret.getDate(); 

	return (r-p) + 1;
}


for(var i = 0; i < rentals.length;i++) //browse rentals elements
{
	var time = 0;
	var distance = 0;
	var calculDate = 0;
	var totalAmount = 0;
	var deductionReduction = 0;
	
	for(var j = 0; j<cars.length;j++) //browse car elements
	{
		if(rentals[i].carId == cars[j].id)
		{
			
			calculDate = date(rentals[i].pickupDate, rentals[i].returnDate);  //we calcul the day passed
			
			distance = cars[j].pricePerKm * rentals[i].distance;  //distance price calcul
			
			/*
			//Exercice 6
			for(var m=0; m<rentalModifications.length; m++)
			{
				if(rentalModifications[m].rentalId == rentals[i].id)
				{
					
					if(rentalModifications[m].rentalId != null) //check if returnDate exist
					{
						rentals[i].returnDate = rentalModifications[m].returnDate; //set new returnDate
					}
						
					if(rentalModifications[m].pickupDate != null) //check if pickupDate exist
					{
						rentals[i].pickupDate = rentalModifications[m].pickupDate; //set new pickupDate
					}
						
					if(rentalModifications[m].distance != null) //check if distance exist
					{
						rentals[i].distance = rentalModifications[m].distance; //set new distance
					}
						
				}				
			}
			*/
			
			
			/*
			//Exercice 1:

			time = cars[j].pricePerDay*calculDate; //time 
			rentals[i].price = distance+time;
			*/
			
			
			
			//Exercice 2:
			
			if(calculDate > 1) 
			{
				time = (cars[j].pricePerDay - cars[i].pricePerDay*0.1)*(date(rentals[i].pickupDate, rentals[i].returnDate)); //calcul time cost by 10% discount of pricePerDay after 1 day

				if(calculDate > 4)
				{
					time = (cars[j].pricePerDay - cars[i].pricePerDay*0.3)*(date(rentals[i].pickupDate, rentals[i].returnDate)); //calcul time cost by 30% discount of pricePerDay after 4 days
				}
				
				if(calculDate > 10)
				{
					time = (cars[j].pricePerDay - cars[i].pricePerDay*0.5)*(date(rentals[i].pickupDate, rentals[i].returnDate)); //calcul time cost by 50% discount of pricePerDay after 10 days
				}
			}
			else
			{
				time = cars[j].pricePerDay*(date(rentals[i].pickupDate, rentals[i].returnDate));
			}
			rentals[i].price = distance+time;
			

			
			//Exercice 3
			rentals[i].commission.assistance = calculDate;  //assistance 1€ per day
			totalAmount = rentals[i].price - rentals[i].commission.assistance;  //amount of the commission
			rentals[i].commission.drivy = totalAmount*0.3; //30% commission of dryvi
			rentals[i].commission.insurance =  (rentals[i].commission.drivy / 2); //Half of commission for insurance
			
			
			
			//Exercice 4
			if(rentals[i].options.deductibleReduction === true)
			{		
				deductionReduction = calculDate*4;  //each day we 4€ extra with deduction option
				rentals[i].price = rentals[i].price + deductionReduction;
				totalAmount = rentals[i].price - rentals[i].commission.assistance; 
				rentals[i].commission.drivy = totalAmount*0.3 + calculDate; //deductible reduction charge goes to drivy
			}
			
			
			
			//Exercice 5
			for (var k = 0; k < actors.length; k++) //browse actors elements
			{
				if(actors[k].rentalId == rentals[i].id)
				{
					for(var l =0; l < actors[k].payment.length; l++) //browse actors.payment elements
					{
						switch(actors[k].payment[l].who)
						{
							case "driver":
								actors[k].payment[l].amount = rentals[i].price; //driver must pay rental price and deductible reduction (included in rental price if he has subscribed)
							break;
							
							case "owner":
								actors[k].payment[l].amount = rentals[i].price - rentals[i].commission.drivy; //owner receives rental price minus commission
							break;
							
							case "insurance":
								actors[k].payment[l].amount = rentals[i].commission.insurance; //insurance receives its parts of his commission
							break;
							
							case "assistance":
								actors[k].payment[l].amount = rentals[i].commission.assistance; //assistance receives its parts of his commission
							break;
							
							case "drivy":
								actors[k].payment[l].amount = rentals[i].commission.drivy + deductionReduction ; //drivy receives its parts of his commission plus deductible reduction
							break;

						}

					}
				}
			}
			
			

		}
	}
}

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);

