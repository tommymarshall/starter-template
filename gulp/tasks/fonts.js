var changed  = require('gulp-changed');
var gulp     = require('gulp');
var config   = require('../config').fonts;

gulp.task('fonts', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest));
});
