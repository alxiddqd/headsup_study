
var toyota = {
    make: "toyota",
    model: "corolla",
    year: 1998,
    color: "green",
    passengers: 4,
    convertable: false,
    mileage: 12300,
    lplate: "lv2342",
    maxspeed: 220
};

var taxi = {
    make: "ford",
    model: "focus",
    year: 2001,
    color: "yellow",
    passengers: 4,
    convertable: false,
    mileage: 9800,
    lplate: "lv4410",
    maxspeed: 240
};

var bmw = {
    make: "bmw",
    model: "i510",
    year: 2016,
    color: "black",
    passengers: 2,
    convertable: true,
    mileage: 1200,
    lplate: "lv0055",
    maxspeed: 310
};

var fiat = {
    make: "fiat",
    model: "500",
    year: 1957,
    color: "blue",
    passengers: 2,
    convertable: false,
    mileage: 32000,
    lplate: "lv3233",
    maxspeed: 120
};

fiat.needsWashing = true;
fiat.mileage = 38000;
/* var miles = fiat.mileage;
if (miles < 2000){
    buyIt();
}

if (fiat.year < 1990){
    classic = true;
}
for (var i = 0; i < fiat.passengers; i++){
    addPassengerToCar();
} */

var dogg = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls",
    color: "brown"
};

delete dogg.color;
var bark;
if (dogg.weight > 20){
    bark = "WOOOF WOOOF";
} else {
    bark = "woof woof";
}
var speak = dogg.name + " says " + bark + " when he wants to " + dogg.activity;

var emptyObject = {};
emptyObject.age = 10;
if (emptyObject.age > 5){
    emptyObject.school = "Elementary";
}

function prequal(car){
    if (car.mileage > 10000){
        return false;
    }
    else if (car.year > 2010){
        return false;
    }
    return true;
}

var wothALook = prequal(toyota);

if (wothALook){
    console.log("You gotta check out this " + toyota.make + " " + toyota.model);
} else {
    console.log("You should really pass on the " + toyota.make + " " + toyota.model);
}

var fido = {
    name: "fido",
    weight: 30,
    breed: "mixed",
    loves: "walks"
};


function looseWeight(dog, amount){
    dog.weight = dog.weight - amount;
}

looseWeight(fido, 10);


function getSecret(file, secretPassword){
    file.opened = file.opened + 1;
    if (secretPassword == file.password){
        return file.contents;
    }
    else {
        return "Invalid password!";
    }    
}

function setSecret(file, secretPassword, secret){
    if (secretPassword == file.password){
        file.opened = 0;
        file.contents = secret;
    }
}

var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "У Володи воняет жопа!"
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Жопа воняет еще и у Маши!");
secret = getSecret(superSecretFile, 2);
console.log(secret);