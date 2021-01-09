import * as fs from 'fs';

import { DummyCSVGenerator, IGenerateInfo } from '../src';

describe(`Dummy CSV file Generator::`, () => {
  test(`should allow to generate empty csv file`, async () => {
    // Arrange
    const fileName = `sample-${Date.now()}.csv`;
    const generateInfo: IGenerateInfo = {
      columns: { count: 0 },
      rows: { count: 0, length: 0 },
      fileName
    };
    // Act
    await DummyCSVGenerator.create(generateInfo);
    // Verify
    expect(fs.existsSync(fileName))
      .toBeTruthy();
    expect(fs.readFileSync(fileName).toString())
      .toEqual('');
  });

  test(`should allow to generate random csv file`, async () => {
    // Arrange
    const fileName = `sample-${Date.now()}.csv`;
    const generateInfo: IGenerateInfo = {
      columns: { count: 1 },
      rows: { count: 1, length: 10 },
      fileName
    };
    // Act
    await DummyCSVGenerator.create(generateInfo);
    // Verify
    expect(fs.existsSync(fileName))
      .toBeTruthy();
  });
});