function check_answer (){
    let a = document.getElementById("write_answer").value;
    console.log(typeof a);
    let b = "Right !!!";
    let c = "Didn’t know? ECMAScript!"
    if (a == "ECMAScript") {
        document.getElementById("result").innerHTML = b;
    }
    else document.getElementById("result").innerHTML = c;
}