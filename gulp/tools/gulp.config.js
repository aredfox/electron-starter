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
        // Paths
        paths: {
            base: path.resolve("./"),
            packagejson: path.resolve("./package.json"),
            tsconfigjson: path.resolve("./tsconfig.json"),
            source: {
                base: path.resolve("./src"),
                typescript: path.join(path.resolve("./src/"), "**", "/*.ts"),
            },
            destination: {                
                base: path.resolve("./app")                
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