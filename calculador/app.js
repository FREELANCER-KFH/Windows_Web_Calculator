import CalculatorUI from './ui.js';
import CalculatorService from './calculator.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    new CalculatorUI(root);
    const displayElement = document.getElementById('display');
    CalculatorService.init(displayElement);
});
