export abstract class BaseError {
  constructor(readonly message?: string) {}

  toString() {
    return `${this.constructor.name}${
      this.message === undefined ? '' : `: ${this.message}`
    }`;
  }
}
