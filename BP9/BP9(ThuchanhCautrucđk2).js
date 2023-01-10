//Bài 1
function check1() {
    let a = parseFloat((document.getElementById("tempC").value));
    let tempF = (a * 9/5) +32;
    document.getElementById("result1").innerHTML="Độ F sau khi chuyển từ độ C = " + tempF;
    }
//Bài 2
function check2() {
    let b = parseFloat((document.getElementById("metter").value));
    let feet = b * 3.2808;
    document.getElementById("result2").innerHTML="Feet sau khi chuyển từ metter = " + feet;
    }
//Bài 3
function check3() {
    let c = parseFloat((document.getElementById("quater").value));
    let S_quater = c * c;
    document.getElementById("result3").innerHTML="Diện tích hình vuông = " + S_quater;
}
//Bài 4
function check4() {
    let d = parseFloat((document.getElementById("weightt").value));
    let e = parseFloat((document.getElementById("heightt").value));
    let S = d * e;
    document.getElementById("result4").innerHTML="Diện tích hình vuông = " + S;
}
//Bài 5
function check5() {
    let f = parseFloat((document.getElementById("wweight").value));
    let g = parseFloat((document.getElementById("hheight").value));
    let Sright_triangle = 1/2 * (f * g);
    document.getElementById("result5").innerHTML="Diện tích tam giác vuông = " + Sright_triangle;
}
//Bài 6
function check6() {
    let h = parseFloat((document.getElementById("num1").value));
    let j = parseFloat((document.getElementById("num2").value));
    let numx = (-j)/h;
    document.getElementById("result6").innerHTML="Số cần tìm là = " + numx;
}
//Bài 7
function check7() {
    let k = parseFloat((document.getElementById("numb1").value));
    let l = parseFloat((document.getElementById("numb2").value));
    let m = parseFloat((document.getElementById("numb3").value));
    let delta = (l*l) - (4*k*m);
    let numb1;
    let numb2;
    let numb;
    if (delta > 0) {
        numb1 = ((-l) + Math.sqrt(delta)) / (2*k);
        numb2 = ((-l) - Math.sqrt(delta)) / (2*k);
        document.getElementById("result7").innerHTML = "Phương trình có 2 nghiệm phân biệt là: " + numb1 + " và " + numb2;
    } else if (delta == 0) {
        numb = (-l)/(2*k);
        document.getElementById("result7").innerHTML = "Phương trình có nghiệm kép là: " + numb;
    } else {
        document.getElementById("result7").innerHTML = "Phương trình vô nghiệm ";
    }
}
//Bài 8
function check8() {
    let n = parseInt((document.getElementById("checknum").value));
    if (n > 0 && n <=120) {
        document.getElementById("result8").innerHTML = "Là tuổi một người";
    } else {
        document.getElementById("result8").innerHTML = "Không phải là tuổi một người";
    }
}
//Bài 9
function check9() {
    let o = parseFloat((document.getElementById("c1").value));
    let p = parseFloat((document.getElementById("c2").value));
    let q = parseFloat((document.getElementById("c3").value));
    if ( o>0 &&  p>0 &&  q>0 && o+p>q && p+q>o && o+q>p ) {
        document.getElementById("result9").innerHTML = "Là cạnh một tam giác";
    } else {
        document.getElementById("result9").innerHTML = "Không phải là cạnh một tam giác";
    }
}
//Bài 10
function check10() {
    let r = parseFloat((document.getElementById("elec").value));
    let elec = r * 3500;
    document.getElementById("result10").innerHTML="Giá điện = " + elec + " Vnđ";
}
//Bài 11
function check11() {
    let s = parseFloat((document.getElementById("percent").value));
    let percent = s * (8/100);
    document.getElementById("result11").innerHTML="Thuế thu nhập phải đóng mỗi tháng = " + percent + " Vnđ";
}
//Bài 12
function check12() {
    let t = parseFloat((document.getElementById("money").value));
    let u = parseFloat((document.getElementById("month").value));
    let money = t * Math.pow((1+(0.068/12)),u*12);
    document.getElementById("result12").innerHTML="Số tiên nhận được sau khi gửi ngân hàng = " + money + " Vnđ";
}