function rnadomnum() {
  var num = Math.floor(Math.random() * 6) + 1;
  return num;
}

document.getElementById("btn").onclick = function roll() {
  var num1 = rnadomnum();
  var num2 = rnadomnum();
  switch (num1) {
    case 1:
      document.getElementById("face1").setAttribute("src", "assets/1.png");
      break;
    case 2:
      document.getElementById("face1").setAttribute("src", "assets/2.png");
      break;
    case 3:
      document.getElementById("face1").setAttribute("src", "assets/3.png");
      break;
    case 4:
      document.getElementById("face1").setAttribute("src", "assets/4.png");
      break;
    case 5:
      document.getElementById("face1").setAttribute("src", "assets/5.png");
      break;
    case 6:
      document.getElementById("face1").setAttribute("src", "assets/6.png");
      break;

    default:
      break;
  }
  switch (num2) {
    case 1:
      document.getElementById("face2").setAttribute("src", "assets/1.png");
      break;
    case 2:
      document.getElementById("face2").setAttribute("src", "assets/2.png");
      break;
    case 3:
      document.getElementById("face2").setAttribute("src", "assets/3.png");
      break;
    case 4:
      document.getElementById("face2").setAttribute("src", "assets/4.png");
      break;
    case 5:
      document.getElementById("face2").setAttribute("src", "assets/5.png");
      break;
    case 6:
      document.getElementById("face2").setAttribute("src", "assets/6.png");
      break;

    default:
      break;
  }
  if(num1==num2){
    document.querySelector("h1").innerHTML="Draw"
  }else if(num1>num2){
    document.querySelector("h1").innerHTML="Player1 Wins"
  }else{
    document.querySelector("h1").innerHTML="Player2 Wins"
  }
};
document.getElementById("ref").onclick=function ref(){
    location.reload();
}
