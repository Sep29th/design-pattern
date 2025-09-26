import inquirer from 'inquirer';
import { exec } from 'child_process';
import path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

const patternGroups: Record<string, Record<string, string>> = {
  Creational: {
    'Abstract Factory': 'src/creational/abstract-factory/example.ts',
    Builder: 'src/creational/builder/example.ts',
    'Factory Method': 'src/creational/factory-method/example.ts',
    Prototype: 'src/creational/prototype/example.ts',
    Singleton: 'src/creational/singleton/example.ts',
  },
  Structural: {
    Adapter: 'src/structural/adapter/example.ts',
    Bridge: 'src/structural/bridge/example.ts',
    Composite: 'src/structural/composite/example.ts',
    Decorator: 'src/structural/decorator/example.ts',
    Facade: 'src/structural/facade/example.ts',
    Flyweight: 'src/structural/flyweight/example.ts',
    Proxy: 'src/structural/proxy/example.ts',
  },
  Behavioral: {
    'Chain of Responsibility':
      'src/behavioral/chain-of-responsibility/example.ts',
    Command: 'src/behavioral/command/example.ts',
    Interpreter: 'src/behavioral/interpreter/example.ts',
    Iterator: 'src/behavioral/iterator/example.ts',
    Mediator: 'src/behavioral/mediator/example.ts',
    Memento: 'src/behavioral/memento/example.ts',
    Observer: 'src/behavioral/observer/example.ts',
    State: 'src/behavioral/state/example.ts',
    Strategy: 'src/behavioral/strategy/example.ts',
    'Template Method': 'src/behavioral/template-method/example.ts',
    Visitor: 'src/behavioral/visitor/example.ts',
  },
};

async function main() {
  while (true) {
    try {
      const { group } = await inquirer.prompt([
        {
          type: 'list',
          name: 'group',
          message: 'Chọn nhóm design pattern (Ctrl+C để thoát):',
          choices: Object.keys(patternGroups),
        },
      ]);

      const { pattern } = await inquirer.prompt([
        {
          type: 'list',
          name: 'pattern',
          message: `Chọn pattern trong nhóm ${group} (Ctrl+C để thoát):`,
          choices: Object.keys(patternGroups[group]),
        },
      ]);

      const filePath = path.resolve(patternGroups[group][pattern]);
      console.log(`\n👉 Running: ${group} / ${pattern}\n`);

      try {
        const { stdout, stderr } = await execAsync(`npx ts-node ${filePath}`);
        if (stderr) console.error(`⚠️ ${stderr}`);
        console.log(stdout);
      } catch (err: any) {
        console.error(`❌ Error: ${err.message}`);
      }

      console.log('\n----------------------------------------\n');
    } catch (err: any) {
      if (err.name === 'ExitPromptError') {
        console.log('\n👋 Thoát CLI. Hẹn gặp lại!\n');
        process.exit(1); // Thoát ngay lập tức
      }
      throw err;
    }
  }
}

void main();
