class Calculator{
    constructor(prevOp, currOp){
        this.prevOp = prevOp;
        this.currOp = currOp;
        this.clear();
    }

    clear(){
        this.currOp = "";
        this.prevOp = "";
        this.operation = '';
    }

    delete(){
        this.currOp = (this.currOp.toString()).slice(0,-1);
        currOpTextElement.innerText = this.currOp;
    }

    append(number){
        if(number === '.' && this.currOp.includes('.')) 
            return;
        this.currOp = this.currOp.toString() + number.toString();
    }

    chooseOperation(operation){
        this.operation = operation;
        prevOpTextElement.innerText = this.currOp + this.operation;
        this.prevOp = this.currOp;
        currOpTextElement.innerText = '';
        this.currOp = '';
    }

    compute(){
        switch(this.operation){
            case("+"):
                currOpTextElement.innerText = parseFloat(this.prevOp) + parseFloat(this.currOp);
                prevOpTextElement.innerText = '';
                this.currOp = parseFloat(this.prevOp) + parseFloat(this.currOp);
                this.prevOp = '';
                break;
            case("-"):
                currOpTextElement.innerText = parseFloat(this.prevOp) - parseFloat(this.currOp);
                prevOpTextElement.innerText = '';
                this.currOp = parseFloat(this.prevOp) - parseFloat(this.currOp);
                this.prevOp = '';
                break;
            case("*"):
                currOpTextElement.innerText = parseFloat(this.prevOp) * parseFloat(this.currOp);
                prevOpTextElement.innerText = '';
                this.currOp = parseFloat(this.prevOp) * parseFloat(this.currOp);
                this.prevOp = '';
                break;
            case("÷"):
                currOpTextElement.innerText = parseFloat(this.prevOp) / parseFloat(this.currOp);
                prevOpTextElement.innerText = '';
                this.currOp = parseFloat(this.prevOp) / parseFloat(this.currOp);
                this.prevOp = '';
                break;

        }
    }

    updateDisplay(){
        currOpTextElement.innerText = this.currOp;
    }
}




const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operator]');
const delButton = document.querySelector('[data-del]');
const acButton = document.querySelector('[data-ac]');
const prevOpTextElement = document.querySelector('[data-prevOp]');
const currOpTextElement = document.querySelector('[data-currOp]');
const eqButton = document.querySelector('[data-equals]');

const calculator = new Calculator(prevOpTextElement, currOpTextElement);

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        //console.log('hehehe')
        calculator.append(button.innerText);
        calculator.updateDisplay();
    })
    
});

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        //console.log('hehehe')
        calculator.chooseOperation(button.innerText);
        
    })
    
});

acButton.addEventListener('click', () => {
    calculator.prevOp = '';
    calculator.currOp = '';
    calculator.operation = '';
    currOpTextElement.innerText = '';
    prevOpTextElement.innerText = '';
})

eqButton.addEventListener('click', () => {
    calculator.compute();
})

delButton.addEventListener('click', () => {
    console.log('heheheheh')
    calculator.delete();
})