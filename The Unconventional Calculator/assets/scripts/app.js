const result = 0;
let currentResult = result;
const resultArr = [];

function getUserInput() {
    return parseInt(userInput.value);
}

function resultDesc(defaultValue, userValue, operator) {
    const resultDescribtion = `${defaultValue} ${operator} ${userValue}`;
    //defaultValue = defaultValue  `${operator}' +    
    outputResult(currentResult, resultDescribtion); 
}


 function createObj(operationVal, prevNum, userNum, recentNum) {
    const resObj = {
        operation: operationVal,
        initialNum: prevNum,
        givinNum: userNum,
        resultNum: recentNum
    };
    console.log(resObj);
}


 function calcResult(calcType) {
     if (calcType === 'add' ||
         calcType === 'subtract' ||
          calcType === 'multiply' ||
           calcType === 'divide') {
        const intitalVal = currentResult;
        if (calcType === 'add') {
            currentResult += getUserInput();  
            resultDesc(intitalVal,getUserInput(), '+');
            createObj('add', intitalVal, getUserInput(), currentResult);
        } else if (calcType === 'subtract') {
            const intitalVal = currentResult;
            currentResult = currentResult - getUserInput();
            resultDesc(intitalVal,getUserInput(), '-');
            createObj('subtract', intitalVal, getUserInput(), currentResult);
        } else if (calcType === 'multiply') {
            const intitalVal = currentResult;
            currentResult = currentResult * getUserInput();
            resultDesc(intitalVal,getUserInput(), '*');
            createObj('multiply', intitalVal, getUserInput(), currentResult);
        } else if (calcType === 'divide') {
            const intitalVal = currentResult;
            currentResult = currentResult / getUserInput();
            resultDesc(intitalVal,getUserInput(), '/');
            createObj('divide', intitalVal, getUserInput(), currentResult);
        }
     }
 }



    addBtn.addEventListener('click', calcResult.bind(this, 'add'));
    subtractBtn.addEventListener('click', calcResult.bind(this, 'subtract'));
    multiplyBtn.addEventListener('click', calcResult.bind(this, 'multiply'));
    divideBtn.addEventListener('click', calcResult.bind(this, 'divide'));