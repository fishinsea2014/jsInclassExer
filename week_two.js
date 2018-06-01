function a3(){
    var n = 0;
    function add() {
        n++;
        console.log(n);
    }

    return add;
}

a3();