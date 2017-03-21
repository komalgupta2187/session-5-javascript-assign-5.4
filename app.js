var employee1 = { 
	name: "komal", 
	age: 29,
	salary: 60000, 
	address: { 
		city: "vadodara", 
		state: "gujarat", 
		pin: 390024 },
	}
var employee2 = { 
	name: "prem", 
	age: 29,
	salary: 90000, 
	address: { 
		city: "pune", 
		state: "maharasthra", 
		pin: 412114 },
	}

var employee3 = { 
	name: "umang", 
	age: 27,
	salary: 70000, 
	address: { 
		city: "Bengaluru", 
		state: "Karnataka", 
		pin: 161015 },
	}

var employee4 = { 
	name: "monica", 
	age: 24,
	salary: 50000, 
	address: { 
		city: "Agra", 
		state: "Uttar Pradesh", 
		pin: 177017 },
	}

var employee5 = { 
	name: "Avani", 
	age: 24,
	salary: 82000, 
	address: { 
		city: "Panji", 
		state: "Goa", 
		pin: 209713 },
	}

var employees = [employee1, employee2, employee3, employee4, employee5];

console.log("Name: "+ employees[2]['name'] + "\nAge: "+ employees[2]['age'] +"\nSalary: " + employees[2]['salary'] + "\nCity: " + employees[2].address.city +"\nState: " + employees[2].address.state + "\nPincode: " + employees[2].address.pin);