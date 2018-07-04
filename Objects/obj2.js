
var tractor = {
    owner: "porosenok petr",
    model: "sraniy",
    color: "krasniy",
    passengers: 1,
    started: false,
    start: function(){
        this.started = true;
    },
    stop: function(){
        this.started = false;
    },
    drive: function(){
      if (this.started) {
        console.log(tractor.owner + " zavel traktor i sjebivayet iz rashki"); 
      } else {
        console.log(tractor.owner + " ne mozhet zavesti traktor");
      }
    }
};



var song = {
    name: "30 let",
    artist: "Sektor gaza",
    minutes: 4,
    seconds: 3,
    genre: "gavnari",
    playing: false,

    play: function(){
        if (!this.playing){
            this.playing = true;
            console.log("Igraet " + this.name + " ot " + this.artist);
        }
    },
    pause: function(){
        if (this.playing){
            this.playing = false;
            console.log("Paused...");
        }
    }
};

song.play();
song.pause();

var eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function(){
        this.index = this.index + 1;
        if (this.index >= this.advice.length){
            this.index = 0;
        }
    },
    look: function(){
        return this.advice[this.index];
    }
};

eightBall.shake();
eightBall.shake();
eightBall.shake();
eightBall.shake();
console.log(eightBall.look());
