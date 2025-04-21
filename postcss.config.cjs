// postcss.config.cjs
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss(),     // ← 関数呼び出し形式！
    autoprefixer       // ← こっちも関数じゃなくてOK
  ]
};
