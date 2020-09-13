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
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
