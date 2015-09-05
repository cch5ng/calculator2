// there is an input field
// when user clicks an operation button (+, -, *, /)
//   get the user input (default 0) and set it as x
// when user clicks on the equals button (=)
//   get the user input and set it as y
// return the computed value

document.addEventListener('DOMContentLoaded', function(evt) {

  var mathAdd = null, 
      mathSubtract = null, 
      mathMultiply = null, 
      mathDivide = null,
      num1 = null,
      num2 = null,
      finalNum = null;


  function add(x) {
    return function(y) {
      return x + y;
    };
  }

  function subtract(x) {
    return function(y) {
      return x - y;
    };  
  }

  // var mathSub = subtract(5);
  // console.log(mathSub(2));
  //expect 3

  function multiply(x) {
    return function(y) {
      return x * y;
    };
  }

  // var mathMult = multiply(10);
  // console.log(mathMult(7));
  //expect 70

  function divide(x) {
    return function(y) {
      return x / y;
    }; 
  }

  // var mathDiv = divide(18);
  // console.log(mathDiv(3));
  //expect 6

  //TODO this is basically ok
  var btnAddClickHandler = function() {
    var input = document.querySelector('input');
    num1 = parseInt(input.value);
    console.log(typeof num1);
    
  //TODO need to break this out into a separate function which is a click handler for equals button; also need to fix scope issues for mathAdd access  
    mathAdd = add(num1);
  //console.log(mathAdd(5));
  //expect 6
    
  };

  var btnEqualClickHandler = function() {
    var input = document.querySelector('input');
    num2 = parseInt(input.value);
    
    if (mathAdd) {
      //console.log(mathAdd(num2));
      finalNum = mathAdd(num2)
      input.setAttribute('value', finalNum);
    }
  };

  var btnClearClickHandler = function() {
    num1 = null;
    num2 = null;
    finalNum = null;
    
    var input = document.querySelector('input');  
    input.setAttribute('value', '0');  
  };

  function btnNumClickHandler(btnVal) {
    var input = document.querySelector('input');  
    
    console.log('btnVal: ' + btnVal);
    console.log(typeof parseInt(btnVal));
    
    if (typeof parseInt(btnVal) === 'number') {
      var btnValue = parseInt(btnVal);
      input.setAttribute('value', btnValue);
    }
  }

  //click listeners
  var clearBtn = document.getElementById('btnClear');
  clearBtn.addEventListener('click', btnClearClickHandler);

  var addBtn = document.querySelector('#btnAdd');
  addBtn.addEventListener('click', btnAddClickHandler);

  var equalBtn = document.querySelector('#btnEqual');
  equalBtn.addEventListener('click', btnEqualClickHandler);

  var numBtn0 = document.querySelector('#btn0');
  numBtn0.addEventListener('click', function() {
    btnNumClickHandler(numBtn0.value);}, false );

  var numBtn1 = document.querySelector('#btn1');
  numBtn1.addEventListener('click', function() {
    btnNumClickHandler(numBtn1.value);}, false );

  var numBtn2 = document.querySelector('#btn2');
  numBtn2.addEventListener('click', function() {
    btnNumClickHandler(numBtn2.value);}, false );

  var numBtn3 = document.querySelector('#btn3');
  numBtn3.addEventListener('click', function() {
    btnNumClickHandler(numBtn3.value);}, false );

  var numBtn4 = document.querySelector('#btn4');
  numBtn4.addEventListener('click', function() {
    btnNumClickHandler(numBtn4.value);}, false );

  var numBtn5 = document.querySelector('#btn5');
  numBtn5.addEventListener('click', function() {
    btnNumClickHandler(numBtn5.value);}, false );

  var numBtn6 = document.querySelector('#btn6');
  numBtn6.addEventListener('click', function() {
    btnNumClickHandler(numBtn6.value);}, false );

  var numBtn7 = document.querySelector('#btn7');
  numBtn7.addEventListener('click', function() {
    btnNumClickHandler(numBtn7.value);}, false );

  var numBtn8 = document.querySelector('#btn8');
  numBtn8.addEventListener('click', function() {
    btnNumClickHandler(numBtn8.value);}, false );

  var numBtn9 = document.querySelector('#btn9');
  numBtn9.addEventListener('click', function() {
    btnNumClickHandler(numBtn9.value);}, false );

});