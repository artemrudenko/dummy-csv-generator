import * as fs from 'fs';
import * as path from 'path';

import { IColumnsInfo, IGenerateInfo } from './model';

export class DummyCSVGenerator {
  static getRandomChar = () => String.fromCharCode(Math.floor(Math.random() * (122 - 65) + 65));
  static getRandomString(length: number) {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += DummyCSVGenerator.getRandomChar();
    }
    return result;
  }

  static generateRow(info: IGenerateInfo) {
    const cells: string[] = [];
    for (let i = 0; i < (info.columns as IColumnsInfo).count; i++) {
      cells.push(DummyCSVGenerator.getRandomString(info.rows.length || 10));
    }
    const result = cells.join(!!info.separator ? info.separator : ',') + '\n';
    return result;
  }

  static async create(info: IGenerateInfo) {
    return new Promise(resolve => {
      let filePath = !!info.fileName ? info.fileName : `dummy${info.rows.count}.csv`;
      if (!!info.path) {
        filePath = path.join(info.path, filePath);
      }
      const stream = fs.createWriteStream(filePath);
      for (let i = 0; i < info.rows.count; i++) {
        let rowStr = '';
        if (info.columns.addId) {
          rowStr += `${i + 1}${info.separator}`;
        }
        rowStr += DummyCSVGenerator.generateRow(info);
        stream.write(rowStr, 'utf8');
      }
      stream.on('close', () => resolve(true));
      stream.end();
    });
  }
}
