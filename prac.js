var captainAmerica = {
        firstName: "Steve",
        lastName: "Rogers",
        friends: ["Bucky", "Tony Stark", "Bruce Banner"],
        age: 122,
        isAvenger: true,
        address: {
            state: "Manhattan",
            city: "New York",
            country: "USA"
        },
        sayHi: function () {
            // console.log(this);
            console.log(`Hello my name is ${captainAmerica.firstName}`);
        }
    };
    
    console.log(captainAmerica.friends);
    console.log(captainAmerica.friends[1]);
    console.log(captainAmerica["friends"][0]);
    
    console.log(captainAmerica.sayHi);
    captainAmerica.sayHi();
    
    //nested objects accessing
    console.log(captainAmerica.address["city"]);
    
    //looping over objects 
    //for in loop -> gives key 
    for(let key in captainAmerica) {
        console.log(key);
        // console.log(captainAmerica[key]);
    }