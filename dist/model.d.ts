export declare type SeparatorType = ',' | ';' | '\t' | '|';
export interface IColumnsInfo {
    count: number;
    addId?: boolean;
}
export interface IRowsInfo {
    count: number;
    length: number;
}
export interface IGenerateInfo {
    columns: IColumnsInfo;
    rows: IRowsInfo;
    fileName: string;
    path?: string;
    separator?: SeparatorType;
}
