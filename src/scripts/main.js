/**
 * Created by danawacomputer on 2017-06-20.
 */


/***
 // 01. 기본변수
 window.alert('hello');

 var a = 4;
 var b = 4;
 var c = 'hello';
 var sum = a+b;
 var conv = a+c;

 var d = null;

 console.log(sum);
 console.log(conv);
 console.log(d);

 document.write('<h2>안녕하세요</h2>');

 **///

/***
 // 02. 연산자

 var acc = 3;
 acc += 5;
 acc++;
 console.log(acc);
 ***/

/**
 // 03. 문자열 기본
 var a = '안녕하세요';
 var b = '하이하이';
 var c = true;

 //04. 문자열 결합
 console.log(a + b);
 console.log(a, b);
 console.log(c);

 // 05 . for문
 for(var i=0; i<5; i++){
    console.log(i+'번째 손님입니다.');
}

 for( var x=2; x<10; x++){
    for(var y=1; y<10; y++){
        console.log(x+'*'+y+'='+x*y);
    }
}

 **/

/**
// 06. while

var i = 1;
while (i < 100) {
    console.log(i);
    i++;

}

// 07. if문
if (3 > 5) {
    //1
}
else {
    //2
}


if (undefined) {
    //1 false
}
else {
    //2
}

**/


/**
// 08. 논리연산자
var a;
var b = a||0;
console.log(b);
**/


// 09. 배열
var scores = [100,200]
for(var i = 0 in scores){
    console.log(scores[i]);
}

/**
// 10. 함수
function addTwoNumber (a,b) {
    return a+b;
}


function subTwoNumber1 (a,b) {
    return a-b;
}


var subTwoNumber2 = function (a,b) {
    return a-b;
}

var multiplyTwoNuber = function (a,b) {
    console.log(a*b);
}

console.log(addTwoNumber(2,3));
console.log(subTwoNumber1(4,2));
console.log(subTwoNumber2(5,3));

multiplyTwoNuber(2,3);



function plusThree(a) {
    var resultOutter = a + 3;

    function plusTwo() {
        return resultOutter + 2;
    }

    return plusTwo();
}

console.log(plusThree(3));


function getCalcNumbers(callback) {
    var result = callback(10,60);
    return result;
}

var callbackFunction = function (numberOne, numberTwo) {
    return numberOne+numberTwo;
}


var result = getCalcNumbers(callbackFunction);
console.log(result);
**/



/*
function sum(datas) {
    var acc = 0;
    for(var item in datas){
        acc += datas[item];
    }
    return acc;
}


function average(datas) {
    var temp = 0;

    for (var item in datas){
        temp = temp + item;
    }
    return temp/datas.length;
}

function calacNumbers(datas, func) {
    return func(datas);
}

var arr = [2,4,8];
console.log(calacNumbers(arr,sum));
console.log(calacNumbers(arr,average));

function makeSquare(val) {

    return function () {
        return val*val;
    }

}

var squareFunction = makeSquare(3);
console.log(squareFunction());
console.log(squareFunction);



// 11. 변수의 스코프(scope of variables)
function scopeTest(a) {
    var b = 5;
    if(1){
        var c = 3;
        console.log(c);
    }
    console.log(c);
}

scopeTest();


//  alert

//window.alert('hello');

var clickConfirm = window.confirm('hello');

if(clickConfirm){
    console.log('ok');
}
else{
    console.log('cancel');
}
*/

// 12. 자바스크립트 객체
// 자바스크립트 주요 타입 5가지

var num = 5; //number 리터럴
var str = 'hell'; // string 리터럴
var bool = true; // boolean 리터럴
var arr = []; // array 리터럴
var obj = {}; // object 리터럴

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);


var art1 = {
    articleId: 1,
    title: 'hello',
    author: 'kim',
    content: 'test text'
};


var art2 = {
    articleId: 2,
    title: 'hello2',
    author: 'lee',
    content: 'test text222',
    add: function (a,b) {
        return a+b;
    },
    sub: function (a,b) {
        return a-b;
    }
};

console.log(art2.title);

var artList =
    [
        {
            articleId: 1,
            title: 'hello',
            author: 'kim',
            content: '테스트에요..'
        },
        {
            articleId: 2,
            title: '제목',
            author: 'lee',
            content: '테스트입니다.'
        }
    ];
