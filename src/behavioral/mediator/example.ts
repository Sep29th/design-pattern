// src/behavioral/mediator/example.ts

// Mediator interface
interface ChatMediator {
  sendMessage(message: string, sender: User): void;
  addUser(user: User): void;
}

// Concrete Mediator
class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    for (const user of this.users) {
      if (user !== sender) {
        user.receive(message, sender);
      }
    }
  }
}

// Colleague
abstract class User {
  constructor(
    private readonly name: string,
    protected mediator: ChatMediator,
  ) {}

  getName(): string {
    return this.name;
  }

  abstract send(message: string): void;
  abstract receive(message: string, sender: User): void;
}

// Concrete Colleague
class ChatUser extends User {
  send(message: string): void {
    console.log(`${this.getName()} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string, sender: User): void {
    console.log(
      `${this.getName()} received from ${sender.getName()}: ${message}`,
    );
  }
}

// Client
function main() {
  const chatRoom = new ChatRoom();

  const user1 = new ChatUser('Alice', chatRoom);
  const user2 = new ChatUser('Bob', chatRoom);
  const user3 = new ChatUser('Charlie', chatRoom);

  chatRoom.addUser(user1);
  chatRoom.addUser(user2);
  chatRoom.addUser(user3);

  user1.send('Hello everyone!');
  user2.send('Hi Alice!');
}

main();
