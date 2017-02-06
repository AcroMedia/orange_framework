var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

// Gulp Sass Task
gulp.task('sass', function() {
  gulp.src('./sass/custom/**/*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./css'));
})

// Create Gulp Default Task
// Having watch within the task ensures that 'sass' has already ran before watching
gulp.task('default', ['sass'], function () {
  gulp.watch('./sass/**/*.{scss,sass}', ['sass'])
});
