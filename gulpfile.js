//.gulpfile
var gulp = require('gulp')
    , sass = require('gulp-sass')
    , browserSync = require('browser-sync').create()
    , autoprefixer = require('gulp-autoprefixer')
    ;

gulp.task('pages', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('release/'))
        .pipe(browserSync.stream())
    ;
});

gulp.task('styles', ['sass'], function(){
    return gulp.src('src/styles/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('release/css/'))
        .pipe(browserSync.stream())
    ;
});


gulp.task('sass', function(){
    return gulp.src('src/styles/*.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('release/css/'))
        .pipe(browserSync.stream())
    ;
});

gulp.task('scripts', function(){
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('release/js/'))
        .pipe(browserSync.stream())
    ;
});

gulp.task('static', function(){
    return gulp.src('src/static/**')
        .pipe(gulp.dest('release/static/'))
        .pipe(browserSync.stream())
    ;
});

gulp.task('build', ['pages', 'styles', 'scripts', 'static']);

gulp.task('serve', ['build'], function(){
    browserSync.init({
        server: {
            baseDir: 'release/'
        }
    });
    gulp.watch('source/styles/**', ['styles']);
    gulp.watch('source/js/**', ['scripts']);
    gulp.watch('source/static/**', ['static']);
    gulp.watch('source/*.html').on('change', function(){
        gulp.start('pages');
        browserSync.reload();
    });
});

gulp.task('default', ['serve']);

//EOF
