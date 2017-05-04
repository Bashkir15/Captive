import gulp from 'gulp';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';
import handleErrors from '../utils/handleErrors';
import config from '../config';

export function processStyles(done) {
    gulp.src(config.dev.mainSass)
        .pipe(plumber({
            handleErrors: handleErrors,
        }))
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compact',
            precision: 10,
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: true,
        }))
        .pipe(gulp.dest(config.dev.css))
        done();
}