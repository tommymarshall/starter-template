var dest = './build';
var src  = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [
      dest + '/**',
      '!' + dest + '/**.map'
    ]
  },
  fonts: {
    src: src + '/fonts/**/*',
    dest: dest + '/assets/fonts/'
  },
  sass: {
    src: src + '/sass/**/*.scss',
    dest: dest + '/assets/css/'
  },
  images: {
    src: [
      src + '/images/**/*'
    ],
    dest: dest + '/assets/images'
  },
  markup: {
    src: src + '/htdocs/*.html',
    watch: src + '/htdocs/**',
    dest: dest,
    swig_options: {
      defaults: {
        cache: false
      },
      load_json: true,
      json_path: src + '/data'
    }
  },
  browserify: {
    debug: true,
    extensions: ['.jsx'],
    bundleConfigs: [{
      entries: src + '/javascript/app.jsx',
      dest: dest + '/assets/js/',
      outputName: 'app.js'
    }]
  },
  modernizr: {
    src: src + '/javascript/vendor/modernizr.min.js',
    dest: dest + '/assets/js/'
  }
};
