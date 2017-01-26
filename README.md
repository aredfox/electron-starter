# electron-gulp-ts-less-react
Opinionated [electron](https://electron.atom.io) boilerplate / template working with gulp, typescript, less, react and [VSCode](https://code.visualstudio.com/)

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