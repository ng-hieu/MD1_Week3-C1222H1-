function checkuser () {
    let user = document.getElementById("user").value;
    console.log(user);
    if (user == "Admin") {
        document.getElementById("asked").innerHTML = "Nhập mật khẩu";
    }
    else if (user == "null") {
        document.getElementById("result").innerHTML = "canceled";
    }
    else document.getElementById("result").innerHTML = "I don't know you!!!";

}
function login (){
    let pass = document.getElementById("pass").value;
    console.log(pass);
        if (pass == "TheMaster") {
        document.getElementById("result").innerHTML = "Welcome";
        }
        else if (pass =="null") {
        document.getElementById("result").innerHTML = "Canceled";
        }
        else document.getElementById("result").innerHTML = "Wrong Password !!!";
    }
