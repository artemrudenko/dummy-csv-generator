import { IGenerateInfo } from './model';
export declare class DummyCSVGenerator {
    static getRandomChar: () => string;
    static getRandomString(length: number): string;
    static generateRow(info: IGenerateInfo): string;
    static create(info: IGenerateInfo): Promise<unknown>;
}
