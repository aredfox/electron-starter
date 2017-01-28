/**
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Sat Jan 28 2017 12:40:36
 * Copyright (c) 2017 Delegate-IT.be
 */

// The main entry point for electron

/*------------------------------------------------------------------------------------*/
/** IMPORTS **/
import { app, BrowserWindow } from 'electron';
import App from './app';
/*------------------------------------------------------------------------------------*/
/*///*/

/*------------------------------------------------------------------------------------*/
/** BOOTSTRAP **/
App.main(app, BrowserWindow);
/*------------------------------------------------------------------------------------*/
/*///*/