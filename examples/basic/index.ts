import { Construct } from 'constructs';
import { CLI, Command, Option } from 'constructable';

class CompileCommand extends Command {
  constructor(scope: Construct, id: string) {
    new Option(this, '--name');
  }
}

const cli = new CLI();

new CompileCommand(app);

cli.parse();