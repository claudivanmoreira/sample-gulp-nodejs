var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin');
    clean = require('gulp-clean');

const SOURCE_CONFIG = {
    JS:     './app/src/assets/js/**/*.js',
    SCSS:   './app/src/assets/scss/**/*.scss',
    VENDOR: './app/src/assets/vendor/**/*.*',
    IMG:    './app/src/assets/imgs/**/*.{jpeg,JPEG,jpg,JPG,gif,GIF,png,PNG,svg,SVG}',
    HTML:   './app/src/**/*.html',
}

const DIST_CONFIG = {
    JS:   './app/dist/assets/js/',
    SCSS: './app/dist/assets/css/',
    IMG:  './app/dist/assets/imgs/',
    VENDOR:  './app/dist/assets/vendor/',
    HTML: './app/dist/',
    ROOT: './app/dist/'
}

gulp.task('clean', function() {
    gulp.src(DIST_CONFIG.ROOT)
        .pipe(clean())
});

gulp.task('html', function(){
    gulp.src([SOURCE_CONFIG.HTML])
        .pipe(gulp.dest(DIST_CONFIG.HTML))
        .pipe(connect.reload());
});

gulp.task('sass', function(){
    gulp.src(SOURCE_CONFIG.SCSS)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(DIST_CONFIG.SCSS))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src(SOURCE_CONFIG.JS)
        .pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(DIST_CONFIG.JS))
        .pipe(connect.reload())
});

gulp.task('img', function() {
    gulp.src(SOURCE_CONFIG.IMG)
		.pipe(imagemin())
		.pipe(gulp.dest(DIST_CONFIG.IMG))
		.pipe(connect.reload())
});

gulp.task('vendor', function() {
    gulp.src(SOURCE_CONFIG.VENDOR)
		.pipe(gulp.dest(DIST_CONFIG.VENDOR))
		.pipe(connect.reload())
});

gulp.task('connect', function() {
    connect.server({
      root: DIST_CONFIG.ROOT,
      livereload: true
    })
});

gulp.task('watch', function() {
    gulp.watch(SOURCE_CONFIG.JS, ['js']);
    gulp.watch(SOURCE_CONFIG.SCSS, ['sass']);
    gulp.watch(SOURCE_CONFIG.HTML, ['html']);
    gulp.watch(SOURCE_CONFIG.IMG, ['img']);
    gulp.watch(SOURCE_CONFIG.IMG, ['vendor']);
});

gulp.task('default', ['clean', 'html', 'sass', 'js', 'img', 'vendor', 'connect', 'watch']);