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
    LookAheadRegularExpressionsUnitTest.prototype["that we can capture a repeated sequence of items"] = function () {
        var reg = /([\w]*)\s*([\w]+)\s*:\s*([\w]+)/g;
        var paramReg = new RegExp(reg.source);
        var text = "_ name: String, _ surname: String, person age: Int";
        var result = text.match(reg);
        chai_1.expect(result).to.not.be.null;
        if (result === null)
            return;
        var params = result.map(function (item) { return item.match(paramReg); });
        chai_1.expect(params.length).to.equal(3);
        if (params.length !== 2)
            chai_1.expect(params.length).to.not.equal(2);
        var name = params[0];
        var surname = params[1];
        var age = params[2];
        chai_1.expect(name).to.be.not.undefined;
        chai_1.expect(name).to.be.not.null;
        chai_1.expect(surname).to.be.not.undefined;
        chai_1.expect(surname).to.be.not.null;
        chai_1.expect(age).to.be.not.undefined;
        chai_1.expect(age).to.be.not.null;
        if (name === null)
            return;
        chai_1.expect(name[1]).to.equal('_');
        chai_1.expect(name[2]).to.equal('name');
        chai_1.expect(name[3]).to.equal('String');
        if (surname === null)
            return;
        chai_1.expect(surname[1]).to.equal('_');
        chai_1.expect(surname[2]).to.equal('surname');
        chai_1.expect(surname[3]).to.equal('String');
        if (age === null)
            return;
        chai_1.expect(age[1]).to.equal('person');
        chai_1.expect(age[2]).to.equal('age');
        chai_1.expect(age[3]).to.equal('Int');
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
    __decorate([
        test
    ], LookAheadRegularExpressionsUnitTest.prototype, "that we can capture a repeated sequence of items", null);
    LookAheadRegularExpressionsUnitTest = __decorate([
        suite('Look Ahead Regular Expression')
    ], LookAheadRegularExpressionsUnitTest);
    return LookAheadRegularExpressionsUnitTest;
}());
exports.LookAheadRegularExpressionsUnitTest = LookAheadRegularExpressionsUnitTest;
//# sourceMappingURL=look-ahead.test.js.map