export const getLevel = (score: number, max: number) =>
  levels.find(l => score >= Math.round(l.scale * max))
const levels = [
  { index: 0, scale: 0, name: 'Beginner' },
  { index: 1, scale: 0.02, name: 'Good Start' },
  { index: 2, scale: 0.05, name: 'Moving Up' },
  { index: 3, scale: 0.08, name: 'Good' },
  { index: 4, scale: 0.15, name: 'Solid' },
  { index: 5, scale: 0.25, name: 'Nice' },
  { index: 6, scale: 0.4, name: 'Great' },
  { index: 7, scale: 0.5, name: 'Amazing' },
  { index: 8, scale: 0.7, name: 'Genius' },
]
