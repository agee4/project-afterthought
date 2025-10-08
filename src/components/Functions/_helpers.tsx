/**Returns a pseudorandom integer between 0 and its numeric argument.
 * @param n A numeric expression.
*/
export const randomRange = (n: number) => Math.floor(Math.random() * n)

/**Returns a pseudorandom value in its array argument.
 * @param array An array.
*/
export const randomIndex = (array: Array<any>) =>
  array[randomRange(array.length)]
