import { Construct, IConstruct, Node } from 'constructs';

export interface CLIOptions {}

export class CLI extends Construct {
  constructor(options: CLIOptions = {}) {
    super(undefined as any, '');
  }
}
