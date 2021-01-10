import * as fs from 'fs';

import { CSVBuilder } from './csv.builder';

describe(`CSVBuilder::`, () => {
  test(`should create builder`, async () => {
    expect(new CSVBuilder()).toBeDefined()
  });

  test(`should not init last generate info on creation`, async () => {
    const builder = new CSVBuilder();
    expect(builder.lastInfo)
      .toBeUndefined();
  });

  test(`should allow to build generate info`, async () => {
    // Arrange
    const builder = new CSVBuilder();
    // Act
    await builder
      .withColCount(4)
      .withAddId(true)
      .withRowCount(100)
      .withRowLenght(60)
      .withSeparator(',')
      .build();
    // Verify
    expect(builder.lastInfo)
      .toEqual(expect.objectContaining({
        "columns": {
          "addId": true,
          "count": 4
        },
        "rows": {
          "count": 100,
          "length": 60
        },
        "separator": ","
      }));
  });

  test(`should allow to create csv file`, async () => {
    // Arrange
    const fileName = `sample-${Date.now()}.csv`;
    // Act
    await new CSVBuilder()
      .withColCount(4)
      .withRowCount(1)
      .withRowLenght(60)
      .withFileName(fileName)
      .build()
      .create();
    // Verify
    expect(fs.existsSync(fileName))
      .toBeTruthy();
  });
});