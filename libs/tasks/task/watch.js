import gulp from 'gulp';
import path from 'path';
import chalk from 'chalk';
import config from '../config';
import { processStyles } from './styles';

function onWatchError(error) {
    console.log(chalk.underline.red('Error happened', error));
}

function onWatchAdd(filePath) {
    console.log(`File ${chalk.underline.green(filePath)} has been added`);
}

function onWatchChange(filePath) {
    console.log(`File ${chalk.underline.yellow(filePath)} was changed`);
}

function onWatchRemove(filePath) {
    const filePathFromSrc = path.relative(path.resolve(config.src), filePath);
    const destFilePath = path.resolve(config.dist, filePathFromSrc);
    del.sync(destFilePath);

    console.log(`File ${chalk.underline.red(filePath)} has been removed`);
}

function addEvents(watcher) {
    return watcher
        .on('error', onWatchError)
        .on('add', onWatchAdd)
        .on('unlink', onWatchRemove)
        .on('change', onWatchChange);
}

export function watch(done) {
    const watchers = [
        gulp.watch([`./public/static/styles/**/*.sass`, `./public/static/styles/main.sass`], processStyles)
    ];

    watchers.map(watcher => addEvents(watcher));

    console.log(chalk.green('watching changes...'));
    done();
}