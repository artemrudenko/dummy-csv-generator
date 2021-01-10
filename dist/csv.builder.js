"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVBuilder = void 0;
var dummy_csv_generator_1 = require("./dummy.csv.generator");
var CSVBuilder = /** @class */ (function () {
    function CSVBuilder() {
        this._colCount = 0;
        this._addId = false;
        this._rowCount = 0;
        this._rowLenght = 0;
        this._fileName = "result_" + Date.now() + ".csv";
        this._path = process.cwd();
        this._separator = ',';
    }
    Object.defineProperty(CSVBuilder.prototype, "lastInfo", {
        get: function () {
            return this._lastInfo;
        },
        enumerable: false,
        configurable: true
    });
    CSVBuilder.prototype.withColCount = function (value) {
        this._colCount = value;
        return this;
    };
    CSVBuilder.prototype.withAddId = function (value) {
        this._addId = value;
        return this;
    };
    CSVBuilder.prototype.withRowCount = function (value) {
        this._rowCount = value;
        return this;
    };
    CSVBuilder.prototype.withRowLenght = function (value) {
        this._rowLenght = value;
        return this;
    };
    CSVBuilder.prototype.withFileName = function (value) {
        this._fileName = value;
        return this;
    };
    CSVBuilder.prototype.withFilePath = function (value) {
        this._path = value;
        return this;
    };
    CSVBuilder.prototype.withSeparator = function (value) {
        this._separator = value;
        return this;
    };
    CSVBuilder.prototype.build = function () {
        this._lastInfo = {
            rows: { count: this._rowCount, length: this._rowLenght },
            columns: { count: this._colCount, addId: this._addId },
            fileName: this._fileName,
            path: this._path,
            separator: this._separator
        };
        return this;
    };
    CSVBuilder.prototype.create = function () {
        if (!!this._lastInfo) {
            return dummy_csv_generator_1.DummyCSVGenerator.create(this._lastInfo);
        }
        throw new Error("Please build generate info before creation!");
    };
    return CSVBuilder;
}());
exports.CSVBuilder = CSVBuilder;
