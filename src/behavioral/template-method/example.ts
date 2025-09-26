// src/behavioral/template-method/example.ts

// Abstract class defines the template method
abstract class DataProcessor {
  // Template Method
  process(): void {
    this.readData();
    this.processData();
    this.saveData();
  }

  protected abstract readData(): void;
  protected abstract processData(): void;

  protected saveData(): void {
    console.log('Data saved to database');
  }
}

// Concrete subclasses
class CSVDataProcessor extends DataProcessor {
  protected readData(): void {
    console.log('Reading data from CSV file');
  }

  protected processData(): void {
    console.log('Processing CSV data');
  }
}

class JSONDataProcessor extends DataProcessor {
  protected readData(): void {
    console.log('Reading data from JSON file');
  }

  protected processData(): void {
    console.log('Processing JSON data');
  }
}

// Client
function main() {
  const csvProcessor = new CSVDataProcessor();
  csvProcessor.process();

  console.log('---');

  const jsonProcessor = new JSONDataProcessor();
  jsonProcessor.process();
}

main();
