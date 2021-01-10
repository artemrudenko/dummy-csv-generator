import { IGenerateInfo, SeparatorType } from "./model";
export declare class CSVBuilder {
    _colCount: number;
    _addId: boolean;
    _rowCount: number;
    _rowLenght: number;
    _fileName: string;
    _path: string;
    _separator: SeparatorType;
    _lastInfo: IGenerateInfo | undefined;
    get lastInfo(): IGenerateInfo | undefined;
    withColCount(value: number): this;
    withAddId(value: boolean): this;
    withRowCount(value: number): this;
    withRowLenght(value: number): this;
    withFileName(value: string): this;
    withFilePath(value: string): this;
    withSeparator(value: SeparatorType): this;
    build(): this;
    create(): Promise<unknown>;
}
