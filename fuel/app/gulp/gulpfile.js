'use strict';

// Include Gulp & tools we'll use
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        camelize: true,
        lazy: true,
        rename: {
            'gulp-minify-css': 'minifyCSS',
        }
    }),
    requireDir = require('require-dir');    

var name, task, dir,
    taskArr = [],
    paths = {
        web: '../../../public/web/',
        admin: '../../../public/admin/',
    }

var autoprefixer_browsers = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

dir = requireDir('./task');
for (name in dir) {
    task = dir[name];
    taskArr.push(name);
    task(gulp, $, paths, autoprefixer_browsers);
}

gulp.task('default', taskArr);
