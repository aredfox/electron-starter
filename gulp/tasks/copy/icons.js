/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Sat Jan 28 2017 22:47:54
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that copies over icons from resources to source compilation folder for building

module.exports = {
    dep: [],
    fn: function (gulp, plugins, callback) {
        return gulp
            .src(plugins.config.paths.build.icons.source)
            .pipe(gulp.dest(plugins.config.paths.build.icons.destination));
    }
};