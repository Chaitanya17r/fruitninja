// Asset URLs for the game
export const ASSETS = {
  images: {
    // Fruit images from a reliable source
    apple: 'https://assets.codepen.io/2104921/fruit-ninja-apple.png',
    banana: 'https://assets.codepen.io/2104921/fruit-ninja-banana.png',
    watermelon: 'https://assets.codepen.io/2104921/fruit-ninja-watermelon.png',
    bomb: 'https://assets.codepen.io/2104921/fruit-ninja-bomb.png',
    heart: 'https://assets.codepen.io/2104921/fruit-ninja-heart.png'
  },
  audio: {
    // Audio files from a reliable source
    slice: 'https://assets.codepen.io/2104921/fruit-ninja-slice.mp3',
    explosion: 'https://assets.codepen.io/2104921/fruit-ninja-explosion.mp3',
    bgMusic: 'https://assets.codepen.io/2104921/fruit-ninja-background.mp3'
  }
} as const;

// Fallback assets in case the primary ones fail to load
export const FALLBACK_ASSETS = {
  images: {
    apple: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAApElEQVR42mNgGAWjYBSMgmEJ/v//z0BLS/8zMDAw0NwBtLb8P80doLXlIAfo6en9p6UDaG05yAEPHjz4T0sH0NpykANoHQW0thwUBbS2HOQAWlsOcgCtLQc5gNaWgxxAa8tBDqC15SBLaG05yAG0thzkAFpbDnIArS0HOYDWloMcQGvLQQ6gteUgB9DacpADaG05yAG0thzkAFpbPgpGwSigKQAAE0M8FLtx134AAAAASUVORK5CYII=',
    banana: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAApElEQVR42mNgGAWjYBSMgmEJ/v//z0BLS/8zMDAw0NwBtLb8P80doLXlIAfo6en9p6UDaG05yAEPHjz4T0sH0NpykANoHQW0thwUBbS2HOQAWlsOcgCtLQc5gNaWgxxAa8tBDqC15SBLaG05yAG0thzkAFpbDnIArS0HOYDWloMcQGvLQQ6gteUgB9DacpADaG05yAG0thzkAFpbPgpGwSigKQAAE0M8FLtx134AAAAASUVORK5CYII=',
    watermelon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAApElEQVR42mNgGAWjYBSMgmEJ/v//z0BLS/8zMDAw0NwBtLb8P80doLXlIAfo6en9p6UDaG05yAEPHjz4T0sH0NpykANoHQW0thwUBbS2HOQAWlsOcgCtLQc5gNaWgxxAa8tBDqC15SBLaG05yAG0thzkAFpbDnIArS0HOYDWloMcQGvLQQ6gteUgB9DacpADaG05yAG0thzkAFpbPgpGwSigKQAAE0M8FLtx134AAAAASUVORK5CYII=',
    bomb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAApElEQVR42mNgGAWjYBSMgmEJ/v//z0BLS/8zMDAw0NwBtLb8P80doLXlIAfo6en9p6UDaG05yAEPHjz4T0sH0NpykANoHQW0thwUBbS2HOQAWlsOcgCtLQc5gNaWgxxAa8tBDqC15SBLaG05yAG0thzkAFpbDnIArS0HOYDWloMcQGvLQQ6gteUgB9DacpADaG05yAG0thzkAFpbPgpGwSigKQAAE0M8FLtx134AAAAASUVORK5CYII=',
    heart: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAApElEQVR42mNgGAWjYBSMgmEJ/v//z0BLS/8zMDAw0NwBtLb8P80doLXlIAfo6en9p6UDaG05yAEPHjz4T0sH0NpykANoHQW0thwUBbS2HOQAWlsOcgCtLQc5gNaWgxxAa8tBDqC15SBLaG05yAG0thzkAFpbDnIArS0HOYDWloMcQGvLQQ6gteUgB9DacpADaG05yAG0thzkAFpbPgpGwSigKQAAE0M8FLtx134AAAAASUVORK5CYII='
  }
} as const;