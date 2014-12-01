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
      src + '/images/**/*',
      '!' + src + '/images/icons/**'
    ],
    dest: dest + '/assets/images'
  },
  sprite: {
    src: src + '/images/icons/*.svg',
    dest: src + '/sprite',
    svg_options: {
      mode: 'symbols'
    }
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
      entries: src + '/javascript/app.js',
      dest: dest + '/assets/js/',
      outputName: 'app.js'
    }]
  },
  modernizr: {
    src: src + '/javascript/vendor/modernizr.min.js',
    dest: dest + '/assets/js/'
  }
};
