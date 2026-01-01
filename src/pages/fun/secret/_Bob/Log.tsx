// BobLog.tsx

/**Abstract Log for BobBattle */
export abstract class Log {
  constructor() {}

  abstract getLog(): Array<string>

  abstract add(log: string): Array<string>
}

class ArrayLog extends Log {
  private log: Array<string>

  constructor({ log }: { log?: Array<string> }) {
    super()
    this.log = log ?? new Array<string>()
  }

  getLog(): Array<string> {
    return this.log
  }

  add(log: string): Array<string> {
    this.log.push(log)
    return this.log
  }
}

interface AbstractLogFactory {
  createLog({ type }: { type: string }): Log
}

export class LogFactory implements AbstractLogFactory {
  createLog({ type }: { type: string }): Log {
    switch (type) {
      default:
        return new ArrayLog({})
    }
  }
}
