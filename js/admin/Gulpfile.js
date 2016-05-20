var flarum = require('flarum-gulp');

flarum({
  modules: {
    'Davis/CustomFooter': [
      'src/**/*.js'
    ]
  }
});