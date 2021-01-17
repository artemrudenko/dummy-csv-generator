# dummy-csv-generator

Just small module to generate dummy csv files with the specified cols*rows size for the testing purposes.

## Installation (Not yet published)
```
npm install dummy-csv-generator -D
```

## Example
```typescript
import { IGenerateInfo, DummyCSVGenerator } from './src';

const generateInfo: IGenerateInfo = {
  columns: { count: 1 },
  rows: { count: 1, length: 10 },
  fileName: `sample-${Date.now()}.csv`
};
DummyCSVGenerator.create(generateInfo);
```

Or using builder

```typescript
new CSVBuilder()
  .withColCount(4)
  .withAddId(true)
  .withRowCount(100)
  .withRowLenght(60)
  .withSeparator('\t')
  .build()
  .create();
```