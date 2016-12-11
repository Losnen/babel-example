import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('default', () => {
    console.log('Default task called');
});

gulp.task('build', () => {
    return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('build/'));
});
