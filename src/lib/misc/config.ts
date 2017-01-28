/**
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Sat Jan 28 2017 19:18:28
 * Copyright (c) 2017 Delegate-IT.be
 */

// Holds configuration data used inside the entire application

/*------------------------------------------------------------------------------------*/
/** IMPORTS **/
import * as dot from 'dot-object';
/*------------------------------------------------------------------------------------*/
/*///*/

/*------------------------------------------------------------------------------------*/
/** CLASS **/
export default class Config {
    /* Private static members */    
    private _configjson: any = null;

    /* Construction */
    constructor(configjsonString: string) {
        this._configjson = JSON.parse(configjsonString);
    }

    /* Public functions */    
    hasKey(key: string): boolean {
        if(this._configjson === undefined) {
            return false;
        }
        return dot.pick(key, this._configjson) !== undefined;
    }
    get(key: string): string {
        if(this.hasKey(key)) {
            const value = dot.pick(key, this._configjson, false);
            return value.toString();
        }
        return key;
    }
}
/*------------------------------------------------------------------------------------*/
/*///*/