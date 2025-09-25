// src/creational/abstract-factory/example.ts

// Abstract Product A
interface Button {
  render(): string;
}

// Abstract Product B
interface Checkbox {
  render(): string;
}

// Concrete Product A1
class WindowsButton implements Button {
  render(): string {
    return 'Render Windows style button';
  }
}

// Concrete Product B1
class WindowsCheckbox implements Checkbox {
  render(): string {
    return 'Render Windows style checkbox';
  }
}

// Concrete Product A2
class MacButton implements Button {
  render(): string {
    return 'Render Mac style button';
  }
}

// Concrete Product B2
class MacCheckbox implements Checkbox {
  render(): string {
    return 'Render Mac style checkbox';
  }
}

// Abstract Factory
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete Factory 1
class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

// Concrete Factory 2
class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// Client
class Application {
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  renderUI(): void {
    console.log(this.button.render());
    console.log(this.checkbox.render());
  }
}

// Example usage
function main() {
  const os: string = 'Windows'; // change to "Mac" for Mac UI

  let factory: GUIFactory;

  if (os === 'Windows') {
    factory = new WindowsFactory();
  } else {
    factory = new MacFactory();
  }

  const app = new Application(factory);
  app.renderUI();
}

main();
