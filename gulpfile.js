var pkg = require('./package');
var gulp = require('gulp');
var flog = require('fancy-log');
var rimraf = require('rimraf');
var shell = require('gulp-shell');
var NwBuilder = require('node-webkit-builder');

gulp.task('build', ['clean'], function() {
    var nw = new NwBuilder({
        appName: pkg.window.title,
        appVersion: pkg.version,
        buildDir: 'dist',
        files: ['package.json', 'src/**'],
        macIcns: 'src/img/icon.icns',
        platforms: ['win','osx'],
        version: '0.10.1'
    });

    nw.on('log', flog);

    return nw.build().catch(flog);
});

gulp.task('clean', function (cb) {
    rimraf('dist', cb);
});

gulp.task('serve', shell.task([
    './node_modules/nodewebkit/bin/nodewebkit . --debug'
]));