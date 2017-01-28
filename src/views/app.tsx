/**
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Fri Jan 27 2017 14:22:46
 * Copyright (c) 2017 Delegate-IT.be
 */

// Setting up react inside the host html

/*------------------------------------------------------------------------------------*/
/** IMPORTS **/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import AppContainer from './components/AppContainer';
/*------------------------------------------------------------------------------------*/
/*///*/

/*------------------------------------------------------------------------------------*/
/** RENDER TO DOM **/
ReactDOM.render(
    <AppContainer/>,
    document.getElementById('AppContainer')
);
/*------------------------------------------------------------------------------------*/
/*///*/
