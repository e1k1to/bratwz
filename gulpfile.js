const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')(require('sass'))

function compilarSass(){
  return gulp.src('./src/styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function copiarJS() {
  return gulp.src('./src/scripts/*.js')
  .pipe(gulp.dest('./build/scripts'))
}

exports.default = gulp.parallel(compilarSass, copiarJS);

exports.watch = function() {
  gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compilarSass));
  gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(copiarJS))
}