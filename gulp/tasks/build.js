/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Thu Jan 26 2017 23:17:34
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that runs the build cycle.

module.exports = {
    dep: ['debug', 'clean'],
    fn: function (gulp, callback, plugins) {        
        return plugins.runSequence(            
            'copy',
            'css:less',
            'js:typescript'            
        );
    }
};