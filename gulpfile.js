const gulp = require('gulp');
const { src, dest, task } = gulp;
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

task('sass', () => {
  return src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/css/'))
    .pipe(browserSync.stream());
});

task('js', () => {
  return src('./src/js/**/*.js')
    .pipe(dest('./dist/js'))
    .pipe(browserSync.stream()); // Reload browser after JS changes
});

task('html', () => {
  return src('./src/*.html')
    .pipe(dest('./dist'))
    .pipe(browserSync.stream());
});

task('server', () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  // Watch HTML and Sass files for changes
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/*.html', gulp.series('html'));
  gulp.watch('./src/js/**/*.js', gulp.series('js'));
});

task('build', gulp.series('sass', 'js', 'html', 'server'));

gulp.task('default', gulp.series('build'));


// gulp.task('watch', gulp.series('server', function watchTask() {
//   gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
//   gulp.watch('./src/js/**/*.js', gulp.series('js'));
// }));

// function defaultTask() {
//   return gulp.series('sass', 'js', 'html', 'server', 'watch')();
// }

// exports.default = defaultTask;

