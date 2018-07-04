

function bark(name, weight){
    if (weight >= 20){
        console.log(name + " WOOOOOF");
    }
    else {
        console.log(name + " wooofie");
    }
}

/*whatShallIWear(50);
whatShallIWear(60);
whatShallIWear(80);

function whatShallIWear(temp) {
    if (temp < 70){
        console.log("wear a jacket");
    }
    else if (temp < 60){
        console.log("wear a sweater");
    }
    else {
        console.log("wear a t-shirt");
    }
} */

bark("rover", 22);
bark("tiny", 11);
bark("yugi", 5, 5);
bark("temo", "20");

function saveMyProfile(name, birthday, GPA, newuser) {
    if (birthday >= 2004){
        console.log(name + " too young to be here!");
    } 
    else {
        console.log(name + "'s profile saved!");
    }
}

saveMyProfile("krissy", 1991, 3.12, true);
saveMyProfile("krotik", 2006, 3.22, false);

/*function doIt(param){
    param = 2;
}
var test = 1;
doIt(test);
console.log(test);
*/

var age = 7;
function addOne(x){
    x = x + 1;
}
var newAge = addOne(age);
console.log(newAge);


function bake(degrees){
    var message;

    if (degrees > 500){
        message = "Way too hot!!!";
    }
    else if (degrees < 100){
        message = "Way too cold!!!";
    }
    else {
        message = "Good temperature!";
        //setMode("bake");
        //setTemp(degrees);
    }
    
    return message;
}

var status = bake(350);
console.log(status);

function calculateArea(r){
    var area;
    if (r <= 0){
        return 0;
    }
    else {
        area = Math.PI * r * r;
        return area;
    }
}

var radius = 0;
var theArea = calculateArea(radius);
console.log("The area is: " + theArea);


var avatar = "generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar(points){
    var level = points / pointsPerLevel;

    if (level == 0){
        return "Critter";
    }
    else if (level == 1){
        return "Cat";
    }
    else if (level >= 2){
        return "Gorilla";
    }
}

function updatePoints(bonus, newPoints){
    var i = 0;

    while (i < bonus){
        newPoints = newPoints + skill * bonus;
        i = i + 1;
    }
    return newPoints + userPoints;
}

userPoints = updatePoints(2, 100);

avatar = getAvatar(2112);

console.log(avatar);

var points = 0;
function playTurn(player, location){
    var points = 0; 
    if (location == 1){
        points = points + 100;
    }
    return points;
}

var total = playTurn("Jay", 1);
console.log(points);



var krot = "Krot Valera";

function getMoreKrot(nora){
    var krot = 0;
    if (nora == 1){
        krot = krot + 1;
    }
    else if (nora > 1){
        krot = krot + nora;
    }
    return krot;
}

var newKrot = getMoreKrot(value);

var value = prompt("Сколько нор в твоем огороде?");

console.log(krot);