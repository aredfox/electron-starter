/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Thu Jan 26 2017 22:00:20
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Holds gulp related information and configuration on the required build process.
// Environment settings, build paths, and more...

'use strict';

/*------------------------------------------------------------------------------------*/
/** IMPORTS **/
const path = require('path');
/*------------------------------------------------------------------------------------*/
/*///*/

/*------------------------------------------------------------------------------------*/
/** CONFIG OBJECT **/
module.exports = args => {
    return {
        // Environment
        env: buildEnvironmentObject(args),
        // Compilation
        compilation: {
            js: {
                uglify: !args.uglify,
                obfuscate: !args.obfuscate
            }
        },
        // Paths
        paths: {            
            base: path.resolve("./"),
            packagejson: path.resolve("./package.json"),
            tsconfigjson: path.resolve("./tsconfig.json"),            
            build: {
                    icons: { 
                        source: path.resolve(`./resources/build/${args.prod ? 'prod' : 'dev'}/*.{png,icns,ico}`),
                        destination: path.resolve('./src/data/build')
                    }
            },
            source: {
                base: path.resolve("./src"),                
                typescript: path.join(path.resolve("./src/"), "**", "/*.ts"),
                less: path.join(path.resolve('./src/'), '**', '/*.less'),
                html: path.join(path.resolve('./src/'), '**', '*.{html,htm}'),
                vendors: [
                    {
                        name: 'font-awesome',
                        path: path.resolve('./node_modules/font-awesome'),
                        glob: path.resolve('./node_modules/font-awesome/**/*{.min.css,otf,eot,svg,ttf,woff,woff2}')                        
                    }
                ]
            },            
            destination: {                
                base: path.resolve("./app"),
                views: path.resolve("./app/views/"),
                styles: path.resolve("./app/views/styles"),
                lib: path.resolve("./app/lib"),
                vendor: path.resolve("./app/lib/vendor")
            }
        }
    }
}
/*------------------------------------------------------------------------------------*/
/*///*/

/*------------------------------------------------------------------------------------*/
/** HELPER FUNCTIONS **/
// Builds and returns environment object based on the args parameter.
function buildEnvironmentObject(args) {
    return {
        id: args.prod ? 'prod' : 'dev',
        name: args.prod ? 'production' : 'development',
        isProd: args.prod ? true : false,
        isDev: !args.prod
    }
}
/*------------------------------------------------------------------------------------*/
/*///*/