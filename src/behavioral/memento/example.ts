// src/behavioral/memento/example.ts

// Memento
class Memento {
  constructor(private state: string) {}

  getState(): string {
    return this.state;
  }
}

// Originator
class TextEditor {
  private state: string = '';

  type(words: string): void {
    this.state += words;
    console.log(`Current content: "${this.state}"`);
  }

  save(): Memento {
    console.log('Saving state...');
    return new Memento(this.state);
  }

  restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Restored content: "${this.state}"`);
  }
}

// Caretaker
class History {
  private mementos: Memento[] = [];

  addMemento(m: Memento): void {
    this.mementos.push(m);
  }

  getMemento(index: number): Memento {
    return this.mementos[index];
  }
}

// Client
function main() {
  const editor = new TextEditor();
  const history = new History();

  editor.type('Hello ');
  history.addMemento(editor.save());

  editor.type('World!');
  history.addMemento(editor.save());

  editor.type(' This will be removed.');

  // Undo
  editor.restore(history.getMemento(1));
  editor.restore(history.getMemento(0));
}

main();
