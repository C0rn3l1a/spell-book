const dynamic_classes = [
  // WIDTHS
  'w-1/2',
  'w-1/3',
  'w-2/3',
  'w-1/4',
  'w-2/4',
  'w-3/4',
  'w-1/5',
  'w-2/5',
  'w-3/5',
  'w-4/5',
  'w-1/6',
  'w-2/6',
  'w-3/6',
  'w-4/6',
  'w-5/6',
  'w-1/12',
  'w-2/12',
  'w-3/12',
  'w-4/12',
  'w-5/12',
  'w-6/12',
  'w-7/12',
  'w-8/12',
  'w-9/12',
  'w-10/12',
  'w-11/12',
  'w-full',
];

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    // These options are passed through directly to PurgeCSS
    options: {
      // List your classes here, or you can even use RegExp
      safelist: [...dynamic_classes],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
    mode: 'jit',
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
