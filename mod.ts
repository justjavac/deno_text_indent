/**
 * Sets the length of empty space (indentation) that is put before lines of text in a block.
 *
 * @param str
 * @param count default `1` 
 */
export default function indent(str: string, count = 1): string {
  return str.replace(/^(?!\s*$)/gm, " ".repeat(count));
}
