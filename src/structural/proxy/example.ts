// src/structural/proxy/example.ts

// Subject interface
interface Image {
  display(): void;
}

// RealSubject
class RealImage implements Image {
  constructor(private filename: string) {
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading image from disk: ${this.filename}`);
  }

  display(): void {
    console.log(`Displaying image: ${this.filename}`);
  }
}

// Proxy
class ProxyImage implements Image {
  private realImage: RealImage | null = null;

  constructor(private filename: string) {}

  display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Client
function main() {
  const image1: Image = new ProxyImage('photo1.png');
  const image2: Image = new ProxyImage('photo2.png');

  // Image is loaded only when display() is called
  image1.display(); // load + display
  image1.display(); // already loaded, just display

  image2.display(); // load + display
}

main();
