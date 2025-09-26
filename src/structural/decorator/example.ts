// src/structural/decorator/example.ts

// Component
interface Notifier {
  send(message: string): void;
}

// Concrete Component
class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending EMAIL: ${message}`);
  }
}

// Base Decorator
class NotifierDecorator implements Notifier {
  protected wrappee: Notifier;

  constructor(notifier: Notifier) {
    this.wrappee = notifier;
  }

  send(message: string): void {
    this.wrappee.send(message);
  }
}

// Concrete Decorators
class SMSNotifier extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`Sending SMS: ${message}`);
  }
}

class SlackNotifier extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`Sending Slack: ${message}`);
  }
}

// Client
function main() {
  const email = new EmailNotifier();
  const sms = new SMSNotifier(email);
  const slack = new SlackNotifier(sms);

  slack.send('Hello, world!');
}

main();
