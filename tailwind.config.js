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
    extend: {
      keyframes: {
        blink: {
          'from, to': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: '1000ms blink step-end infinite',
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
