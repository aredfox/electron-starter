/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Thu Jan 26 2017 23:04:10
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that prints out the plugins.

module.exports = {
    dep: [],
    fn: function (gulp, plugins, callback) {        
        plugins.util.log(`Loaded plugins: ${Object.keys(plugins).join(', ')}.`);
        callback();
    }
};