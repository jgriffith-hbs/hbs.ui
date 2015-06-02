// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var react = require('gulp-react');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['js/*.js','!js/require.js','!js/t3.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/hbs.ui.scss')
        .pipe(sass())
        .on('error', function(e) {
          console.error(e.message + '\n  in ' + e.fileName)
          this.end();
        })
        .pipe(gulp.dest('dist'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['js/require.js','js/t3.js','js/!(require)*.js','build/hbs.ui.jsx.js'])
        .pipe(concat('hbs.ui.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('hbs.ui.min.js'))
        .pipe(uglify())
        .on('error', function(e) {
          console.error(e.message + '\n  in ' + e.fileName)
          this.end();
        })
        .pipe(gulp.dest('dist'));
});

gulp.task('jsx', function() {
  return gulp.src('js/*.jsx')
    .pipe(react())
    .on('error', function(e) {
      console.error(e.message + '\n  in ' + e.fileName)
      this.end();
    })
    .pipe(concat('hbs.ui.jsx.js'))
    .pipe(gulp.dest('build'))
})

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint','scripts']);
    gulp.watch('js/*.jsx', ['jsx','scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'jsx', 'scripts', 'watch']);