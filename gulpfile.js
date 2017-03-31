    var gulp = require('gulp'),
        gp_concat = require('gulp-concat'),
        gp_uglify = require('gulp-uglify');
        concatCss = require('gulp-concat-css');
        uglifycss = require('gulp-uglifycss');

    gulp.task('js-fef', function(){
        return gulp.src(['src/js/script1.js', 'src/js/script2.js'])
            .pipe(gp_concat('main.js.js'))
            .pipe(gp_uglify())
            .pipe(gulp.dest('build'));
    });


    gulp.task('css-fef', function () {
  		return gulp.src('src/css/*.css')
    	.pipe(concatCss("main.css.css"))
    	.pipe(gulp.dest('build/'));
	});
    

 
	gulp.task('css-min', function () {
		return gulp.src('build/main.css.css')
    	.pipe(uglifycss({
    	  "maxLineLen": 80,
      		"uglyComments": true
    	}))
    	.pipe(gulp.dest('build/css.main'));
	});
    


    gulp.task('default', ['js-fef', 'css-fef', 'css-min'], function(){});