//Bài 1
function check () {
let browser = document.getElementById("browser").value;
let a = "Okay we support these browsers too" ;
let b = "We hope that this page looks ok";
let c = "You've got the Edge!";
 switch (browser) {
     case "Edge":
         document.getElementById("result").innerHTML = c;
         break;
     case "Chrome":
     case "Firefox":
     case "Safari":
     case "Opera":
         document.getElementById("result").innerHTML = a;
         break;
     default:
         document.getElementById("result").innerHTML = b;
         break;
 }
}
//Bài 2
let a = +prompt ("a?", '');
switch (a){
    case 0: alert("0");
        break;
    case 1: alert("1");
        break;
    case 2:
    case 3:
        alert("2, 3");
        break;
}