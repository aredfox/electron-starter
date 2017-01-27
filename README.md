# electron-gulp-ts-less-react
Opinionated [electron](https://electron.atom.io) boilerplate / template working with gulp, typescript, less, react and [VSCode](https://code.visualstudio.com/)

## Get Started
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

## Gulp
This project uses [gulp](http://gulpjs.com/) as the task-runner for managing the build process. By making use of the [gulp-require-tasks](https://www.npmjs.com/package/gulp-require-tasks) module, we're able to load the gulp tasks from the folder './gulp/tasks'. We use [load-plugins](https://www.npmjs.com/package/load-plugins) to automatically make plugins available inside the tasks.
Below is an outline of a task's structure:
```
module.exports = {
    dep: [],
    fn: function (gulp, callback, plugins) {        
            plugins.util.log('You can log messages as well with gulp-util, accessible via plugins.util.');
            return 
                gulp.src(...)
                .pipe(plugins.concat())
                .pipe(plugins.someOtherPlugin());
    }
};
```

## VSCode
However it's possible to run this starter-kit / boilerplate without the use of [VSCode](https://code.visualstudio.com/), I've chosen this as my editor of choice due to the native typescript support and it's wide availibilty on platforms. It's a personal preference, choose whatever IDE that makes you happy.
### Plugins
This template uses some [plugins for VSCode](https://marketplace.visualstudio.com/vscode) that are not necessary, but provide a comfortable working environment.
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) as it provides clear icons in the file explorer window
- [psioniq File Header Generator](https://marketplace.visualstudio.com/items?itemName=psioniq.psi-header) as it easily integrates auto generated top-header comments for files