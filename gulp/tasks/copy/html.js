/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Sat Jan 28 2017 08:42:23
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that copies over htm and html files

module.exports = {
    dep: [],
    fn: function (gulp, plugins, callback) {        
        return gulp
            .src(plugins.config.paths.source.html)
            .pipe(gulp.dest(plugins.config.paths.destination.base));
    }
};