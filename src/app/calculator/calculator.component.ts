import { Component } from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
    output: number;
    first: number;
    second: number;
    operator = '+';
    onFirst(value) {
        this.first = Number(value);
    }
    onSecondChange(value) {
        this.second = Number(value);
    }
    onSelect(value) {
        this.operator = value;
    }
    calculate() {
        switch (this.operator) {
            case '+':
                this.output = this.first + this.second;
                break;
            case '-':
                this.output = this.first - this.second;
                break;
            case '*':
                this.output = this.first * this.second;
                break;
            case '/':
                this.output = this.first / this.second;
                break;
        }
    }
}
