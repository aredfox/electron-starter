/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Sun Jan 29 2017 15:33:26
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that prepares and copies over config.json
// for the packaged application

module.exports = {
    dep: [],
    fn: function (gulp, plugins, callback) {
        const buildNumberFormat = 'YYYYMMDDHHmmss';
        const buildTimeStamp = plugins.moment();

        function getCommitHash() {
            try {
                return plugins.childProcess
                    .execSync('git rev-parse HEAD')
                    .toString()
                    .trim();
            } catch (err) {
                plugins.util.log('x Could not resolve commit hash.');
                return "*(-1)";
            }
        }
        function getPackageJson() {
            return JSON.parse(
                plugins.fs.readFileSync(plugins.config.paths.packagejson, 'utf-8')
            );
        }
        function getRepositorySection() {
            const packagejson = getPackageJson();
            let repositorySection = plugins.dot.pick('repository', packagejson);
            if(repositorySection.type.toLowerCase() === 'git') {
                repositorySection.commit = getCommitHash();
            }
            return repositorySection;
        }
        function getAppSection() {
            const packagejson = getPackageJson();

            function getCopyright() {
                const copyright = plugins.dot
                    .pick('build.copyright', packagejson)
                    .split('©');
                return `${copyright[0]}© ${plugins.moment().format('YYYY')}${copyright[1]}`;
            }
            
            let jsonString = [ 
                `"name": "${plugins.dot.pick('name', packagejson)}"`,
                `"version": "${plugins.dot.pick('version', packagejson)}"`,
                `"author": "${plugins.dot.pick('author', packagejson)}"`,
                `"license": "${plugins.dot.pick('license', packagejson)}"`,
                `"copyright": "${getCopyright()}"`
            ].join(',');
            jsonString = `{${jsonString}}`;            

            return JSON.parse(jsonString);
        }        

        return gulp
            .src(plugins.config.paths.source.configjson)
            .pipe(plugins.jsonEditor(file => {
                // App
                file.app = getAppSection();
                // Environment
                file.env = plugins.config.env;
                // Build                
                file.build.timestamp = buildTimeStamp.format();
                file.build.number = buildTimeStamp.format(buildNumberFormat);                
                file.build.repository = getRepositorySection();
                // Flags
                file.flags.canShowConsoleOnStartup = plugins.config.env.isDev;
                // Log output config.json
                plugins.util.log(`Outputting config.json: ${JSON.stringify(file)}`);
                // Return the config.json                
                return file;
            }, {
                'indent_char': '\t',
                'indent_size': 1
            }))
            .pipe(gulp.dest(plugins.config.paths.destination.data));
    }
};