/**
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Sat Jan 28 2017 12:47:04
 * Copyright (c) 2017 Delegate-IT.be
 */

// Controls lifecycle events for the electron app

/*------------------------------------------------------------------------------------*/
/** IMPORTS **/
import * as path from 'path';
import * as url from 'url';
import electron, { BrowserWindow, shell } from 'electron';
import Config from './lib/misc/config';
/*------------------------------------------------------------------------------------*/
/*///*/

/*------------------------------------------------------------------------------------*/
/** CLASS **/
export default class App {
    // Static members
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;    
    static BrowserWindow: any;

    // Main method (entry point for main.ts)
    static main(app: Electron.App, browserWindow: typeof BrowserWindow): void {        
        App.application = app;                
        App.configureAppEvents();
    }

    // Private static methods
    private static configureAppEvents(): void {
        // Quit application (even on macOS) when all windows are closed.
        App.application.on(
            'window-all-closed',
            () => {
                App.application.quit();
            }
        );

        // When electron's App is ready, build and show the mainWindow
        App.application.on(
            'ready',
            () => {
                App.mainWindow = App.createMainBrowserWindow();
                App.mainWindow.loadURL(
                    url.format({
                        pathname: path.join(__dirname, 'views', 'app.html'),
                        protocol: 'file:',
                        slashes: true
                    })
                );
                if(Config.Instance.canShowConsoleOnStartup) {
                    App.mainWindow.webContents.openDevTools();
                }
            }
        );
    }

    // Creates a new "Main" browser window
    private static createMainBrowserWindow(): Electron.BrowserWindow {
        const mainBrowserWindow = new BrowserWindow({
            width: 800, height: 600,            
            show: false, backgroundColor: '#efefef',
            webPreferences: {
                webSecurity: false
            }
        });

        // Once the main browser window is ready, show it
        mainBrowserWindow.once(
            'ready-to-show',
            () => {
                App.mainWindow.show();
            }
        );

        // Open a-href-links in new external (native) browser window.
        mainBrowserWindow.webContents.on(
            'will-navigate', 
            (e, url) => {
                if(url !== mainBrowserWindow.webContents.getURL()) { 
                    // if the url isn't the page we are on, we'll open it in the native browser
                    e.preventDefault();
                    shell.openExternal(url);
                }
            }
        );

        return mainBrowserWindow;
    }
}
/*------------------------------------------------------------------------------------*/
/*///*/