module.exports = function(gulp, $, paths, autoprefixer_browsers) {
    gulp.task('admin', function() {
        // sass     
        var sass = gulp.src('./admin/sass/**/*.scss')
            .pipe($.changed('./admin/sass/**/*.scss', {
                extension: '.scss'
            }))
            .pipe($.sass({
                precision: 10,
                onError: console.error.bind(console, 'Sass error:')
            }))
            .pipe($.autoprefixer({
                browsers: autoprefixer_browsers
            }))
            .pipe(gulp.dest(paths.admin + 'css/'))
            .pipe($.minifyCSS())
            .pipe(gulp.dest(paths.admin + 'css/'));

        // script
        var script = gulp.src('./admin/js/**/*.js')
            .pipe($.uglify())
            .pipe(gulp.dest(paths.admin + 'js/'));

        return $.merge(sass, script);
    });
}