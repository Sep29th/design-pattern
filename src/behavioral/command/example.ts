// src/behavioral/command/example.ts

// Command interface
interface Command {
  execute(): void;
}

// Receiver
class Light {
  on(): void {
    console.log('Light is ON');
  }
  off(): void {
    console.log('Light is OFF');
  }
}

// Concrete Commands
class LightOnCommand implements Command {
  constructor(private light: Light) {}
  execute(): void {
    this.light.on();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}
  execute(): void {
    this.light.off();
  }
}

// Invoker
class RemoteControl {
  private command: Command | null = null;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    if (this.command) {
      this.command.execute();
    } else {
      console.log('No command set');
    }
  }
}

// Client
function main() {
  const light = new Light();

  const lightOn = new LightOnCommand(light);
  const lightOff = new LightOffCommand(light);

  const remote = new RemoteControl();

  remote.setCommand(lightOn);
  remote.pressButton();

  remote.setCommand(lightOff);
  remote.pressButton();
}

main();
