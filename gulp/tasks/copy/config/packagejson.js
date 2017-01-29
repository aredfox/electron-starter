/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Sat Jan 28 2017 20:36:30
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that prepares and copies over package.json
// for the packaged application

module.exports = {
    dep: [],
    fn: function (gulp, plugins, callback) {
        return gulp
            .src(plugins.config.paths.packagejson)
            .pipe(plugins.jsonEditor(file => {
                file.main = "main";
                delete file.scripts;
                delete file.devDependencies;
                delete file.build;
                delete file.directories;
                delete file.repository;
                return file;
            }, {
                'indent_char': '\t',
                'indent_size': 1
            }))
            .pipe(gulp.dest(plugins.config.paths.destination.base));
    }
};