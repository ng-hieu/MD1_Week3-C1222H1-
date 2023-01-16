//BÀI 1: NHẬP VÀO a, b
function cau1() {
    //Câu 1: In ra các sỗ từ a đến b
    let a = 1;
    let b = 21;
    let i;
    for (i = a; i <= b; i++) {
        document.getElementById("result1").innerHTML += i + ", ";
    }
}

function cau2() {
    //Câu 2: In ra các sỗ từ a đến b, mỗi số 1 thẻ <h1>
    let a = 1;
    let b = 21;
    let i;
    for (i = a; i <= b; i++) {
        document.getElementById("result2").innerHTML += "<h1>" + i + "</h1>";
    }
}

function cau3() {
    //Câu 3: In ra số chẵn thẻ h1, số lẻ thẻ h2
    let a = 1;
    let b = 21;
    let i;
    for (i = a; i <= b; i++) {
        if (i % 2 === 0) {
            document.getElementById("result3").innerHTML += "<h1>" + i + "</h1>";
        } else {
            document.getElementById("result3").innerHTML += "<h2>" + i + "</h2>";
        }
    }
}

function cau4() {
    //Câu 4: Tính tích các số từ a đến b
    let a = 1;
    let b = 10;
    let i;
    let multi = 1;
    for (i = a; i <= b; i++) {
        multi = multi * i;
    }
    document.getElementById("result4").innerHTML = "Tich các số trong dãy là: " + multi;
}

function cau5() {
    //Câu 5: Tính tích các số chia hết cho 5 từ a đến b
    let a = 1;
    let b = 21;
    let i;
    let multi = 1;
    for (i = a; i <= b; i++) {
        if (i % 5 === 0) {
            multi = multi * i;
        }
    }
    document.getElementById("result5").innerHTML = "Tich các số chia hết 5 trong dãy là: " + multi;
}

function cau6() {
    //Câu 6: Đếm các số chia hết cho 7 từ a đến b
    let a = 1;
    let b = 21;
    let i;
    let count = 0;
    for (i = a; i <= b; i++) {
        if (i % 7 === 0) {
            count++;
        }
    }
    document.getElementById("result6").innerHTML = "Số các số chia hết 7 trong dãy là: " + count;
}

function cau7() {
    //Câu 7: In ra các số từ a đến b. Chia hêt cho 3 in ra "fizz", chia hêt cho 5 in ra "buzz", chia hết cho cả 3 và 5 in ra "fizzbuzz"
    let a = 1;
    let b = 21;
    let i;
    for (i = a; i <= b; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            document.write("Fizz" + "<br>");
            continue;
        } else if (i % 5 === 0 && i % 3 !== 0) {
            document.write("Buzz" + "<br>");
            continue;
        } else if (i % 3 === 0 && i % 5 === 0) {
            document.write("FizzBuzz" + "<br>");
            continue;
        }
        document.write(i + "<br>");
        console.log(i);
    }
}

//BÀI 2:  VIẾT CHƯƠNG TRÌNH NHẬP VÀO Ô INPUT
function caua() {
    //Câu a: Tinh chu vi va dien tich hinh vuong canh a;
    let a = parseFloat(document.getElementById("a").value);
    let p = a * 4;
    let s = a * a;
    document.getElementById("resulta").innerHTML = "Chu vi hình vuông là: " + p + "<br>" + "Diện tích hình vuông là: " + s;
}

function caub() {
    //Câu b: Nhập a và b, tính a^2 và a^b
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let p = Math.pow(a, 2);
    let s = Math.pow(a, b);
    document.getElementById("resultb").innerHTML = "a^2 = " + p + "<br>" + "a^b = " + s;
}

function cauc() {
    //Câu c: Nhập a và b, tính tổng từ a đến b
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    document.getElementById("resultc").innerHTML = "Tổng các số từ a đến b là: " + sum;
}

function caud() {
    //Câu d: Nhập a là năm, in ra thế kỉ
    let a = Math.trunc(document.getElementById("a").value);
    let c = Math.trunc((a / 100) + 1);
    let d = Math.trunc(a / 100);
    if (a % 100 === 0) {
        document.getElementById("resultd").innerHTML = "Thế kỷ của năm " + a + " là thế kỷ: " + d;
    } else {
        document.getElementById("resultd").innerHTML = "Thế kỷ của năm " + a + " là thế kỷ: " + c;
    }
}

function caue() {
    //Câu e: Kiểm tra xem 3 số vừa nhập vào có phải tam giác không? Nếu có thì là tam giác gì?
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    if (a + b > c && a + c > b && b + c > a) {
        document.getElementById("resulte").innerHTML = a + ", " + b + ", " + c + " là số đo 3 cạnh 1 tam giác.";
        if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) || Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) || Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)) {
            document.getElementById("resulte1").innerHTML = "Đây là tam giác vuông!!!";
        } else if (a === b && a === c && b === c) {
            document.getElementById("resulte1").innerHTML = "Đây là tam giác đều!!!";
        } else if (a === b || b === c || c === a) {
            document.getElementById("resulte1").innerHTML = "Đây là tam giác cân!!!";
        }
    } else {
        document.getElementById("resulte").innerHTML = a + ", " + b + ", " + c + " KHÔNG phải là số đo 3 cạnh 1 tam giác.";
    }
}

