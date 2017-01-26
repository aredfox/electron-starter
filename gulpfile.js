/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Thu Jan 26 2017 21:58:30
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Holds the main entry point for the gulp task runner's build process.

'use strict';

/*------------------------------------------------------------------------------------*/
/** IMPORTS **/
const path = require('path');
const { argv: args } = require('yargs');
// Gulp related
const gulp = require('gulp');
const config = require('./gulp/tools/gulp.config')(args);
const plugins = require('./gulp/tools/gulp.plugins')(config);
const tasks = require('gulp-require-tasks')({
    path: path.join(__dirname, 'gulp', 'tasks'),
    seperator: ':',
    arguments: [config, plugins]
});
/*------------------------------------------------------------------------------------*/
/*///*/

/*------------------------------------------------------------------------------------*/
/** TASKS **/
// Default task prints out the available tasks.
gulp.task('default', () => {
    require('child_process').exec('gulp --tasks', (error, stdout, stderr) => {
        if(error) {
            console.error('Could not execute "gulp --tasks"');
        } else {
            console.log(stdout);
        }
    });   
});
/*------------------------------------------------------------------------------------*/
/*///*/