module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        draw: {
          to: {
            'stroke-dashoffset': 0,
          },
        },
        scale: {
          from: {
            transform: 'scale(0)',
          },
          to: {
            transform: 'scale(.99)',
          },
        },
      },
      animation: {
        draw: 'draw .2s ease-in both',
        'draw-daley-2ms': 'draw .2s .2s ease-in both',
        'draw-daley-4ms': 'draw .2s .4s ease-in both',
        scale: 'scale .8s ease-in both',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
