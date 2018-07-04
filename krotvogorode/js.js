var krot = "Krot Valera";

function getMoreKrot(nora){
    var krot = 0;
    if (nora == 1){
        krot = krot + 1;
    }
    else if (nora > 1){
        krot = nora;
    }
    return krot;
}
var value = prompt("Сколько нор в твоем огороде?");
var newKrot = getMoreKrot(value);


alert(newKrot);

console.log(krot);