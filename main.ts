export interface ExampleConstructor {
  /**
   * Example constructor
   * @param {number} a - The first number
   * @returns {object} - The example object
   * @example
   * ```ts
   * const example = new ExampleConstructor(1);
   * ```
   */
  new (a: number): object;
}
