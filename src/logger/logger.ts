export abstract class Logger {
  constructor(readonly enableLog?: boolean) {}

  log(type: 'info' | 'warn' | 'error', ...params: unknown[]) {
    if (!this.enableLog) return;

    console[type](
      `[${new Date().toISOString()}][${this.constructor.name}]`,
      ...params
    );
  }
}
