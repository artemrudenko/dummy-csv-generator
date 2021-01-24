export declare type SeparatorType = ',' | ';' | '\t' | '|';
export interface IColumnsInfo {
    count: number;
    addId?: boolean;
}
export declare type RandomTypes = 'pick' | 'bool' | 'character' | 'float' | 'integer' | 'natural' | 'string' | 'paragraph' | 'sentence' | 'word' | 'age' | 'gender' | 'birthday' | 'name' | 'ssn' | 'company' | 'email' | 'ip' | 'twitter' | 'address' | 'city' | 'country' | 'locale' | 'phone' | 'postal' | 'province' | 'state' | 'street' | 'zip' | 'date' | 'timezone' | 'cc' | 'dollar' | 'guid' | 'hash';
export interface IColumnInfo {
    caption?: string;
    valueType: RandomTypes;
}
export interface ITypedColumnsInfo {
    headers: IColumnInfo[];
    addId?: boolean;
}
export interface IRowsInfo {
    count: number;
    length?: number;
}
export interface IGenerateInfo {
    withHeaders?: boolean;
    columns: IColumnsInfo | ITypedColumnsInfo;
    rows: IRowsInfo;
    fileName: string;
    path?: string;
    separator?: SeparatorType;
}
