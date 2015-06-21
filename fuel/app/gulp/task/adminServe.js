module.exports = function(gulp, $, paths, autoprefixer_browsers) {
    gulp.task('adminServe', function() {
        browserSync = require('browser-sync'),
        reload = browserSync.reload;
            
        browserSync({
            server: {
                baseDir: "../../../admin/"
            }
        });
        gulp.watch([
            './admin/sass/**/*.scss',
            './admin/js/**/*.js',
        ], ['admin', reload]);
    });
}