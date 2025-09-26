// src/behavioral/observer/example.ts

// Observer interface
interface Observer {
  update(state: string): void;
}

// Subject interface
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Concrete Subject
class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: string = '';

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  setState(state: string): void {
    this.state = state;
    this.notify();
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.state);
    }
  }
}

// Concrete Observers
class ConcreteObserver implements Observer {
  constructor(private name: string) {}

  update(state: string): void {
    console.log(`${this.name} received new state: ${state}`);
  }
}

// Client
function main() {
  const subject = new ConcreteSubject();

  const obs1 = new ConcreteObserver('Observer1');
  const obs2 = new ConcreteObserver('Observer2');

  subject.attach(obs1);
  subject.attach(obs2);

  subject.setState('State A');
  subject.setState('State B');

  subject.detach(obs1);

  subject.setState('State C');
}

main();
