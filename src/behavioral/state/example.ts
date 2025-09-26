// src/behavioral/state/example.ts

// State interface
interface State {
  handle(context: Context): void;
}

// Concrete States
class ConcreteStateA implements State {
  handle(context: Context): void {
    console.log('State A handling request. Switching to State B.');
    context.setState(new ConcreteStateB());
  }
}

class ConcreteStateB implements State {
  handle(context: Context): void {
    console.log('State B handling request. Switching to State A.');
    context.setState(new ConcreteStateA());
  }
}

// Context
class Context {
  private state: State;

  constructor(initialState: State) {
    this.state = initialState;
  }

  setState(state: State): void {
    this.state = state;
  }

  request(): void {
    this.state.handle(this);
  }
}

// Client
function main() {
  const context = new Context(new ConcreteStateA());

  context.request();
  context.request();
  context.request();
}

main();
