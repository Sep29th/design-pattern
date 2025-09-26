import inquirer from 'inquirer';
import { exec } from 'child_process';
import path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

const patternGroups: Record<string, Record<string, string>> = {
  Creational: {
    'Abstract Factory': 'src/creational/abstract-factory/nest/nestjs-example.ts',
    Builder: 'src/creational/builder/nest/nestjs-example.ts',
    'Factory Method': 'src/creational/factory-method/nest/nestjs-example.ts',
    Prototype: 'src/creational/prototype/nest/nestjs-example.ts',
    Singleton: 'src/creational/singleton/nest/nestjs-example.ts',
  },
  Structural: {
    Adapter: 'src/structural/adapter/nest/nestjs-example.ts',
    Bridge: 'src/structural/bridge/nest/nestjs-example.ts',
    Composite: 'src/structural/composite/nest/nestjs-example.ts',
    Decorator: 'src/structural/decorator/nest/nestjs-example.ts',
    Facade: 'src/structural/facade/nest/nestjs-example.ts',
    Flyweight: 'src/structural/flyweight/nest/nestjs-example.ts',
    Proxy: 'src/structural/proxy/nest/nestjs-example.ts',
  },
  Behavioral: {
    'Chain of Responsibility':
      'src/behavioral/chain-of-responsibility/nest/nestjs-example.ts',
    Command: 'src/behavioral/command/nest/nestjs-example.ts',
    Interpreter: 'src/behavioral/interpreter/nest/nestjs-example.ts',
    Iterator: 'src/behavioral/iterator/nest/nestjs-example.ts',
    Mediator: 'src/behavioral/mediator/nest/nestjs-example.ts',
    Memento: 'src/behavioral/memento/nest/nestjs-example.ts',
    Observer: 'src/behavioral/observer/nest/nestjs-example.ts',
    State: 'src/behavioral/state/nest/nestjs-example.ts',
    Strategy: 'src/behavioral/strategy/nest/nestjs-example.ts',
    'Template Method': 'src/behavioral/template-method/nest/nestjs-example.ts',
    Visitor: 'src/behavioral/visitor/nest/nestjs-example.ts',
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
