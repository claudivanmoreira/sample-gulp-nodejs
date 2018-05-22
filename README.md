# Sample project using NodeJS with Gulp.js 

Basic template of a NodeJS project with Gulp.

### Initial Plugins

The initial configuration consists of the following plugins:

| Plugin | README |
| ------ | ------ |
| gulp-sass | https://www.npmjs.com/package/gulp-sass |
| gulp-connect | https://www.npmjs.com/package/gulp-connect |
| gulp-uglify | https://www.npmjs.com/package/gulp-uglify |
| gulp-concat | https://www.npmjs.com/package/gulp-concat |
| gulp-imagemin | https://www.npmjs.com/package/gulp-imagemin |
| gulp-clean | https://www.npmjs.com/package/gulp-clean |

### Gulp Tasks
- clean -- Delete generated **dist** folder;
- html -- Copy all files with extension **.html** to folder *dist/*
- sass -- Process all files with extension **.scss** and copy to folder *dist/assets/css*
- js -- Concatenates and minify all **.js** files in a single file **bundle.js** and copy to folder *dist/assets/js*
- img -- Optimize image files and copy to folder *dist/assets/imgs*
- vendor -- Copy all files from *src/assets/vendor* to folder */dist/assets/vendor*
- connect -- Start the node server in url http://localhost:8080
- watch -- Monitors changes in .html, .js, .scss, etc... files executes the corresponding task when any modification is performed.

### Instalation

```sh
$ git clone https://github.com/claudivanmoreira/template-gulp-nodejs.git
```

Access the folder by terminal and run the command below to download the project dependencies:

```sh
$ npm install
```

### Testing

Access by terminal the folder where is the **gulpfile.js**  and run the commands below.

- Performing Individual Tasks:
```sh
$ gulp clean
```
```sh
$ gulp sass
```
- Performing all Tasks (Recomended) -- Starts the node server and listens for file modification events:
```sh
$ gulp
``` 
Now just access the URL http://localhost:8080 in the browser.