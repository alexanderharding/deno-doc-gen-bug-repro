export interface ExampleConstructor {
  /**
   * Example constructor
   * @param a The first number
   * @returns The example object
   * @example
   * ```ts
   * const example = new Example(1);
   * ```
   */
  new (a: number): Example;
}

export interface Example {
  a: number;
}

export const Example: ExampleConstructor = class {
  public a: number;
  constructor(a: number) {
    this.a = a;
  }
};

new Example(1);