import * as fs from 'fs';

import { RandomCSVGenerator } from './random.csv.generator';
import { IGenerateInfo } from './model';

describe(`Random CSV file Generator::`, () => {
  test(`should allow to generate empty csv file`, async () => {
    // Arrange
    const fileName = `typed-sample-${Date.now()}.csv`;
    const generateInfo: IGenerateInfo = {
      columns: { headers: [] },
      rows: { count: 0, length: 0 },
      fileName
    };
    // Act
    await RandomCSVGenerator.create(generateInfo);
    // Verify
    expect(fs.existsSync(fileName))
      .toBeTruthy();
    expect(fs.readFileSync(fileName).toString())
      .toEqual('');
  });

  test(`should allow to generate random csv file`, async () => {
    // Arrange
    const fileName = `typed-sample-${Date.now()}.csv`;
    const generateInfo: IGenerateInfo = {
      columns: { headers: [{ valueType: 'address' }, { valueType: 'age' }, { valueType: 'email' }] },
      rows: { count: 10 },
      fileName
    };
    // Act
    await RandomCSVGenerator.create(generateInfo);
    // Verify
    expect(fs.existsSync(fileName))
      .toBeTruthy();
  });

  test(`should allow to generate random csv file with ID column and headers`, async () => {
    // Arrange
    const fileName = `typed-sample-${Date.now()}.csv`;
    const generateInfo: IGenerateInfo = {
      withHeaders: true,
      columns: {
        headers: [
          { valueType: 'address' },
          { valueType: 'age' },
          { valueType: 'email' }
        ],
        addId: true
      },
      rows: { count: 10 },
      fileName,
    };
    // Act
    await RandomCSVGenerator.create(generateInfo);
    // Verify
    expect(fs.existsSync(fileName))
      .toBeTruthy();
  });
});