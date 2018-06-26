var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

// Gulp Sass task.
gulp.task('sass', function() {
  gulp.src('./sass/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(postcss([
      autoprefixer({
        browsers: ['> 5%']
      }),
    ]))
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./css'));
  gulp.src('./sass/bootstrap/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(postcss([
      autoprefixer({
        browsers: ['> 5%']
      }),
    ]))
    .pipe(sourcemaps.write())
    .pipe(rename('bootstrap.css'))
    .pipe(gulp.dest('./css'));
});

// Create Gulp default task.
// Having watch within the task ensures that 'sass' has already ran before watching.
gulp.task('default', ['sass'], function () {
  gulp.watch('./sass/{,**/}*.{scss,sass}', ['sass'])
});
