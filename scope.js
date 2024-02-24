var x = 45;
console.log(x);

function checkScope(){
    var y = 55;
    console.log(+ x, 'this is scope');

}

console.log(checkScope());