//Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
function check1() {
    let a = parseFloat((document.getElementById("checknum1").value));
    let b = parseFloat((document.getElementById("checknum2").value));
    if (a % b === 0) {
        document.getElementById("result1").innerHTML = "a chia hết b";
    } else {
        document.getElementById("result1").innerHTML = "a không chia hết b";
    }
}

//Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
function check2() {
    let c = document.getElementById("checkage").value;
    if (c < 15) {
        document.getElementById("result2").innerHTML = "Ineligible for 10th grade ";
    } else {
        document.getElementById("result2").innerHTML = "Eligible for 10th grade ";
    }
}

//Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
function check3() {
    let d = parseInt(document.getElementById("checkinteger").value);
    if (d >= 0) {
        document.getElementById("result3").innerHTML = "Là sô nguyên dương";
    } else {
        document.getElementById("result3").innerHTML = "Là sô nguyên âm";
    }
}

//Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
function check4() {
    let e = parseInt(document.getElementById("checkinteger1").value);
    let f = parseInt(document.getElementById("checkinteger2").value);
    let g = parseInt(document.getElementById("checkinteger3").value);
    let max = e;
    if (max < f){
        max = f;
    }
    if (max < g) {
        max = g;
    }
        document.getElementById("result4").innerHTML = max + " là sô nguyên lớn nhất trong 3 sô";
}
//Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
function check5() {
    let h = parseFloat(document.getElementById("checkgrade1").value);
    let j = parseFloat(document.getElementById("checkgrade2").value);
    let k = parseFloat(document.getElementById("checkgrade3").value);
    let grade = (h + j + k)/3;
    if (grade >= 8 && grade <= 10) {
        document.getElementById("result5").innerHTML = "Học sinh Giỏi";
    } else if (grade >=5 && grade <8 ){
        document.getElementById("result5").innerHTML = "Học sinh Khá";
    } else {
        document.getElementById("result5").innerHTML = "Học sinh Trung bình";
    }
}
function check6() {
    let l = parseFloat(document.getElementById("checkpercent").value);
    let percent = l * (6/100);
    document.getElementById("result6").innerHTML = "Hoa hồng được nhận là: " + percent;
}