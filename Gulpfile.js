var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('web/themes/iovi/sass/**/*.scss')
        .pipe(sass({
          includePaths: ['node_modules/susy/sass']
        }).on('error', sass.logError))
        .pipe(gulp.dest('web/themes/iovi/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('web/themes/iovi/sass/**/*.scss',['styles']);
});
