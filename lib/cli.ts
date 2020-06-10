import { Construct, IConstruct, Node } from 'constructs';

export interface CLIOptions {}

export class CLI extends Construct {
  constructor(options: CLIOptions = {}) {
    super(undefined as any, '');
  }
  
  public parse(): void {
    validate(this);
  }
}

function validate(app: App) {

    // Note this is a copy-paste of https://github.com/aws/constructs/blob/master/lib/construct.ts#L438.
    const errors = Node.of(app).validate();
    if (errors.length > 0) {
      const errorList = errors.map(e => `[${Node.of(e.source).path}] ${e.message}`).join('\n  ');
      throw new Error(`Validation failed with the following errors:\n  ${errorList}`);
    }
}