/**
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Fri Jan 27 2017 14:40:32
 * Copyright (c) 2017 Delegate-IT.be
 */

// Top level application component

/*------------------------------------------------------------------------------------*/
/** IMPORTS **/
import * as React from 'react';
import { Component } from 'react';
import Config from '../../lib/misc/Config';
/*------------------------------------------------------------------------------------*/
/*///*/

/*------------------------------------------------------------------------------------*/
/** COMPONENT **/
export default class AppContainer extends React.Component<{}, {}> {    
    render() {
        return ( 
            <div>
                <p>Running electron-starter version '{Config.Instance.getVersion()}'.</p>
            </div>
        );
    }    
}        
/*------------------------------------------------------------------------------------*/
/*///*/