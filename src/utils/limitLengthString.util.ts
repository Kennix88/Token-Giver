export default function limitLengthString(string: string, limit: number = 20) {
  return string.length > limit ? `${string.slice(0, limit)}...` : string
}
