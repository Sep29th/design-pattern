// src/creational/singleton/example.ts

class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {
    // private để ngăn new trực tiếp
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ${message}`);
    console.log(`[LOG] ${message}`);
  }

  public getLogs(): string[] {
    return this.logs;
  }
}

// Client
function main() {
  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();

  logger1.log('First log message');
  logger2.log('Second log message');

  console.log('Same instance? ', logger1 === logger2);
  console.log('Logs: ', logger1.getLogs());
}

main();
