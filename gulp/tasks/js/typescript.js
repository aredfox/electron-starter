/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Thu Jan 26 2017 22:54:40
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that compiles all typescript files to js 
// based on the tsconfig.json file.

module.exports = {
    dep: [],
    fn: function (gulp, callback, plugins) {
        const tsconfig = plugins.config.paths.tsconfigjson;
        const tsProject = plugins.typescript.createProject(tsconfig);
        const dest = plugins.config.paths.destination.base;
        let tsResult = 
            tsProject
            .src()            
            .pipe(plugins.sourcemaps.init())
            .pipe(tsProject())

        tsResult = tsResult.js           
            .pipe(plugins.babel());

        if(plugins.config.compilation.js.uglify) {
            tsResult = tsResult.pipe(plugins.uglify());
        }

        if(plugins.config.compilation.js.obfuscate) {
            tsResult = tsResult.pipe(plugins.javascriptObfuscator({
                compact: true,
                sourceMap: plugins.config.env.isDev,
                disableConsoleOutput: plugins.config.env.isProd
            }));
        }   

        return tsResult
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest(dest));
    }
};