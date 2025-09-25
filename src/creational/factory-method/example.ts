// src/creational/factory-method/example.ts

// Product interface
interface Document {
  open(): void;
  save(): void;
}

// Concrete Product 1
class WordDocument implements Document {
  open(): void {
    console.log('Opening a Word document...');
  }
  save(): void {
    console.log('Saving a Word document...');
  }
}

// Concrete Product 2
class PdfDocument implements Document {
  open(): void {
    console.log('Opening a PDF document...');
  }
  save(): void {
    console.log('Saving a PDF document...');
  }
}

// Creator (abstract)
abstract class Application {
  abstract createDocument(): Document;

  public newDocument(): Document {
    const doc = this.createDocument();
    doc.open();
    return doc;
  }
}

// Concrete Creator 1
class WordApplication extends Application {
  createDocument(): Document {
    return new WordDocument();
  }
}

// Concrete Creator 2
class PdfApplication extends Application {
  createDocument(): Document {
    return new PdfDocument();
  }
}

// Client
function main() {
  let app: Application;

  const fileType: string = 'pdf'; // thử đổi thành "word"

  if (fileType === 'word') {
    app = new WordApplication();
  } else {
    app = new PdfApplication();
  }

  const doc = app.newDocument();
  doc.save();
}

main();
