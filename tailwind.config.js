/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'my-image': "url('/assets/bg.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}