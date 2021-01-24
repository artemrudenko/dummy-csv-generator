import * as fs from 'fs';
import * as path from 'path';
import { zip } from 'lodash';

import { generateColumn } from './generator';
import { IGenerateInfo, ITypedColumnsInfo } from './model';

export class RandomCSVGenerator {

  static generateRows(info: IGenerateInfo) {
    const columns: any[][] = [];
    for (let i = 0; i < (info.columns as ITypedColumnsInfo).headers.length; i++) {
      const column = (info.columns as ITypedColumnsInfo).headers[i];
      columns.push(generateColumn(column.valueType, info.rows.count));
    }
    return zip(...columns);
  }

  static async create(info: IGenerateInfo) {
    const separator = !!info.separator ? info.separator : ',';
    return new Promise(resolve => {
      let filePath = !!info.fileName ? info.fileName : `dummy${info.rows.count}.csv`;
      if (!!info.path) {
        filePath = path.join(info.path, filePath);
      }
      // Open Stream
      const stream = fs.createWriteStream(filePath);
      // Write header
      if (!!info.withHeaders) {
        let captions: string[] = [];
        if (!!info.columns.addId) {
          captions.push('ID');
        };
        (info.columns as ITypedColumnsInfo).headers.forEach(info => {
          captions.push(!!info.caption ? info.caption : info.valueType.toUpperCase());
        })
        stream.write(`${captions.join(separator)}\n`, 'utf8');
      }
      // Write body
      let i = 0;
      for (let row of RandomCSVGenerator.generateRows(info)) {
        let rowStr = '';
        if (info.columns.addId) {
          rowStr += `${i + 1}${separator}`;
        }
        rowStr += `${row.join(separator)}\n`;
        stream.write(rowStr, 'utf8');
        i++;
      }
      // Close
      stream.on('close', () => resolve(true));
      stream.end();
    });
  }
}
