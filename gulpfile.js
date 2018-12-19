const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');
//tareas
gulp.task('sass', () =>
        gulp.src('scss/app.scss')
        //pipe son las acciones que haran las tareas
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(sass({
			includePaths: ['scss']
		}))
		.pipe(gulp.dest('css'))
);
//la tarea sass se ejecutara antes de watch
gulp.task('watch', ['sass'], () => {
    gulp.watch(['scss/*.scss'], ['sass']);
});