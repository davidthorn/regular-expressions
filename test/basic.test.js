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
var BasicRegularExpressionsUnitTest = /** @class */ (function () {
    function BasicRegularExpressionsUnitTest() {
    }
    BasicRegularExpressionsUnitTest.prototype["matching a name in a string"] = function () {
        var reg = /david/;
        var text = "my name is david thorn";
        chai_1.expect(text.match(reg)).to.not.be.null;
    };
    BasicRegularExpressionsUnitTest.prototype["matching that a phone number has from 11-15 digits"] = function () {
        var phoneNumber = "00441320193943";
        var reg = /\d{11,15}/;
        chai_1.expect(phoneNumber.match(reg)).to.not.be.null;
    };
    __decorate([
        test
    ], BasicRegularExpressionsUnitTest.prototype, "matching a name in a string", null);
    __decorate([
        test
    ], BasicRegularExpressionsUnitTest.prototype, "matching that a phone number has from 11-15 digits", null);
    BasicRegularExpressionsUnitTest = __decorate([
        suite('Basic Regular Expression')
    ], BasicRegularExpressionsUnitTest);
    return BasicRegularExpressionsUnitTest;
}());
exports.BasicRegularExpressionsUnitTest = BasicRegularExpressionsUnitTest;
//# sourceMappingURL=basic.test.js.map