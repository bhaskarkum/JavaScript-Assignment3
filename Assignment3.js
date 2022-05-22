<!-- Functional Programming :Basic Exercises-->
<!--Assignment1. ComposedValue-->

function composedValue(x){
    var doubleresult=double(x);
    var squareresult=square(doubleresult);
    console.log(squareresult);
}
function square(x){
    return x*x;
}
function double(x){
    return x*2;
}

composedValue(5);


<--Assignment2. Compose -->

var f1=function(square,double,x){console.log(square(double(x)))};
var f2=function(double,square,x){console.log(double(square(x)))};

function square(x){
    return x*x;
}
function double(x){
    return x*2;
}
f1(square,double,5);
f1(square,double,10);
f2(double,square,5);
f2(double,square,10);

<!--Assignment3. isEven -->

function isEven(num){return (num%2==0);}

function find(arr,isEven){
    for(i=0;i<arr.length;i++){
        if(isEven(arr[i])){
            console.log(arr[i]);
            break;
        }
    }
}

const arr=[1,3,5,4,2];
console.log(isEven(3));//-->false
console.log(isEven(4));//-->true
find(arr,isEven);//-->4

<!--Assignment4. Map -->

function square(x){return x*x;}
function map(arr,square){
    let outp=[];
    for(i=0;i<arr.length;i++){
        outp.push(square(arr[i]));
    }
    console.log(outp)
}

const arr=[1,2,3,4,5];
map(arr,square);//-->[1,4,9,16,25]

function map1(arr,Math){
    let outp=[];
    for(i=0;i<arr.length;i++){
        outp.push(Math.sqrt(arr[i]));
    }
    console.log(outp)
}
map1([1,4,9,16,25],Math);//-->[1,2,3,4,5]


<!-- Functional Programming : Advanced Exercises -->

<!--Assignment1. isEven-->

function isEven(num){return (num%2==0);}

function find(arr,isEven){

    if(isEven(arr[0])){
        console.log(arr[0]);
    }
    else{
        find(arr.slice(-(arr.length-1)),isEven);
    }
}

const arr=[1,3,5,4,2];
console.log(isEven(3));//-->false
console.log(isEven(4));//-->true
find(arr,isEven);//-->4

<!--Assignment2. Map -->

function square(x){return x*x;}
function map(arr,square){
    
}

const arr=[1,2,3,4,5];
map(arr,square);//-->[1,4,9,16,25]

function map1(arr,Math){
    
}
map1([1,4,9,16,25],Math);//-->[1,2,3,4,5]