"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalcComponent = void 0;
var core_1 = require("@angular/core");
var CalcComponent = /** @class */ (function () {
    function CalcComponent(logic) {
        this.logic = logic;
        //Display String (What is shown on the frontend)
        this.currentDisplayString = '0';
        //Number that has been most recently pressed
        this.currentNumber = "";
        //Number that was last pressed (can overlap with current Number on First Press)
        this.prevPressed = "";
        //A Var that is used to store which OP was pressed before waiting for secound number
        this.opPressed = "";
        this.waitForSecoundNumber = false;
    }
    CalcComponent.prototype.appendNumber = function (numberPressed) {
        this.currentNumber += numberPressed;
        this.prevPressed = this.currentNumber;
        this.currentDisplayString = this.currentNumber;
        return this.currentNumber;
    };
    CalcComponent.prototype.pressNumber = function (numberPressed) {
        if (!this.waitForSecoundNumber) {
            this.appendNumber(numberPressed);
        }
        else {
            this.currentNumber = this.currentNumber.toString() + numberPressed.toString();
            this.currentDisplayString = this.currentNumber;
        }
    };
    CalcComponent.prototype.addDecimal = function () {
        if (!this.currentNumber.endsWith('.')) {
            this.currentNumber = this.currentNumber.toString() + '.';
            this.currentDisplayString = this.currentNumber;
        }
    };
    CalcComponent.prototype.operator = function (op) {
        console.log("the op that was pressed is " + op);
        if (op == '-' && this.currentNumber == '') {
            this.currentNumber = '-';
            this.currentDisplayString = '-';
        }
        else {
            if (op != '=') {
                this.currentNumber = '';
                this.setDisplayString('---');
                this.opPressed = op;
            }
            this.waitForSecoundNumber = !this.waitForSecoundNumber;
            if (op == "=") {
                switch (this.opPressed) {
                    case 'x':
                        {
                            var answer = this.logic.multi(this.prevPressed, this.currentNumber);
                            this.prevPressed = answer;
                            this.currentDisplayString = answer;
                            this.currentNumber = '';
                            this.opPressed = '';
                        }
                        break;
                    case '/':
                        {
                            var answer = this.logic.divide(this.prevPressed, this.currentNumber);
                            this.prevPressed = answer;
                            this.currentDisplayString = answer;
                            this.currentNumber = '';
                            this.opPressed = '';
                        }
                        break;
                    case '+':
                        {
                            var answer = this.logic.add(this.prevPressed, this.currentNumber);
                            this.prevPressed = answer;
                            this.currentDisplayString = answer;
                            this.currentNumber = '';
                            this.opPressed = '';
                        }
                        break;
                    case '-':
                        {
                            var answer = this.logic.subtract(this.prevPressed, this.currentNumber);
                            this.prevPressed = answer;
                            this.currentDisplayString = answer;
                            this.currentNumber = '';
                            this.opPressed = '';
                        }
                        break;
                }
            }
        }
    };
    CalcComponent.prototype.setDisplayString = function (updatePara) { this.currentDisplayString = updatePara; };
    CalcComponent.prototype.clear = function () {
        this.currentDisplayString = '0';
        this.currentNumber = "";
        this.prevPressed = "";
        this.opPressed = "";
    };
    CalcComponent.prototype.ngOnInit = function () {
    };
    CalcComponent = __decorate([
        core_1.Component({
            selector: 'app-calc',
            templateUrl: './calc.component.html',
            styleUrls: ['./calc.component.css']
        })
    ], CalcComponent);
    return CalcComponent;
}());
exports.CalcComponent = CalcComponent;
