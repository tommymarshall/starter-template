var gulp         = require('gulp');
var config       = require('../config').modernizr;

gulp.task('modernizr', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
