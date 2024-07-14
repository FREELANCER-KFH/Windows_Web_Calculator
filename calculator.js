export default class CalculatorService {
    static displayElement = null;
    static currentInput = '';
    static previousInput = '';
    static operator = '';

    static init(displayElement) {
        this.displayElement = displayElement;
    }

    static updateDisplay(value) {
        this.displayElement.innerText = value;
    }

    static processInput(input) {
        if (!isNaN(input) || input === '.') {
            this.handleNumber(input);
        } else if (input === 'C') {
            this.clear();
        } else if (input === '=') {
            this.calculate();
        } else {
            this.handleOperator(input);
        }
    }

    static handleNumber(number) {
        if (this.currentInput.length < 12) {
            this.currentInput += number;
            this.updateDisplay(this.currentInput);
        }
    }

    static handleOperator(operator) {
        if (this.currentInput !== '') {
            if (this.previousInput !== '') {
                this.calculate();
            }
            this.operator = operator;
            this.previousInput = this.currentInput;
            this.currentInput = '';
        }
    }

    static calculate() {
        let result = 0;
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
        }

        this.currentInput = result.toString();
        this.operator = '';
        this.previousInput = '';
        this.updateDisplay(this.currentInput);
    }

    static clear() {
        this.currentInput = '';
        this.previousInput = '';
        this.operator = '';
        this.updateDisplay('0');
    }
}
