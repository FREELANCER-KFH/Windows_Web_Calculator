import CalculatorService from './calculator.js';

export default class CalculatorUI {
    constructor(root) {
        this.root = root;
        this.createCalculator();
    }

    createCalculator() {
        const calculatorDiv = document.createElement('div');
        calculatorDiv.className = 'calculator';

        const display = document.createElement('div');
        display.className = 'display';
        display.id = 'display';
        calculatorDiv.appendChild(display);

        const buttons = [
            '7', '8', '9', '/', 
            '4', '5', '6', '*', 
            '1', '2', '3', '-', 
            '0', '.', '=', '+', 
            'C'
        ];

        buttons.forEach(button => {
            const buttonElement = document.createElement('button');
            buttonElement.innerText = button;
            buttonElement.className = 'btn btn-secondary';
            if (['/', '*', '-', '+', '='].includes(button)) {
                buttonElement.classList.add('operator');
            }
            buttonElement.addEventListener('click', () => this.handleButtonClick(button));
            calculatorDiv.appendChild(buttonElement);
        });

        this.root.appendChild(calculatorDiv);
    }

    handleButtonClick(button) {
        CalculatorService.processInput(button);
    }
}
