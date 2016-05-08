// Load plugins
var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    concat = require('gulp-concat');

// Watch
gulp.task('default', function() {
  // Watch .less files
  gulp.watch('lib/less/*.less', [ 'less' ]);
});

// Less
gulp.task('less', function() {
  return gulp.src('lib/less/style.less')
  .pipe(concat('style.css'))
  .pipe(gulp.dest('lib/css/'))
});
