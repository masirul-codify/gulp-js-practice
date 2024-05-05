const gulp = require('gulp');
const { src, dest, task } = gulp;
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
// const babel = require('gulp-babel');
// const imagemin  = require('gulp-imagemin');

task('sass', () => {
  return src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/assets/css/'))
    .pipe(browserSync.stream());
});

// task('image_minify', () => {
//   return src('./src/asets/images/**/*') 
//     .pipe(imagemin([
//       gifsicle({interlaced: true}),
//       mozjpeg({quality: 75, progressive: true}),
//       optipng({optimizationLevel: 5}),
//       svgo({
//         plugins: [
//           {
//             name: 'removeViewBox',
//             active: true
//           },
//           {
//             name: 'cleanupIDs',
//             active: false
//           }
//         ]
//       })
//     ]))
//     .pipe(dest('./dist/assets/images/'))
//     .pipe(browserSync.stream());
// });

task('assets', () => {
  return src('./src/assets/**/*')
    .pipe(dest('./dist/assets'))
    .pipe(browserSync.stream()); 
});

task('js', () => {
  return src('./src/assets/js/**/*')
  //   .pipe(babel({
  //     presets: ['@babel/env']
  // }))
    .pipe(dest('./dist/assets/js'))
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

  
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/*.html', gulp.series('html'));
  gulp.watch('./src/assets/js/**/*', gulp.series('js'));
  gulp.watch('./src/assets/**/*', gulp.series('assets'));
});

task('build', gulp.series('sass', 'html',  'js', 'assets', 'server'));

gulp.task('default', gulp.series('build'));


// gulp.task('watch', gulp.series('server', function watchTask() {
//   gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
//   gulp.watch('./src/js/**/*.js', gulp.series('js'));
// }));

// function defaultTask() {
//   return gulp.series('sass', 'js', 'html', 'server', 'watch')();
// }

// exports.default = defaultTask;







/*eslint-disable*/

//lossy compression
// https://gist.github.com/LoyEgor/e9dba0725b3ddbb8d1a68c91ca5452b5
