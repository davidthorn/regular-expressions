"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../node_modules/mocha-typescript/globals.d.ts"/>
var chai_1 = require("chai");
var LookAheadRegularExpressionsUnitTest = /** @class */ (function () {
    function LookAheadRegularExpressionsUnitTest() {
    }
    LookAheadRegularExpressionsUnitTest.prototype["that the sentence contains the keyword func"] = function () {
        var reg = /func/;
        var text = "public func myMethod() {";
        var result = text.match(reg);
        chai_1.expect(result).to.not.be.null;
    };
    LookAheadRegularExpressionsUnitTest.prototype["that the method name is preceeded by a func keyword "] = function () {
        var reg = /func(?=\s+([\w\d]+))/;
        var text = "func myMethod";
        var result = text.match(reg);
        chai_1.expect(result).to.not.be.null;
        if (result !== null)
            chai_1.expect(result[1]).to.equal('myMethod');
    };
    LookAheadRegularExpressionsUnitTest.prototype["that the method name is followed by open and close brackets"] = function () {
        var reg = /func(?=\s+([\w\d]+)(?=\s*\(\)))/;
        var text = "func myMethod()";
        var result = text.match(reg);
        chai_1.expect(result).to.not.be.null;
        if (result !== null)
            chai_1.expect(result[1]).to.equal('myMethod');
    };
    LookAheadRegularExpressionsUnitTest.prototype["that the method names brackets are followed by an opening curly braket"] = function () {
        var reg = /func(?=\s+([\w\d]+)(?=\s*\(\)(?=\s*{)))/;
        var text = "func myMethod() {";
        var result = text.match(reg);
        chai_1.expect(result).to.not.be.null;
        if (result !== null)
            chai_1.expect(result[1]).to.equal('myMethod');
    };
    LookAheadRegularExpressionsUnitTest.prototype["that the func keyword exists after access level"] = function () {
        var reg = /(@IB[\w]+|)(?=\s*(public|private|internal|open|fileprivate|)(?=\s*(func(?=\s+([\w]+)))))/;
        var text = "@IBOtherThing public func myMethodName(name)";
        var result = text.match(reg);
        chai_1.expect(result).to.not.be.null;
    };
    __decorate([
        test
    ], LookAheadRegularExpressionsUnitTest.prototype, "that the sentence contains the keyword func", null);
    __decorate([
        test
    ], LookAheadRegularExpressionsUnitTest.prototype, "that the method name is preceeded by a func keyword ", null);
    __decorate([
        test
    ], LookAheadRegularExpressionsUnitTest.prototype, "that the method name is followed by open and close brackets", null);
    __decorate([
        test
    ], LookAheadRegularExpressionsUnitTest.prototype, "that the method names brackets are followed by an opening curly braket", null);
    __decorate([
        test
    ], LookAheadRegularExpressionsUnitTest.prototype, "that the func keyword exists after access level", null);
    LookAheadRegularExpressionsUnitTest = __decorate([
        suite('Look Ahead Regular Expression')
    ], LookAheadRegularExpressionsUnitTest);
    return LookAheadRegularExpressionsUnitTest;
}());
exports.LookAheadRegularExpressionsUnitTest = LookAheadRegularExpressionsUnitTest;
//# sourceMappingURL=look-ahead.test.js.map