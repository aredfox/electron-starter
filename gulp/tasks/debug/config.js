/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Thu Jan 26 2017 23:03:53
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that prints out the config object as a JSON formatted object.

module.exports = {
    dep: [],
    fn: function (gulp, callback, plugins) {        
        plugins.util.log(`Configuration object: ${JSON.stringify(plugins.config, null, ' ')}.`);
    }
};