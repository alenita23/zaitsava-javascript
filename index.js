const button1 = document.querySelector('.firstPart1stTask');
const button2 = document.querySelector('.secondPart1stTask');
const button3 = document.querySelector('.thirdPart1stTask');

function MakeUpAlgorithm1() {
   let inputNumber = prompt("Please, enter any number from 0 to 100", "0");
      if (inputNumber > 7) {
         document.querySelector('.inputNumber').innerHTML = 'Hello!';
         console.log("Hello!");
      }
};

function MakeUpAlgorithm2() {
   let inputName = prompt("Please, enter your name", "Peter");
   if (inputName == "John") {
      document.querySelector('.inputName').innerHTML = `Hello, ${inputName}`;
      console.log(`Hello, $'inputName'`);
   }
   else {
      document.querySelector('.inputName').innerHTML = "There is no such name";
      console.log("There is no such name");
   }
};

function MakeUpAlgorithm3() {
   let inputRange = prompt("Please, enter any quantity of any numbers separated by ', '", "1, 2, 3, 4, 5, 6, 7, 8, 9");
   let array = inputRange.split(', ').map(Number);
   let outputArray = array.filter(n => n % 3 == 0);
   let result = outputArray.join(', ').split();

   document.querySelector('.inputRange').innerHTML = `${result}`;
   console.log(`${result}`);
};


button1.addEventListener('click', MakeUpAlgorithm1);
button2.addEventListener('click', MakeUpAlgorithm2);
button3.addEventListener('click', MakeUpAlgorithm3);