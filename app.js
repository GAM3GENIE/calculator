const screenDisplay = document.querySelector('#display');
const buttons = document.querySelectorAll('button[id]');

buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        inputNumber(this.id);
    });
});

const inputNumber = number => {
    const screenNumber = screenDisplay.innerText;
    if(screenNumber.length < 16){
        screenDisplay.innerText = parseInt(screenNumber + number).toString();
    }
}

const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const divide = (x, y) => {
    return x / y;
}

const multiply = (x, y) => {
    return x * y;
}

const operate = (x, operator, y) => {
    
    if(operator == '+'){

        return add(x, y);

    }else if(operator == '-'){

        return subtract(x, y);

    }else if(operator == '*'){

        return multiply(x, y);

    }else if(operator == '/'){

        return divide(x, y);

    }else{

        return null;
    }
}

