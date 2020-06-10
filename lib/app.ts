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
}
