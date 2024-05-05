
// *************************************
//
//   File Author: Themeholy
//   Author URL: https://themeholy.com
//   PHP Idea & Helping: Themeholy
//
// *************************************

// *************************************
//
//   Gulpfile Index
//
// *************************************
// 01. Get Started
// 02. Available tasks
// 03. Node.js Packages / Dependencies
// 04. Select Directory & File Names
// 05. Task For Gulp Test
// 06. PHP to HTML Convert Tasks 
// 07. Root File Move Task
// 08. All Js Tasks
// 09. All Image Tasks
// 10. Fonts Tasks
// 11. All CSS Tasks
// 12. All SASS Tasks
// 13. Creating Server Tasks
// 14. Clean Tasks
// 15. W3C Validator
// 16. Merge All Task
// *************************************
//
// *************************************
//
// 01. Get Started
//
// *************************************
// 1. Install Node Js => https://nodejs.org/en/download
// 2. Install PHP & set path on your computer => https://www.php.net/downloads
      // Download php composer and set the path php/php.exe
// 3. Install Graphics Magick => http://www.graphicsmagick.org/download.html
// 4. Install Image Magic => https://imagemagick.org/script/download.php
// 5. Open cmd in Administrator and type the command 
// 6. for Gulp command line utility => (npm install --global gulp-cli)
// 7. for All Packages => (npm install)
//    or install individually like this => (npm install --save-dev package_name)
//    To see which Packages in used visit below the section of == Node.js Packages / Dependencies
// 8. Time to test with => gulp test
//    If (gulp test) show (All Packages Ready) now you are ready to use all tasks.
// *************************************
// Note: No.1 to 5 plugins need to install only for once. 
// Note: If you don't want to use image blur features you can skip Image Magic & Graphics Magick Plugin
// *************************************

// *************************************
//
//  02. Available tasks
//
// *************************************
//   `gulp`                           :   Default Development Task
//   `gulp test`                      :   Testing gulp is it ready to use.
//   `gulp html:compile`              :   Compile PHP to HTML 
//   `gulp html:minify`               :   Compile PHP to HTML and Minify
//   `gulp html:compile:rtl`          :   Compile PHP to HTML 
//   `gulp landingPage:html:compile`  :   Laning Page PHP to HTML Compile
//   `gulp html:minify:rtl`           :   Compile PHP to HTML and Minify
//   `gulp root:file`                 :   Move the default root files to dest root directory
//   `gulp js`                        :   Default js file Move to dest
//   `gulp js:plugins`                :   Js Plugins minify and move to dest
//   `gulp js:concat`                 :   Js Plugins concate, minify and move to dest
//   `gulp js:vendor`                 :   Js Vendor file move to dest
//   `gulp img`                       :   Move All Images to dest
//   `gulp img:rtl`                   :   Make RTL Ready than Move All Images to dest
//   `gulp img:minify`                :   Minify And reduce Size of images blur for Load faster
//   `gulp img:minify:rtl'            :   Minify And reduce Size of images blur for Load faster than Make RTL Ready
//   `gulp img:blur`                  :   Make images blur for client vesion and move to dest
//   `gulp img:default`               :   Default images without blur move to dest
//   `gulp fonts`                     :   Move the fonts to dest
//   `gulp css`                       :   All CSS & CSS Plugin File move to dest
//   `gulp css:minify`                :   CSS file minify and move to dest
//   `gulp css:concat`                :   CSS Plugin concat and move to dest
//   `gulp sass`                      :   SASS File Move to dest folder
//   `gulp sass:compile`              :   SASS Compile to CSS
//   `gulp sass:compressed`           :   SASS Compile to CSS and Compressed 
//   `gulp landingPage:sass:compile`  :   Landing Page Sass compile
//   `gulp clean`                     :   Delete dest Folder
//   `gulp w3c`                       :   W3C HTML Package Validation     
//   `gulp dev:view`                  :   Development Version HTML Package Preview
//   `gulp server:view`               :   Live Server HTML Package Preview
//   `gulp download:view`             :   Downlaod Version HTML Package Preview
//   `gulp landingPage:view`          :   Create Server and watch landing page
//   `gulp wp:view`                   :   Wordpress Version HTML Package Preview
//   `gulp rtl:dev:view`              :   RTL Development Version HTML Package Preview
//   `gulp rtl:server:view`           :   RTL Live Server HTML Package Preview
//   `gulp rtl:download:view`         :   RTL Downlaod Version HTML Package Preview
//   `gulp rtl:wp:view`               :   RTL Wordpress Version HTML Package Preview
//   `gulp dev-version`               :   Development Version HTML Package
//   `gulp server-version`            :   Live Server HTML Package
//   `gulp download-version`          :   Downlaod Version HTML Package
//   `gulp wp-version`                :   Wordpress Version HTML Package
//   `gulp rtl-dev-version`           :   RTL Development Version HTML Package
//   `gulp rtl-server-version`        :   RTL Live Server HTML Package
//   `gulp rtl-download-version`      :   RTL Downlaod Version HTML Package
//   `gulp rtl-wp-version`            :   RTL Wordpress Version HTML Package
// *************************************


