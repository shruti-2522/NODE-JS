//anonymous function:
var add=function(a,b){
    return a+b;
}

function sum(){
    console.log(add(200,400));
}

//callback function:
sum(add);