const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
 
gulp.task('cssnano', function() {
    return gulp.src('css/*.css')
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css/minificado'));
});
gulp.task('uglify', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('js/minificado'));
  });

gulp.task('watch', function() {
    gulp.watch('css/*.css', gulp.series('cssnano'));
    gulp.watch('js/*.js', gulp.series('uglify'));
});