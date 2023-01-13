//VÒNG LẶP FOR
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
//VÒNG LẶP WHILE
//Bài 1: Viết chương trình nhận vào một số từ hộp thoại, việc nhập kết thúc khi người dùng nhập vào giá trị -1. Mỗi giá trị nhập được sẽ được hiển thị ra và thực hiện tính tổng các giá trị đó.
/*function checkw1(){
    let n;
    let sum = 0;
    while (n!= -1) {
        n = document.getElementById("numbw1").value;
        document.getElementById("check1").innerHTML = "Số vừa nhập: " + n;
        console.log(n);
        sum += n;
    }
    document.getElementById("run1").innerHTML = "Tổng các giá trị nhập vào = " + sum;


}*/
//Bài 2: Viết chương hình hiển thị thẻ <hr> theo độ rộng từ 1 đến 100. Kết quả sẽ được hiển thị như hình
function run2() {
    let n = 1;
    while (n < 15) {
        document.getElementById("run2").innerHTML += '<hr style="width:' + n + '%">';
        n++;
    }
}
//Sử dụng vòng lặp do while để viết lại chương trình yêu cầu nhập các số từ 1 -> 10 ở ví dụ trong phần vòng lặp while.
function run3(){
    let n = +document.getElementById("check3").value;
    // document.getElementById("run33").addEventListener("click", function () {
       if(n>=1 && n <= 10){
            console.log(n);
            document.getElementById("run3").innerHTML = "Số vừa nhập là: "+n;
            //document.getElementById("run33").removeAttribute("onclick");
       }

}
let n, m, tabl;
tabl = '<table style=\"border: 1px solid black; width: 300px; padding: 3px; border-spacing: 1px">'
for (n = 1; n<=10; n++){
    tabl = tabl + '<tr>';
    for (m = 1; m<=10;m++){
        tabl = tabl + '<td>' + n*m + '</td>'
    }
    tabl = tabl + '</tr>';
}
tabl = tabl + '</table>';
document.getElementById("run4").innerHTML = tabl;