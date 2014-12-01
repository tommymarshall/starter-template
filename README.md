VayCayHero
============

Source files for building and modifying VayCayHero buildout code.

If you are new to Gulp, Browserify, or build tools in general be sure to check out the [blog post](http://viget.com/extend/gulp-browserify-starter-faq) for more context and the [Wiki](https://github.com/greypants/gulp-starter/wiki) for some additional background knowledge.

Includes the following tools, tasks, and workflows:

- [Browserify](http://browserify.org/) (with [browserify-shim](https://github.com/thlorenz/browserify-shim))
- [Watchify](https://github.com/substack/watchify) (caching version of browserify for super fast rebuilds)
- [SASS](http://sass-lang.com/) (with [compass](http://compass-style.org/) and [source maps](https://github.com/sindresorhus/gulp-ruby-sass#sourcemap)!)
- [Swig](http://paularmstrong.github.io/swig/) templating
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- Image optimization
- Error Notifications in Notification Center

If you've never used Node or npm before, you'll need to install Node. If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp Globally

Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*

```
npm install -g gulp
```

Alternatively, you can run the version of gulp installed local to the project instead with

```
./node_modules/.bin/gulp
```
### Install npm dependencies

```
npm install
```

This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp to start development

```
gulp
```

This will run the `default` gulp task defined in `gulp/tasks/default.js`, which does the following:
- Run 'watch', which has 2 task dependencies, `['setWatch', 'browserSync']`
- `setWatch` sets a variable that tells the browserify task whether or not to use watchify.
- `browserSync` has `build` as a task dependecy, so that all your assets will be processed before browserSync tries to serve them to you in the browser.
- `build` includes the following tasks: `['browserify', 'fonts', 'sass', 'images', 'markup']`
- Compile and move these files to `build/` folder, and be served on your localhost at port 3000.
- Run appropriate tasks on when source files change and refresh the browser.

### Configuration
All paths and plugin settings have been abstracted into a centralized config object in `gulp/config.js`. Adapt the paths and settings to the structure and needs of your project.

### Project Structure

#### Javascript

Javascript source files (files stored in `src/javascript/`) are compiled via Browserify using the CommonJS pattern to manage dependancies. Picture each file as a component with a single purpose. 

Components are initialized via markup by referencing the component in a data attribute like 

```html
<button data-component="componentName">Component</button>
```

All components are listed in `src/javascript/components/index.js`. 

One example is a Read More button which displays hidden content. This button utilizes the Toggler component (`src/javascript/components/toggler.js`) which adds a `-active` class to the `data-target`. This component is initalized by referencing the Toggler component like so:

```html
<button data-component="toggler" data-target="#more">Read more</button>
<div id="more">
  <p>...</p>
</div>
```

#### Stylesheets (SASS)

Javascript source files (stored in `src/sass/`) are compiled via libsass. Much like Javascript components, styles are organized as components (stored in `src/sass/components/`) and are included in a master CSS stylesheet saved at `src/sass/app.scss`.

Base (non-specific) styles, like typography, lists, buttons, etc. are saved in `src/sass/base/` folder. 

#### Markup (Swig)

All markup is stored in `src/htdocs/` folder and utilizes Swig syntax.

[Swig](http://paularmstrong.github.io/swig/) is a simple templating language which allows for, amoung other things, including partials and extending layouts in a way that static HTML cannot. *All swig files are compiled to HTML and saved in `build/` folder.*

Resuable code, such as the header and footer, are stored in `src/htdocs/_shared/` to be included in the base layout saved at `src/htdocs/_layouts/base.html`.
