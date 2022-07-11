export default function cx(...input): string {
  return input.filter(Boolean).join(" ")
}