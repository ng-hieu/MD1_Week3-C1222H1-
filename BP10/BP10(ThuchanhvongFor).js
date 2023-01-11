//Bài 1: Viết chương trình hiển thị chuỗi “The number is N” 5 lần sử dụng vòng lặp for. Với N sẽ hiển thị từ 0 đến 5.
let i;
let text = "";
for (i=0; i<=5; i++) {
    text +=  "The number is " + i + "<br/>";
    document.getElementById("result1").innerHTML = text;
}
//Bài 2: Viết chương trình nhập vào một số bất kỳ lớn hơn 0. Tính tổng các phần tử từ 1 đến số vừa nhập vào.
function check2() {
    let n = parseFloat(document.getElementById("numb2").value);
    let i;
    let sum = +0;
    for(i=1; i<=n; i++) {
        sum += i;
    }
    document.getElementById("result2").innerHTML = "Tổng phần tử từ 1 đến " + n +" là: " + sum;
}