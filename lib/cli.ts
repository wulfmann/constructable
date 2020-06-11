import { Construct, Node } from 'constructs';

export class CLI extends Construct {
  constructor() {
    super(undefined as any, '');
  }
  
  public synth(): void {
    Node.of(this).synthesize();
  }
  
  public parse(): void {
    validate(this);
  }
}

function validate(cli: CLI) {

    // Note this is a copy-paste of https://github.com/aws/constructs/blob/master/lib/construct.ts#L438.
    const errors = Node.of(cli).validate();
    if (errors.length > 0) {
      const errorList = errors.map(e => `[${Node.of(e.source).path}] ${e.message}`).join('\n  ');
      throw new Error(`Validation failed with the following errors:\n  ${errorList}`);
    }
}