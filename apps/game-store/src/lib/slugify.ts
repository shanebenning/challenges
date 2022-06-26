/**
 * 
 * @param input string 
 * @param separator string
 * @param delimiter string
 * @returns string
 */

export default function slugify(
  input: string, 
  separator: string = " ", 
  delimiter: string = "-"
) {
  try {
    return input.toLocaleLowerCase().split(separator).join(delimiter)
  } catch (err) {
    throw new Error(`Cannot parse input to slugify: \n`, err)
  } 
}