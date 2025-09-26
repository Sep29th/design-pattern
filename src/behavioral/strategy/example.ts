// src/behavioral/strategy/example.ts

// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount}$ using Credit Card`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount}$ using PayPal`);
  }
}

class BitcoinPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount}$ using Bitcoin`);
  }
}

// Context
class ShoppingCart {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  checkout(strategy: PaymentStrategy): void {
    strategy.pay(this.amount);
  }
}

// Client
function main() {
  const cart = new ShoppingCart(100);

  cart.checkout(new CreditCardPayment());
  cart.checkout(new PayPalPayment());
  cart.checkout(new BitcoinPayment());
}

main();
