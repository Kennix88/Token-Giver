export default function getRandomEmojiAvatar(): string {
  const emojis = [
    '😊',
    '🤖',
    '🤔',
    '😅',
    '😼',
    '🤡',
    '👾',
    '👽',
    '👻',
    '👑',
    '😈',
    '🥺',
    '😏',
    '🤓',
    '😎',
    '🤪',
    '🥰',
    '🙃',
    '😇',
    '😁',
  ]

  const randomIndex = Math.floor(Math.random() * emojis.length)
  return emojis[randomIndex]
}
