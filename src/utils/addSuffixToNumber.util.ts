export default function addSuffixToNumber(
  number: number,
  fixed: number = 3,
): string {
  const suffixes = ['', 'K', 'M', 'B', 'T', 'Q', 'S', 'O', 'N', 'D', 'U', 'D']
  let suffixIndex = 0

  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000
    suffixIndex++
  }

  if (number % 1 !== 0) {
    return `${number.toFixed(fixed)}${suffixes[suffixIndex]}`
  } else {
    return `${number.toFixed(0)}${suffixes[suffixIndex]}`
  }
}
