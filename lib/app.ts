import { Construct, IConstruct, Node } from 'constructs';

export interface AppOptions {}

export class App extends Construct {
  constructor(options: AppOptions = {}) {
    super(undefined as any, '');
  }
  
  public synth(): void {
  
  }
  
  private static of(c: IConstruct): App {
    const scope = Node.of(c).scope;

    if (!scope) {
      // the app is the only construct without a scope.
      return c as App;
    }

    return App.of(scope);
  }
  
  function validate(app: App) {

    // Note this is a copy-paste of https://github.com/aws/constructs/blob/master/lib/construct.ts#L438.
    const errors = Node.of(app).validate();
    if (errors.length > 0) {
      const errorList = errors.map(e => `[${Node.of(e.source).path}] ${e.message}`).join('\n  ');
      throw new Error(`Validation failed with the following errors:\n  ${errorList}`);
    }
  }
}
