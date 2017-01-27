/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Fri Jan 27 2017 13:52:19
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that compiles less files

module.exports = {
    dep: [],
    fn: function (gulp, callback, plugins) {
        return gulp
            .src(plugins.config.paths.source.less)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.less())
            .pipe(plugins.autoprefixer({
                // By using electron, we only need to support autoprefixing
                // for chrome (chromium)
                browsers: [ 'last 2 Chrome versions' ]
            }))
            .pipe(plugins.cssmin())
            .pipe(plugins.concat('stylesheet.min.css'))
            //.pipe(plugins.rename({suffix: '.min' }))
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest(plugins.config.paths.destination.styles));
    }
};