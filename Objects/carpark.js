var toyota = {
    make: "toyota",
    model: "corolla",
    year: 1998,
    color: "green",
    passengers: 4,
    convertable: false,
    mileage: 12300,
    lplate: "lv2342",
    maxspeed: 220,
    started: false,
    start: function(){
        this.started = true;
    },
    stop: function(){
        this.started = false;
    },
    drive: function(){
      if (this.started) {
        console.log(this.make + "'s engine goes TRRRTRTRTRTRTRTRTR"); 
      } else {
        console.log("Launch " + this.make + "'s engine first!");
      }
    }
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
    maxspeed: 240,
    started: false,
    start: function(){
        this.started = true;
    },
    stop: function(){
        this.started = false;
    },
    drive: function(){
      if (this.started) {
        console.log(this.make + "'s engine goes TRRRTRTRTRTRTRTRTR"); 
      } else {
        console.log("Launch " + this.make + "'s engine first!");
      }
    }
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
    maxspeed: 310,
    started: false,
    start: function(){
        this.started = true;
    },
    stop: function(){
        this.started = false;
    },
    drive: function(){
      if (this.started) {
        console.log(this.make + "'s engine goes TRRRTRTRTRTRTRTRTR"); 
      } else {
        console.log("Launch " + this.make + "'s engine first!");
      }
    }
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
    maxspeed: 120,
    started: false,
    start: function(){
        this.started = true;
    },
    stop: function(){
        this.started = false;
    },
    drive: function(){
      if (this.started) {
        console.log(this.make + "'s engine goes TRRRTRTRTRTRTRTRTR"); 
      } else {
        console.log("Launch " + this.make + "'s engine first!");
      }
    }
};

toyota.start();
toyota.drive();
toyota.stop();
bmw.start();
bmw.drive();