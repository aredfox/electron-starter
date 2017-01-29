/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Thu Jan 26 2017 23:17:34
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that runs the build cycle.

module.exports = {
    dep: [],
    fn: function (gulp, plugins, callback) {
        plugins.runSequence(
            'clean',
            'copy',
            'css:less',
            'js:typescript',
            callback
        );
    }
};