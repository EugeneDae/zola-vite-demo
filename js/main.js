// Vite docs say that this polyfill should be included,
// but I'm not sure about its purpose
// import 'vite/modulepreload-polyfill'

// Remove this import if you want Zola to process SASS
// and change compile_sass to true in config.toml
import '../sass/main.scss';

console.log('Hello world!');
