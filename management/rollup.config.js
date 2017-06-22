import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/site/site.js',
  format: 'cjs',
  plugins: [
    commonjs(),
    resolve()
  ],
  dest: 'src/public/js/dist.js' // equivalent to --output
};
