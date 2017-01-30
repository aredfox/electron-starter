/**
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Sat Jan 28 2017 19:18:28
 * Copyright (c) 2017 Delegate-IT.be
 */

// Holds configuration data used inside the entire application

/*------------------------------------------------------------------------------------*/
/** IMPORTS **/
import * as path from 'path';
import * as fs from 'fs';
import * as dot from 'dot-object';
/*------------------------------------------------------------------------------------*/
/*///*/

/*------------------------------------------------------------------------------------*/
/** INTERFACES **/
export enum VersionStringFormat {
    Major, MajorMinor, MajorMinorBuild, MajorMinorBuildEnv
}
export interface IConfig {
    hasKey: (key: string) => boolean,
    get: (key: string) => string, 
    // Environment   
    getEnv: (fullName: boolean) => string,
    isDev: () => boolean,
    isProd: () => boolean
    // App
    getVersion: (format: VersionStringFormat) => string;
    // Flags
    canShowConsole: boolean,
    canShowConsoleOnStartup: boolean
}
/*------------------------------------------------------------------------------------*/
/*///*/

/*------------------------------------------------------------------------------------*/
/** CLASS **/
export default class Config implements IConfig {
    /* Static */
    private static _instance: Config = new Config(Config.getJSONString());
    private static getJSONString(): string {
        const configjsonFilePath = path.resolve(path.join('./', 'app', 'data', 'config.json'));
        return fs.readFileSync(configjsonFilePath, 'utf-8');
    }
    public static get Instance(): Config { return Config._instance; }

    /* Private members */    
    private _configjson: any = undefined;
    private _versions: string[] = undefined;

    /* Construction */    
    constructor(configjsonString: string) {        
        this._configjson = JSON.parse(configjsonString);                
    }

    /* Public functions */    
    // Checks whether the key exists
    hasKey(key: string): boolean {        
        if(this._configjson === undefined) {
            return false;
        }
        return dot.pick(key, this._configjson) !== undefined;
    }
    // Gets the value of the key, or returns the key-path itself
    get(key: string): string {        
        if(this.hasKey(key)) {
            return dot.pick(key, this._configjson, false).toString();            
        }
        return key;
    }
    // - Environment
    // Gets the environment string "id", or "name" depending of the "fullName" flag
    getEnv(fullName: boolean = false): string {
        if(fullName) {
            return this.get('env.name'); 
        }
        return this.get('env.id'); 
    }
    // Determines whether running under development-mode
    isDev(): boolean { return this.get('env.isDev') === 'true' }
    // Determines whether running under production-mode
    isProd(): boolean { return !this.isDev(); }
    // - App
    // Gets the version string - by default, the full version string
    getVersion(format: VersionStringFormat = VersionStringFormat.MajorMinorBuildEnv): string {
        if(this._versions === undefined) {
            // Create new array
            this._versions = [];
            // Build version strings
            this._versions.push(this.get('app.version').split('.')[0]);
            this._versions.push(this.get('app.version'));
            this._versions.push(`${this._versions[1]}.${this.get('build.number')}`);
            this._versions.push(`${this._versions[2]}.${this.get('env.id')}`);
        }
        return this._versions[format];
    }
    // - Flags
    get canShowConsole(): boolean {
        return this.get('flags.canShowConsole') === 'true';
    }
    get canShowConsoleOnStartup(): boolean {
        if(!this.canShowConsole) return false;
        return this.get('flags.canShowConsoleOnStartup') === 'true';
    }
}
/*------------------------------------------------------------------------------------*/
/*///*/