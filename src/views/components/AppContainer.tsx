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
            <div id="welcome">
                <div className="appcontainer-intro-card-square mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand">
                        <h2 className="mdl-card__title-text">Electron-Starter</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        This is a highly opinionated electron boilerplate / template working with gulp, typescript, less, react and VSCode.<br/>
                        Running electron-starter version '{Config.Instance.getVersion()}'.
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                           href={Config.Instance.get('build.repository.url')}>
                           View GitHub Repo</a>
                    </div>
                </div>                
            </div>
        );
    }    
}        
/*------------------------------------------------------------------------------------*/
/*///*/