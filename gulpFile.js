/*
	Themebones Template Generator for Wordpress
	Author: Phil Sanders, Sourcetoad
	Email: phil@sourcetoad.com
*/

var gulp = require('gulp'),
	useref = require('gulp-useref'),
	webserver = require('gulp-webserver');

gulp.task('webserver', function(){
	gulp.src('./')
		.pipe(webserver({
            livereload: true,
			port: 9090,
			directoryListing: false,
			open: true
        }));
});

gulp.task('compile', function(){
	return gulp.src('*.html')
		.pipe(useref())
		.pipe(gulp.dest('dist'))
});
