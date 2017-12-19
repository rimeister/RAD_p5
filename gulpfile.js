var gulp = require('gulp'),
    minify = require('gulp-minify');
 
gulp.task('build', function() {
  gulp.src('source/RAD_p5.js')
    .pipe(minify({
        ext:{
            min:'.js'
        }
    }))
    .pipe(gulp.dest('distribution'))
});