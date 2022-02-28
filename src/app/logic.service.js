"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LogicService = void 0;
var core_1 = require("@angular/core");
var LogicService = /** @class */ (function () {
    function LogicService() {
        console.log(this.add('5', '2'), this.multi('3', '10'), this.divide('10', '2'));
    }
    LogicService.prototype.add = function (a, b) {
        var result = 0;
        var aNumber = parseFloat(a);
        var bNumber = parseFloat(b);
        result = aNumber + bNumber;
        return result.toString();
    };
    LogicService.prototype.subtract = function (a, b) {
        var result = 0;
        var aNumber = parseFloat(a);
        var bNumber = parseFloat(b);
        result = aNumber - bNumber;
        return result.toString();
    };
    LogicService.prototype.multi = function (a, b) {
        var result = 0;
        var aNumber = parseFloat(a);
        var bNumber = parseFloat(b);
        result = aNumber * bNumber;
        return result.toString();
    };
    LogicService.prototype.divide = function (a, b) {
        var result = 0;
        var aNumber = parseFloat(a);
        var bNumber = parseFloat(b);
        result = aNumber / bNumber;
        return result.toString();
    };
    LogicService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LogicService);
    return LogicService;
}());
exports.LogicService = LogicService;
