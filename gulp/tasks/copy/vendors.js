/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Fri Jan 27 2017 10:54:48
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that copies over vendo specified modules/libraries and more to
// the vendor path defined in the config.paths.destination

module.exports = {
    dep: [],
    fn: function (gulp, callback, plugins) {
        for(let vendor of plugins.config.paths.source.vendors) {
            gulp.src(vendor.glob)
                .pipe(gulp.dest(`${plugins.config.paths.destination.vendor}/${vendor.name}`))
        }
    }
};