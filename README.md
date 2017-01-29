# About "electron-starter"
This is a highly opinionated [electron](https://electron.atom.io) boilerplate / template working with gulp, typescript, less, react and [VSCode](https://code.visualstudio.com/). Clone/download/fork the project as your base for starting with electron & mentioned technologies. Or cherry pick. And if you have any advice, or issues - please let me know: ys@delegate-it.be. Below is your README 'Menu':
* [Get Started](#get-started)
  * Getting your environment ready and the commands to use.
* [Dependencies](#dependencies)
  * Talking Gulp, Less, FontAwesome.
* [IDE Choices (VSCode)](#ide-choice-vscode)
* [Using the project](#using-the-project)
  * About the pre-built classes and configurations.
* [Known Issues](#known-issues)

<br/><br/>

# Get Started
1. Make sure you have installed NodeJS and NPM globally on your machine. You can get it at [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Via NPM you install both gulp and typescript globally with the following command `npm i -g gulp typescript` in your terminal or command prompt.
3. Next run the command `npm install` to let NPM install the dependencies defined in `project.json`'s `devDependencies` and `dependencies` section in a local folder called `node_modules`.
4. In your terminal / command prompt enter the command `gulp`. You should see the tasks defined, something along the lines of the output below:

   ```
   [10:02:03] Using gulpfile e:\Dev\electron-starter\gulpfile.js
   [10:02:03] Starting 'default'...
   [10:02:03] Finished 'default' after 28 ms
   [10:02:05] Tasks for e:\Dev\electron-starter\gulpfile.js
   [10:02:05] ├─┬ build
   [10:02:05] │ └── build:clean
   [10:02:05] ├── build:clean
   [10:02:05] ├─┬ debug
   [10:02:05] │ ├── debug:config
   [10:02:05] │ └── debug:plugins
   [10:02:05] ├── debug:config
   [10:02:05] ├── debug:plugins
   [10:02:05] ├── default
   [10:02:05] └── js:typescript
   ```
5. Next, read below to start running / developping...

## Run / Development NPM Commands
Commands are specified in `package.json`'s `scripts` section. They allow to start & run the application without havin to manually run each gulp, electron-builder, or any other task.
- `npm start` will start the application in production-mode. Behind the covers it actually calls the `prod` script (`npm run prod`).
- `npm run dev` will start the application in development-mode.
- `npm run prod` will start the application in production-mode.
- `npm run startelectron` will start electron with the given startup-path `./app/main(.js)`. You'll actually don't actually need it that often, it's there for reuse and the occasional debugging/trying out in the compiled version.

## Gulp Build Options
Whenever running gulp you can specify some commands. Usually you'll use the npm commands specified above, but if needed you can add new scripts using the gulp-parameters below.
- `--dev` will signal the application it is being compiled for development. You can base your code upon this flag to show/hide certain features. If either `--prod` or `--dev` is missing, gulp assumes it is in development mode.
- `--prod` will signal the application it is being compiled for production. You can base your code upon this flag to show/hide certain features.
- `--obfuscate` will **turn off** obfuscation (as default it is on) of the typescript code as done by [javascript-obfuscator](https://www.npmjs.com/package/gulp-javascript-obfuscator).
- `--uglify` will **turn off** minifaction of javascript as done by [UfligyJS](https://www.npmjs.com/package/gulp-uglify).

<br/><br/>

# Dependencies
We've chosen a few dependencies we like working with, but for the most part they're interchangable with alternatives out there.

## Gulp
This project uses [gulp](http://gulpjs.com/) as the task-runner for managing the build process. By making use of the [gulp-require-tasks](https://www.npmjs.com/package/gulp-require-tasks) module, we're able to load the gulp tasks from the folder './gulp/tasks'. We use [load-plugins](https://www.npmjs.com/package/load-plugins) to automatically make plugins available inside the tasks.
Below is an outline of a task's structure:
```
module.exports = {
    dep: [],
    fn: function (gulp, plugins, callback) {        
            plugins.util.log('You can log messages as well with gulp-util, accessible via plugins.util.');
            return 
                gulp.src(...)
                .pipe(plugins.concat())
                .pipe(plugins.someOtherPlugin());
    }
};
```
Note that whenever a task doesn't return a stream, it must call the callback function.

## Less
I've chosen [less](http://lesscss.org/), but you could easily replace it with sass if you chose to do so. The task gulp task "css:less" will compile all "*.less" files and bundle them into one "stylesheet.css.min" file in the output "app/views/styles" folder.
Autoprefixing is enabled via [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) and is configured for 'last 2 Chrome versions'.

## FontAwesome
[Font Awesome](http://fontawesome.io/) because it's a free, high-quality tool for integrating icons inside your html. It's provied by default in `package.json` and in the build procedure of `gulp`.

<br/><br/>

# IDE Choice: VSCode
However it's possible to run this starter-kit / boilerplate without the use of [VSCode](https://code.visualstudio.com/), I've chosen this as my editor of choice due to the native typescript support and it's wide availibilty on platforms. It's a personal preference, choose whatever IDE that makes you happy.
## Plugins
This template uses some [plugins for VSCode](https://marketplace.visualstudio.com/vscode) that are not necessary, but provide a comfortable working environment.
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) as it provides clear icons in the file explorer window
- [psioniq File Header Generator](https://marketplace.visualstudio.com/items?itemName=psioniq.psi-header) as it easily integrates auto generated top-header comments for files

<br/><br/>

# Using the project
## Config Object
The config object is there for your needs. It is set up to be a singleton. It reads it's information from the `./app/data/config.json` file that is being compiled using the gulp task `copy:cofig:configjson`. The base of the file is stored in `./src/data/config.json`. Feel free to **add** sections to it, but **do not delete** the sections *app, build, env, paths or flags* as the gulp task and the `Config` class rely on them being there.
### Getting info from config.json with Config object
The methods `get` and `hasKey` provide you with a *dot-syntax* (based upon the library [dot-object](https://github.com/rhalff/dot-object)) to get a value or see whether a key/path exists. There are other methods defined, such as `isProd()`, `isDev()` and more for ease of use, but most of the time you'll be relying on the `get(key: string)` method. Below is an example where we're getting out the name of the application.

```
const appName = Config.Instance.get('app.name');
console.log(`Running '${appName}'...`);

OUTPUT:
 > Running 'electron-starter'...
```
### config.json example
To see what's inside, here's an example output for the config.json file

```
{
   "app":{
      "name":"electron-starter",
      "version":"0.1.0",
      "author":"Yves Schelpe (ys@delegate-it.be)",
      "license":"MIT",
      "copyright":"Copyright © 2017 Delegate-IT.be"
   },
   "build":{
      "timestamp":"2017-01-29T18:03:47+01:00",
      "number":"20170129180347",
      "repository":{
         "type":"git",
         "url":"https://github.com/aredfox/electron-starter",
         "commit":"ff20d9c1efbb01b9c3b1c27d30e63acd67b36ee6"
      }
   },
   "env":{
      "id":"prod",
      "name":"production",
      "isProd":true,
      "isDev":false
   },
   "paths":{},
   "flags":{
      "canShowConsole":true,
      "showConsoleOnStartup":false
   }
}
```

<br/><br/>

# Known Issues
## @types/dot-object "return type void"
The current @typings/dot-object version has a method signature return `:void` for the method `pick`, you have to manually change this to `:any` until the issue is resolved. There's currently a [pull request](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/14320) for this on [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/14320). Feel free to go there to see the details.<br/>
**Workaround:** 
* after `npm install` go to the folder `node_modules/@types/dot-object/index.d.ts`
* change line 112 from `pick(path: string, obj: any, remove?: boolean): void;` to `pick(path: string, obj: any, remove?: boolean): any;`