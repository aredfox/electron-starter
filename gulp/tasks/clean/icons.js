/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Sat Jan 28 2017 22:57:36
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that deletes the icons in the source folder

module.exports = {
    dep: [],
    fn: function (gulp, callback, plugins) {                
        return plugins.del.sync([
            plugins.path.resolve(plugins.path.join(plugins.config.paths.build.icons.destination, 'icon.*'))            
        ]);        
    }
};