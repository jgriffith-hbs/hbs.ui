// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jsx = require('gulp-jsx');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['js/*.js','!js/require.js','!js/t3.js'])
        .pipe(jsx({factory:'React.createElement'}))
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/hbs.ui.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['js/require.js','js/t3.js','js/!(require)*.js'])
        .pipe(concat('hbs.ui.js'))
        .pipe(jsx({factory:'React.createElement'}))
        .pipe(gulp.dest('dist'))
        .pipe(rename('hbs.ui.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint','scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);