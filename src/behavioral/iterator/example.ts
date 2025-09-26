// src/behavioral/iterator/example.ts

// Iterator interface
interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

// Aggregate interface
interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}

// Concrete Collection
class NameCollection implements IterableCollection<string> {
  private names: string[];

  constructor(names: string[]) {
    this.names = names;
  }

  createIterator(): Iterator<string> {
    return new NameIterator(this.names);
  }
}

// Concrete Iterator
class NameIterator implements Iterator<string> {
  private index = 0;

  constructor(private names: string[]) {}

  hasNext(): boolean {
    return this.index < this.names.length;
  }

  next(): string | null {
    if (this.hasNext()) {
      return this.names[this.index++];
    }
    return null;
  }
}

// Client
function main() {
  const collection = new NameCollection(['Alice', 'Bob', 'Charlie']);
  const iterator = collection.createIterator();

  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
}

main();
