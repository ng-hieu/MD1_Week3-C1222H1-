function startcheck (){
    let a = parseInt(document.getElementById("check_year").value);
    console.log(a);
    console.log(typeof a);
    if (a % 4 == 0 && a % 100 != 0) {
        document.getElementById("result").innerHTML = "Năm " + a +" vừa kiểm tra là năm nhuận!!!";
    }
    else if (a % 100 == 0 && a % 400 != 0) {
        document.getElementById("result").innerHTML = "Năm " + a +" vừa kiểm tra là năm không nhuận!!!";
    }
    else if (a % 4 == 0 && a % 400 != 0) {
        document.getElementById("result").innerHTML = "Năm " + a +" vừa kiểm tra là năm nhuận!!!";
    }
    else {
        document.getElementById("result").innerHTML = "Năm " + a +" vừa kiểm tra là năm không nhuận!!!";
    }
}