//get element form html
const prevInputOrResult = document.getElementById('previous-input-or-result');
const inputOrResult = document.getElementById('input-or-result');
const btnInputs = document.querySelectorAll('.btn-input');
const btnOperations = document.querySelectorAll('.btn-operation');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const equalBtn = document.getElementById('equal');
const operationsBtn = [multiplyBtn, divideBtn, addBtn, subtractBtn]

let currInputs = []; //store all the input including the operations
let leftParenthesisCount = 0;
let rightParenthesisCount = 0;

// check if right parenthesis ')' is allowed to be clicked
const allowRightParenthesis = () => {
  // this works by checking how many left parenthesis inside the currinputs, if the count of left parenthesis is bigger than the right parenthesis count, then we allow the user to input right parenthesis
  leftParenthesisCount = currInputs.filter(item => item === '(').length;
  rightParenthesisCount = currInputs.filter(item => item === ')').length;
  return leftParenthesisCount > rightParenthesisCount ? true : false
}

//inputs button clicked
for(const input of btnInputs) {
  input.addEventListener('click', () => {
    //check if the button clicked is right parenthesis ')'
    if(input.innerText === ')') {
      //check if the ')' is allowed to be clicked
      const allowance = allowRightParenthesis();
      if(!allowance) return;
    }
    inputOrResult.innerHTML += input.innerText; //replace the view
    currInputs.push(input.innerText); //add the button to input storage
    console.log(currInputs);
  })
}

//check if we can input operation to the currInput
const allowOperationInput = (operationInput) => {
  // first condition check if the operation is the first input, if yes than only '-' is allowed
  if(currInputs.length==0 || currInputs[0]=='-') {
    if(operationInput === '+' || operationInput ==='×' || operationInput === '÷') {
      return false;
    } else return true;
  } else {
    //condition when there is already a value inside the currInputs
    console.log('masuk');
    let currInputValue = currInputs[currInputs.length-1];
    console.log(currInputValue);
    console.log(currInputs.length-1);
    if(currInputValue === '+' || currInputValue === '-' || currInputValue === '×' || currInputValue === '÷') {
      //if the previous value is also a operation, replace the operation by removing the last index
      currInputs.pop();
      inputOrResult.innerHTML = currInputs.join('');
      return true;
    } else {
      //if the previous input is not operation, then simpy add it to the currInputs
      return true
    }
  }
}

//operation button clicked
for(const operationBtn of operationsBtn) {
  operationBtn.addEventListener('click', () => {
    const allowance = allowOperationInput(operationBtn.innerText);

    if(allowance) {
      inputOrResult.innerHTML += operationBtn.innerText; //replace the view
      currInputs.push(operationBtn.innerText); //add the button to input storage
      console.log(currInputs);
    } else {
      console.log(currInputs);
      return;
    }
  })
}

//functional button clicked
clearBtn.addEventListener('click', () => {
  //clear the view and all the current inputs
  inputOrResult.innerHTML = '';
  currInputs.splice(0, currInputs.length); //delete all inputs
  console.log(currInputs);
})

deleteBtn.addEventListener('click', () => {
  currInputs.pop();
  console.log(currInputs);
  inputOrResult.innerHTML = currInputs.join('');
})

equalBtn.addEventListener('click', () => {

})





