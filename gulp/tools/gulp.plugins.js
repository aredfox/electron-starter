/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Thu Jan 26 2017 22:07:02
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Holds logic to load plugins for use in gulp tasks.

'use strict';

/*------------------------------------------------------------------------------------*/
/** PLUGINS OBJECT **/
module.exports = config => {
    const plugins = require('load-plugins')('gulp-*');    
    plugins.config = config;
    return addPlugins(plugins);
}
/*------------------------------------------------------------------------------------*/
/*///*/

/*------------------------------------------------------------------------------------*/
/** HELPER FUNCTIONS **/
// Add additional plugins
function addPlugins(plugins) {
    plugins.del = require('del');
    plugins.path = require('path');
    plugins.fs = require('fs');
    plugins.dot = require('dot-object');
    plugins.runSequence = require('run-sequence');
    plugins.moment = require('moment');
    plugins.childProcess = require('child_process');
    return plugins;
}
/*------------------------------------------------------------------------------------*/
/*///*/