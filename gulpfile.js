/**
 * Created by srambach on 3/3/17.
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;


// Compiles less on to /css
gulp.task('less', function () {
    gulp.src('less/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}));
});

// reload server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// watch for changes on files
gulp.task('watch', function(){
    gulp.watch('less/*.less', ['less']);
    gulp.watch("*.html", ['bs-reload']);
});

// deploys
gulp.task('default',  ['less','browser-sync','watch']);
