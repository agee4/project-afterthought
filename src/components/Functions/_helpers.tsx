/**Returns a pseudorandom integer between 0 and its numeric argument.
 * @param n A numeric expression.
 */
export const randomRange = (n: number) => Math.floor(Math.random() * n)

/**Returns a pseudorandom value in its array argument.
 * @param array An array.
 */
export const randomIndex = (array: Array<any>) =>
  array[randomRange(array.length)]

export class DefaultMap<K, V> extends Map<K, V> {
  private defaultValue: V

  constructor(defaultValue: V, entries?: readonly (readonly [K, V])[] | null) {
    super(entries)
    this.defaultValue = defaultValue
  }

  get(key: K): V {
    if (this.has(key)) {
      return super.get(key)! // Use ! to assert non-null
    }
    return this.defaultValue
  }
}

export type actiontype<T> = T | ((prev: T) => T)
