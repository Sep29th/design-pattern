// src/behavioral/interpreter/example.ts

// Context
class Context {
  constructor(public text: string) {}
}

// Abstract Expression
interface Expression {
  interpret(context: Context): boolean;
}

// Terminal Expression
class LiteralExpression implements Expression {
  constructor(private literal: string) {}

  interpret(context: Context): boolean {
    return context.text.includes(this.literal);
  }
}

// Non-terminal Expressions
class AndExpression implements Expression {
  constructor(
    private expr1: Expression,
    private expr2: Expression,
  ) {}

  interpret(context: Context): boolean {
    return this.expr1.interpret(context) && this.expr2.interpret(context);
  }
}

class OrExpression implements Expression {
  constructor(
    private expr1: Expression,
    private expr2: Expression,
  ) {}

  interpret(context: Context): boolean {
    return this.expr1.interpret(context) || this.expr2.interpret(context);
  }
}

// Client
function main() {
  const context1 = new Context('apple orange');
  const context2 = new Context('apple banana');

  const apple = new LiteralExpression('apple');
  const orange = new LiteralExpression('orange');
  const banana = new LiteralExpression('banana');

  const appleAndOrange = new AndExpression(apple, orange);
  const appleOrBanana = new OrExpression(apple, banana);

  console.log(
    `context1 has "apple" AND "orange"? ${appleAndOrange.interpret(context1)}`,
  );
  console.log(
    `context2 has "apple" AND "orange"? ${appleAndOrange.interpret(context2)}`,
  );

  console.log(
    `context1 has "apple" OR "banana"? ${appleOrBanana.interpret(context1)}`,
  );
  console.log(
    `context2 has "apple" OR "banana"? ${appleOrBanana.interpret(context2)}`,
  );
}

main();
