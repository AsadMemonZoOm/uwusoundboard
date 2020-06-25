
var numberOfButtons = document.querySelectorAll(".key").length;

for(var i = 0; i < numberOfButtons; i++){
  document.querySelectorAll(".key")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key){

  key = key.toLowerCase();
  key = rectifier(key);

  var audio;

  switch(key){
    case "a":
    audio = new Audio("sounds/a.wav");
    audio.play();
    break;
    case "b":
    audio = new Audio("sounds/b.wav");
    audio.play();
    break;
    case "c":
    audio = new Audio("sounds/c.wav");
    audio.play();
    break;
    case "d":
    audio = new Audio("sounds/d.wav");
    audio.play();
    break;
    case "e":
    audio = new Audio("sounds/e.wav");
    audio.play();
    break;
    case "f":
    audio = new Audio("sounds/f.wav");
    audio.play();
    break;
    case "g":
    audio = new Audio("sounds/g.wav");
    audio.play();
    break;
    case "h":
    audio = new Audio("sounds/h.wav");
    audio.play();
    break;
    case "i":
    audio = new Audio("sounds/i.wav");
    audio.play();
    break;
    case "j":
    audio = new Audio("sounds/j.wav");
    audio.play();
    break;
    case "k":
    audio = new Audio("sounds/k.wav");
    audio.play();
    break;
    case "l":
    audio = new Audio("sounds/l.wav");
    audio.play();
    break;
    case "m":
    audio = new Audio("sounds/m.wav");
    audio.play();
    break;
    case "n":
    audio = new Audio("sounds/n.wav");
    audio.play();
    break;
    case "o":
    audio = new Audio("sounds/o.wav");
    audio.play();
    break;
    case "p":
    audio = new Audio("sounds/p.wav");
    audio.play();
    break;
    case "q":
    audio = new Audio("sounds/q.wav");
    audio.play();
    break;
    case "r":
    audio = new Audio("sounds/r.wav");
    audio.play();
    break;
    case "s":
    audio = new Audio("sounds/s.wav");
    audio.play();
    break;
    case "t":
    audio = new Audio("sounds/t.wav");
    audio.play();
    break;
    case "u":
    audio = new Audio("sounds/u.wav");
    audio.play();
    break;
    case "v":
    audio = new Audio("sounds/v.wav");
    audio.play();
    break;
    case "w":
    audio = new Audio("sounds/w.wav");
    audio.play();
    break;
    case "x":
    audio = new Audio("sounds/x.wav");
    audio.play();
    break;
    case "y":
    audio = new Audio("sounds/y.wav");
    audio.play();
    break;
    case "z":
    audio = new Audio("sounds/z.wav");
    audio.play();
    break;
    case "sqb-left":
    audio = new Audio("sounds/[.wav");
    audio.play();
    break;
    case "sqb-right":
    audio = new Audio("sounds/].wav");
    audio.play();
    break;
    case "term":
    audio = new Audio("sounds/m1.wav");
    audio.play();
    break;
    case "quot":
    audio = new Audio("sounds/n1.wav");
    audio.play();
    break;
    case "coma":
    audio = new Audio("sounds/o1.wav");
    audio.play();
    break;
    case "dot":
    audio = new Audio("sounds/u1.wav");
    audio.play();
    break;
    default:
    console.log(key);
  }
}

function rectifier(key){
  if(key == "["){
    key = "sqb-left"
  }else if(key == "]"){
    key = "sqb-right";
  }else if(key == ";"){
    key="term";
  }else if(key == "'"){
    key="quot";
  }else if(key == ","){
    key="coma";
  }else if(key == "."){
    key="dot";
  }

  return key;
}

function buttonAnimation(key){
  key = key.toLowerCase();
  key = rectifier(key);
  var activeButton = document.querySelector("."+key);
  console.log(activeButton.innerHTML);
  activeButton.classList.add("press");
  setTimeout(function () {
    activeButton.classList.remove("press");
  }, 100);

}
