/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Thu Jan 26 2017 23:13:06
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that removes the entire destination folder
// as well as the temporary folder.

module.exports = {
    dep: [],
    fn: function (gulp, plugins, callback) {
        plugins.del([
            plugins.config.paths.destination.base
        ]);
        callback();
    }
};