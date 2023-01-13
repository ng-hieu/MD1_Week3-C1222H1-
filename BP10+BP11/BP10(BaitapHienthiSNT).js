function run() {
    let n = parseInt(document.getElementById("input").value);
    let i, j;
    for (i = 0; i<=n; i++) {
        if (i%2!==0 || i%3!==0 || i%5!==0) {
        /*for (j = 0; j <= i; j++){
            if (j%2!==0 || j%3!==0 || j%5!==0) {
                document.getElementById("result").innerHTML = j ;
            }
        }*/
        document.getElementById("result").innerHTML += i + "<br>";
        console.log(i);}
    }
}