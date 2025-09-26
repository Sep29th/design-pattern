// src/behavioral/chain-of-responsibility/example.ts

// Handler
abstract class Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler; // hỗ trợ chain
  }

  handle(request: string): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    } else {
      console.log(`No handler could process request: ${request}`);
    }
  }
}

// Concrete Handlers
class AuthHandler extends Handler {
  handle(request: string): void {
    if (request === 'auth') {
      console.log('AuthHandler processed request');
    } else {
      super.handle(request);
    }
  }
}

class LoggingHandler extends Handler {
  handle(request: string): void {
    if (request === 'log') {
      console.log('LoggingHandler processed request');
    } else {
      super.handle(request);
    }
  }
}

class DataHandler extends Handler {
  handle(request: string): void {
    if (request === 'data') {
      console.log('DataHandler processed request');
    } else {
      super.handle(request);
    }
  }
}

// Client
function main() {
  const auth = new AuthHandler();
  const logging = new LoggingHandler();
  const data = new DataHandler();

  auth.setNext(logging).setNext(data);

  console.log("Sending 'auth' request:");
  auth.handle('auth');

  console.log("\nSending 'log' request:");
  auth.handle('log');

  console.log("\nSending 'data' request:");
  auth.handle('data');

  console.log("\nSending 'unknown' request:");
  auth.handle('unknown');
}

main();