// *************************************
//
//   03. Node.js Packages / Dependencies
//
// *************************************
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const php2html = require("gulp-php2html");
const htmlbeautify = require('gulp-html-beautify');
const browserSync = require('browser-sync');
const clean = require('gulp-clean');
const htmlValidator = require('gulp-w3c-html-validator');
const gm = require('gulp-gm');
const htmlmin = require('gulp-htmlmin');
const removeHtmlComments = require('gulp-remove-html-comments');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const imageminPngQuant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const inject = require('gulp-inject-string');
const uglify = require('gulp-uglify-es').default;

// *************************************
//
//   04. Select Directory & File Names
//
// *************************************
var paths = {
  build: {
    root: 'build',
    rootfile: 'build/root/**/**/**/*',
    php: 'build/*.php',
    css: 'build/src/css/*.css',
    cssPlug: 'build/src/css/plugins/*.css',
    js: 'build/src/js/*.js',
    jsPlug: 'build/src/js/plugins/*.js',
    fonts: 'build/src/fonts/**',
    imgs: 'build/src/img/**/**/*.+(png|jpg|gif|svg)',
    defaultimg: 'build/src/img/default-img/**',
    jsVendor: 'build/src/js/vendor/*',
    sass: 'build/src/sass/**/**/**/*.scss',
    ltrFile: 'assets/css/bootstrap.min.css',
    landingPage_root: 'landing-page/',
    landingPage_php: 'landing-page/*.php',
    landingPage_sass: 'landing-page/assets/sass/**/**/**/*.scss'
  },
  public: {
    root: 'public_html',
    html: 'public_html/*.html',
    css: 'public_html/assets/css',
    js: 'public_html/assets/js',
    fonts: 'public_html/assets/fonts',
    imgs: 'public_html/assets/img',
    jsVendor: 'public_html/assets/js/vendor',
    sass: 'public_html/assets/sass',
    rtlFile: 'assets/css/bootstrap.rtl.min.css',
    landingPage_root: 'landing-page',
    landingPage_html: 'landing-page/*.html',
    landingPage_css: 'landing-page/assets/css',
  }
};

var ltrAttr = 'dir="ltr"';
var rtlAttr = 'dir="rtl"';
var cssConcateFile = 'app.min.css';
var jsConcateFile = 'app.min.js';



// *************************************
//
//   05. Task For Gulp Test
//
// *************************************
gulp.task('test', () => {
  console.log('All Packages Ready')
});

