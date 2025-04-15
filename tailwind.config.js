/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  roboto: ['RobotoMono-Regular', 'monospace'],
  'roboto-regular': ['RobotoMono-Regular', 'monospace'], // 👈 this line makes font-roboto-regular work
  'roboto-light': ['RobotoMono-Light', 'monospace'],
  neuehaas: ['NeueHaas', 'sans-serif'],
  gandurlight: ['GandurLight', 'sans-serif'],
  dinosaur: ['DinosaurThin', 'sans-serif'],
  inktrap: ['InktrapLight', 'sans-serif'],
}

    },
  },
  plugins: [],
};
