import { DummyCSVGenerator } from "./dummy.csv.generator";
import { IGenerateInfo, SeparatorType } from "./model";

export class CSVBuilder {
  _colCount: number = 0;
  _addId: boolean = false;
  _rowCount: number = 0;
  _rowLenght: number = 0;
  _fileName: string = `result_${Date.now()}.csv`;
  _path: string = process.cwd();
  _separator: SeparatorType = ',';
  _lastInfo: IGenerateInfo | undefined;

  get lastInfo() {
    return this._lastInfo;
  }

  withColCount(value: number) {
    this._colCount = value;
    return this;
  }

  withAddId(value: boolean) {
    this._addId = value;
    return this;
  }

  withRowCount(value: number) {
    this._rowCount = value;
    return this;
  }

  withRowLenght(value: number) {
    this._rowLenght = value;
    return this;
  }

  withFileName(value: string) {
    this._fileName = value;
    return this;
  }

  withFilePath(value: string) {
    this._path = value;
    return this;
  }

  withSeparator(value: SeparatorType) {
    this._separator = value;
    return this;
  }

  build() {
    this._lastInfo = {
      rows: { count: this._rowCount, length: this._rowLenght },
      columns: { count: this._colCount, addId: this._addId },
      fileName: this._fileName,
      path: this._path,
      separator: this._separator
    };
    return this;
  }

  create() {
    if (!!this._lastInfo) {
      return DummyCSVGenerator.create(this._lastInfo);
    }
    throw new Error(`Please build generate info before creation!`);
  }
}