// *************************************
//
//   06. PHP to HTML Convert Tasks 
//
// *************************************
gulp.task('html:compile', () => {
  return gulp.src(paths.build.php)
    .pipe(php2html())
    .pipe(htmlbeautify({
      indentSize: 1,
      indent_char: " ",
    }))
    .pipe(gulp.dest(paths.public.root))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('landingPage:html:compile', () => {
  return gulp.src(paths.build.landingPage_php)
    .pipe(php2html())
    .pipe(htmlbeautify({
      indentSize: 1,
      indent_char: " ",
    }))
    .pipe(gulp.dest(paths.public.landingPage_root))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('html:minify', () => {
  return gulp.src(paths.build.php)
    .pipe(php2html())
    .pipe(removeHtmlComments())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(paths.public.root))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('html:compile:rtl', () => {
  return gulp.src(paths.build.php)
    .pipe(php2html())
    .pipe(inject.replace(ltrAttr, rtlAttr))
    .pipe(inject.replace(paths.build.ltrFile, paths.public.rtlFile))
    .pipe(htmlbeautify({
      indentSize: 1,
      indent_char: " ",
    }))
    .pipe(gulp.dest(paths.public.root))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('html:minify:rtl', () => {
  return gulp.src(paths.build.php)
    .pipe(php2html())
    .pipe(inject.replace('dir="ltr"', 'dir="rtl"'))
    .pipe(inject.replace('assets/css/bootstrap.min.css"', 'assets/css/bootstrap.rtl.min.css"'))
    .pipe(removeHtmlComments())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(paths.public.root))
    .pipe(browserSync.stream({
      reload: true
    }));
});


// *************************************
//
//   07. Root File Move Task
//
// *************************************
gulp.task('root:file', () => {
  return gulp.src(paths.build.rootfile)
    .pipe(gulp.dest(paths.public.root))
    .pipe(browserSync.stream({
      reload: true
    }));
});


// *************************************
//
//  08. All Js Tasks
//
// *************************************
gulp.task('js', () => {
  return gulp.src(paths.build.js)
    .pipe(gulp.dest(paths.public.js))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('js:minify', () => {
  return gulp.src(paths.build.js)
    .pipe(uglify())
    .pipe(gulp.dest(paths.public.js))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('js:plugins', () => {
  return gulp.src(paths.build.jsPlug)
    .pipe(uglify())
    .pipe(gulp.dest(paths.public.js))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('js:concat', () => {
  return gulp.src(paths.build.jsPlug)
    .pipe(concat(jsConcateFile))
    .pipe(uglify())
    .pipe(gulp.dest(paths.public.js))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('js:vendor', () => {
  return gulp.src(paths.build.jsVendor)
    .pipe(gulp.dest(paths.public.jsVendor))
    .pipe(browserSync.stream({
      reload: true
    }));
});

// *************************************
//
//  09. All Image Tasks
//
// *************************************
gulp.task('img', () => {
  return gulp.src([paths.build.imgs, '!' + paths.build.defaultimg])
    .pipe(gulp.dest(paths.public.imgs))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('img:rtl', () => {
  return gulp.src([paths.build.imgs, '!' + paths.build.defaultimg])
    .pipe(gm(function (gmfile) {
      return gmfile
        .flop()
    }))
    .pipe(gulp.dest(paths.public.imgs))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('img:blur', () => {
  return gulp.src([paths.build.imgs, '!' + paths.build.defaultimg])
    .pipe(gm(function (gmfile, done) {
      gmfile.size(function (err, size) {
        if (!err) {
          var imgWidth = size.width;
          var imgHeight = size.height;
  
          var fontSize;
          if (imgWidth < 100) {
            fontSize = 14;
          } else if (imgWidth >= 100 && imgWidth <= 699) {
            fontSize = 20;
          } else {
            fontSize = 50;
          }

          var posY;
          if (imgWidth < 100) {
            posY = 2;
          } else {
            posY = 10;
          }
    
          var printText = imgWidth + ' × ' + imgHeight; 
    
          gmfile
            // Fill the entire image with the background color #EEE
            .fill('#EEE')
            .drawRectangle(0, 0, imgWidth, imgHeight)
            .gravity('Center')
            .font('Arial-Bold')
            .fontSize(fontSize)
            .fill('black')
            .drawText(0, posY, printText);
          done(null, gmfile);
        } else {
          done(err);
        }
      });
    }))
  
    .pipe(gulp.dest(paths.public.imgs))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('img:minify', function () {
  return gulp.src([paths.build.imgs, '!' + paths.build.defaultimg])
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({
            interlaced: true
          }),
          imagemin.mozjpeg({
            quality: 75,
            progressive: true
          }),
          imagemin.optipng({
            optimizationLevel: 5
          }),
          imageminPngQuant(),
          imageminJpegRecompress(),
        ], {
          verbose: true,
        }
      )
    )
    .pipe(gulp.dest(paths.public.imgs))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('img:minify:rtl', function () {
  return gulp.src([paths.build.imgs, '!' + paths.build.defaultimg])
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({
            interlaced: true
          }),
          imagemin.mozjpeg({
            quality: 75,
            progressive: true
          }),
          imagemin.optipng({
            optimizationLevel: 5
          }),
          imageminPngQuant(),
          imageminJpegRecompress(),
        ], {
          verbose: true,
        }
      )
    )
    .pipe(gm(function (gmfile) {
      return gmfile
        .flop()
    }))
    .pipe(gulp.dest(paths.public.imgs))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('img:default', () => {
  return gulp.src(paths.build.defaultimg)
    .pipe(gulp.dest(paths.public.imgs))
})

gulp.task('img:default:minify', () => {
  return gulp.src(paths.build.defaultimg)
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({
            interlaced: true
          }),
          imagemin.mozjpeg({
            quality: 75,
            progressive: true
          }),
          imagemin.optipng({
            optimizationLevel: 5
          }),
          imageminPngQuant(),
          imageminJpegRecompress(),
        ], {
          verbose: true,
        }
      )
    )
    .pipe(gulp.dest(paths.public.imgs))
    .pipe(browserSync.stream({
      reload: true
    }));
})



// *************************************
//
// 10. Fonts Tasks
//
// *************************************
gulp.task('fonts', () => {
  return gulp.src(paths.build.fonts)
    .pipe(gulp.dest(paths.public.fonts))
    .pipe(browserSync.stream({
      reload: true
    }));
});

// *************************************
//
// 11. All CSS Tasks
//
// *************************************

gulp.task('css', () => {
  return gulp.src([paths.build.css, paths.build.cssPlug])
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest(paths.public.css))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('css:minify', () => {
  return gulp.src(paths.build.css)
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest(paths.public.css))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('css:concat', () => {
  return gulp.src(paths.build.cssPlug)
    .pipe(autoprefixer())
    .pipe(concat(cssConcateFile))
    .pipe(cssnano())
    .pipe(gulp.dest(paths.public.css))
    .pipe(browserSync.stream({
      reload: true
    }));
});

// *************************************
//
// 12. All SASS Tasks
//
// *************************************
gulp.task('sass:compile', () => {
  return gulp.src(paths.build.sass)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: '../sass'
    }))
    .pipe(gulp.dest(paths.public.css))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('landingPage:sass:compile', () => {
  return gulp.src(paths.build.landingPage_sass)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: '../sass'
    }))
    .pipe(gulp.dest(paths.public.landingPage_css))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('sass:compressed', () => {
  return gulp.src(paths.build.sass)
    .pipe(
      sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.public.css))
    .pipe(browserSync.stream({
      reload: true
    }));
});

gulp.task('sass', () => {
  return gulp.src(paths.build.sass)
    .pipe(gulp.dest(paths.public.sass))
});


// *************************************
//
// 13. Creating Server Tasks
//
// *************************************

gulp.task('dev:view', () => {
  browserSync.init({
    server: {
      baseDir: paths.public.root,
    },
    logFileChanges: false
  });

  gulp.watch(paths.build.sass, gulp.series('sass:compile'));
  gulp.watch(paths.build.css, gulp.series('css'));
  gulp.watch(paths.build.cssPlug, gulp.series('css'));
  gulp.watch(paths.build.js, gulp.series('js'));
  gulp.watch(paths.build.jsPlug, gulp.series('js:plugins'));
  gulp.watch(paths.build.jsVendor, gulp.series('js:vendor'));
  gulp.watch(paths.build.imgs, gulp.series('img'));
  gulp.watch(paths.build.defaultimg, gulp.series('img:default'));
  gulp.watch(paths.build.fonts, gulp.series('fonts'));
  gulp.watch(paths.build.rootfile, gulp.series('root:file'));
  gulp.watch(paths.build.root + '/**/**/**/**.php', gulp.series('html:compile'));
});

gulp.task('wp:view', () => {
  browserSync.init({
    server: {
      baseDir: paths.public.root,
    },
    logFileChanges: false
  });

  gulp.watch(paths.build.sass, gulp.series('sass:compile', 'sass'));
  gulp.watch(paths.build.css, gulp.series('css'));
  gulp.watch(paths.build.cssPlug, gulp.series('css'));
  gulp.watch(paths.build.js, gulp.series('js'));
  gulp.watch(paths.build.jsPlug, gulp.series('js:plugins'));
  gulp.watch(paths.build.jsVendor, gulp.series('js:vendor'));
  gulp.watch(paths.build.imgs, gulp.series('img'));
  gulp.watch(paths.build.defaultimg, gulp.series('img:default'));
  gulp.watch(paths.build.fonts, gulp.series('fonts'));
  gulp.watch(paths.build.rootfile, gulp.series('root:file'));
  gulp.watch(paths.build.root + '/**/**/**/**.php', gulp.series('html:compile'));
});

gulp.task('server:view', () => {
  browserSync.init({
    server: {
      baseDir: paths.public.root,
    },
    logFileChanges: false
  });

  gulp.watch(paths.build.sass, gulp.series('sass:compressed'));
  gulp.watch(paths.build.css, gulp.series('css:minify'));
  gulp.watch(paths.build.cssPlug, gulp.series('css:concat'));
  gulp.watch(paths.build.js, gulp.series('js:minify'));
  gulp.watch(paths.build.jsPlug, gulp.series('js:concat'));
  gulp.watch(paths.build.jsVendor, gulp.series('js:vendor'));
  gulp.watch(paths.build.imgs, gulp.series('img:minify', 'img:default:minify'));
  gulp.watch(paths.build.defaultimg, gulp.series('img:default'));
  gulp.watch(paths.build.fonts, gulp.series('fonts'));
  gulp.watch(paths.build.rootfile, gulp.series('root:file'));
  gulp.watch(paths.build.root + '/**/**/**/**.php', gulp.series('html:minify'));
});

gulp.task('download:view', () => {
  browserSync.init({
    server: {
      baseDir: paths.public.root,
    },
    logFileChanges: false
  });

  gulp.watch(paths.build.sass, gulp.series('sass:compile', 'sass'));
  gulp.watch(paths.build.css, gulp.series('css'));
  gulp.watch(paths.build.cssPlug, gulp.series('css'));
  gulp.watch(paths.build.js, gulp.series('js'));
  gulp.watch(paths.build.jsPlug, gulp.series('js:plugins'));
  gulp.watch(paths.build.jsVendor, gulp.series('js:vendor'));
  gulp.watch(paths.build.imgs, gulp.series('img:blur', 'img:default'));
  gulp.watch(paths.build.fonts, gulp.series('fonts'));
  gulp.watch(paths.build.rootfile, gulp.series('root:file'));
  gulp.watch(paths.build.root + '/**/**/**/**.php', gulp.series('html:compile'));
});


gulp.task('rtl:dev:view', () => {
  browserSync.init({
    server: {
      baseDir: paths.public.root,
    },
    logFileChanges: false
  });

  gulp.watch(paths.build.sass, gulp.series('sass:compile'));
  gulp.watch(paths.build.css, gulp.series('css'));
  gulp.watch(paths.build.cssPlug, gulp.series('css'));
  gulp.watch(paths.build.js, gulp.series('js'));
  gulp.watch(paths.build.jsPlug, gulp.series('js:plugins'));
  gulp.watch(paths.build.jsVendor, gulp.series('js:vendor'));
  gulp.watch(paths.build.imgs, gulp.series('img:rtl'));
  gulp.watch(paths.build.defaultimg, gulp.series('img:default'));
  gulp.watch(paths.build.fonts, gulp.series('fonts'));
  gulp.watch(paths.build.rootfile, gulp.series('root:file'));
  gulp.watch(paths.build.root + '/**/**/**/**.php', gulp.series('html:compile:rtl'));
});


gulp.task('rtl:wp:view', () => {
  browserSync.init({
    server: {
      baseDir: paths.public.root,
    },
    logFileChanges: false
  });

  gulp.watch(paths.build.sass, gulp.series('sass:compile', 'sass'));
  gulp.watch(paths.build.css, gulp.series('css'));
  gulp.watch(paths.build.cssPlug, gulp.series('css'));
  gulp.watch(paths.build.js, gulp.series('js'));
  gulp.watch(paths.build.jsPlug, gulp.series('js:plugins'));
  gulp.watch(paths.build.jsVendor, gulp.series('js:vendor'));
  gulp.watch(paths.build.imgs, gulp.series('img:rtl'));
  gulp.watch(paths.build.defaultimg, gulp.series('img:default'));
  gulp.watch(paths.build.fonts, gulp.series('fonts'));
  gulp.watch(paths.build.rootfile, gulp.series('root:file'));
  gulp.watch(paths.build.root + '/**/**/**/**.php', gulp.series('html:compile:rtl'));
});


gulp.task('rtl:server:view', () => {
  browserSync.init({
    server: {
      baseDir: paths.public.root,
    },
    logFileChanges: false
  });

  gulp.watch(paths.build.sass, gulp.series('sass:compressed'));
  gulp.watch(paths.build.css, gulp.series('css:minify'));
  gulp.watch(paths.build.cssPlug, gulp.series('css:concat'));
  gulp.watch(paths.build.js, gulp.series('js:minify'));
  gulp.watch(paths.build.jsPlug, gulp.series('js:concat'));
  gulp.watch(paths.build.jsVendor, gulp.series('js:vendor'));
  gulp.watch(paths.build.imgs, gulp.series('img:minify:rtl', 'img:default:minify'));
  gulp.watch(paths.build.defaultimg, gulp.series('img:default'));
  gulp.watch(paths.build.fonts, gulp.series('fonts'));
  gulp.watch(paths.build.rootfile, gulp.series('root:file'));
  gulp.watch(paths.build.root + '/**/**/**/**.php', gulp.series('html:minify:rtl'));
});


gulp.task('rtl:download:view', () => {
  browserSync.init({
    server: {
      baseDir: paths.public.root,
    },
    logFileChanges: false
  });

  gulp.watch(paths.build.sass, gulp.series('sass:compile', 'sass'));
  gulp.watch(paths.build.css, gulp.series('css'));
  gulp.watch(paths.build.cssPlug, gulp.series('css'));
  gulp.watch(paths.build.js, gulp.series('js'));
  gulp.watch(paths.build.jsPlug, gulp.series('js:plugins'));
  gulp.watch(paths.build.jsVendor, gulp.series('js:vendor'));
  gulp.watch(paths.build.imgs, gulp.series('img:blur', 'img:default'));
  gulp.watch(paths.build.fonts, gulp.series('fonts'));
  gulp.watch(paths.build.rootfile, gulp.series('root:file'));
  gulp.watch(paths.build.root + '/**/**/**/**.php', gulp.series('html:compile:rtl'));
});


gulp.task('landingPage:view', () => {
  browserSync.init({
    server: {
      baseDir: paths.public.landingPage_root,
    },
    logFileChanges: false
  });

  gulp.watch(paths.build.landingPage_sass, gulp.series('landingPage:sass:compile'));
  gulp.watch(paths.build.landingPage_root + '**/**/**/**/**.php', gulp.series('landingPage:html:compile'));
});


// *************************************
//
// 14. Clean Tasks
//
// *************************************
gulp.task('clean', function () {
  return gulp.src(paths.public.root).pipe(clean());
});


// *************************************
//
// 15. W3C Validator
//
// *************************************
gulp.task('w3c', () => {
  return gulp.src(paths.public.html)
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter());
});


// *************************************
//
// 16. Merge All Task 
//
// *************************************
gulp.task('dev-version', gulp.series('html:compile', 'root:file', 'js', 'js:plugins', 'js:vendor', 'img', 'img:default', 'fonts', 'css', 'sass:compile', 'sass', 'dev:view'));

gulp.task('wp-version', gulp.series('html:compile', 'root:file', 'js', 'js:plugins', 'js:vendor', 'img', 'img:default', 'fonts', 'css', 'sass:compile', 'sass', 'wp:view'));


gulp.task('server-version', gulp.series('html:minify', 'root:file', 'js:minify', 'js:concat', 'js:vendor', 'img:minify', 'img:default:minify', 'fonts', 'css:minify', 'css:concat', 'sass:compressed', 'server:view'));

// This is for server version without image minify.
gulp.task('server-version-wimgmin', gulp.series('html:minify', 'root:file', 'js:minify', 'js:concat', 'js:vendor', 'img', 'img:default', 'fonts', 'css:minify', 'css:concat', 'sass:compressed', 'server:view'));

gulp.task('download-version', gulp.series('html:compile', 'root:file', 'js', 'js:plugins', 'js:vendor', 'fonts', 'css', 'sass:compile', 'sass', 'img:default', 'img:blur', 'download:view'));

gulp.task('default', gulp.series('dev-version'));

gulp.task('rtl', gulp.series('html:compile:rtl', 'root:file', 'js', 'js:plugins', 'js:vendor', 'img:rtl', 'img:default', 'fonts', 'css', 'sass:compile', 'rtl:dev:view'));

gulp.task('rtl-wp-version', gulp.series('html:compile:rtl', 'root:file', 'js', 'js:plugins', 'js:vendor', 'img:rtl', 'img:default', 'fonts', 'css', 'sass:compile', 'sass', 'rtl:wp:view'));

gulp.task('rtl-server-version', gulp.series('html:minify:rtl', 'root:file', 'js:minify', 'js:concat', 'js:vendor', 'img:minify:rtl', 'img:default:minify', 'fonts', 'css:minify', 'css:concat', 'sass:compressed', 'rtl:server:view'));

gulp.task('rtl-download-version', gulp.series('html:compile:rtl', 'root:file', 'js', 'js:plugins', 'js:vendor', 'fonts', 'css', 'sass:compile', 'sass', 'img:blur', 'img:default', 'rtl:download:view'));

gulp.task('landing-page', gulp.series('landingPage:html:compile', 'landingPage:sass:compile', 'landingPage:view'));