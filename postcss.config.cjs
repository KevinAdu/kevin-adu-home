const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const config = {
  plugins: [
        //But others, like autoprefixer, need to run after,
    autoprefixer,
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),

  ],
};

module.exports = config;
