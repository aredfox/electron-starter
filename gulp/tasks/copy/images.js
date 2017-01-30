/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Mon Jan 30 2017 14:36:07
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that copies over images folder

module.exports = {
    dep: [],
    fn: function (gulp, plugins, callback) {
        return gulp
            .src(plugins.config.paths.source.images)
            .pipe(gulp.dest(plugins.config.paths.destination.images));
    }
};