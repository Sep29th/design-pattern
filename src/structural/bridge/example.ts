// src/structural/bridge/example.ts

// Implementor
interface Device {
  enable(): void;
  disable(): void;
  setVolume(volume: number): void;
}

// Concrete Implementor 1
class TV implements Device {
  enable(): void {
    console.log('TV is now ON');
  }
  disable(): void {
    console.log('TV is now OFF');
  }
  setVolume(volume: number): void {
    console.log(`TV volume set to ${volume}`);
  }
}

// Concrete Implementor 2
class Radio implements Device {
  enable(): void {
    console.log('Radio is now ON');
  }
  disable(): void {
    console.log('Radio is now OFF');
  }
  setVolume(volume: number): void {
    console.log(`Radio volume set to ${volume}`);
  }
}

// Abstraction
class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    this.device.enable();
  }

  volumeDown(): void {
    this.device.setVolume(10);
  }

  volumeUp(): void {
    this.device.setVolume(100);
  }
}

// Refined Abstraction
class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.setVolume(0);
    console.log('Device muted');
  }
}

// Client
function main() {
  const tv = new TV();
  const remote = new RemoteControl(tv);
  remote.togglePower();
  remote.volumeUp();

  console.log('-----');

  const radio = new Radio();
  const advancedRemote = new AdvancedRemoteControl(radio);
  advancedRemote.togglePower();
  advancedRemote.mute();
}

main();
