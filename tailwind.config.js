const { ScriptElementKindModifier } = require('typescript')

module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      mono: ['IBM Plex Mono', 'monospace'],
      sans: ['IBM Plex Sans', 'sans-serif'],
      condensed: ['IBM Plex Sans Condensed', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
    },
    fill: theme => ({
      other: theme('colors.gray.300'),
      highlight: theme('colors.yellow.500'),
    }),
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
