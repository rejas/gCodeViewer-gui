module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        nwjs: {
            options: {
                buildDir: './dist',
                flavor: 'normal',
                platforms: ['win64'],
                version: 'latest',
                zip: true
            },
            files: {
                dot: true,
                src: ['./gCodeViewer/**/*']
            }
        },
        compress: {
            win: {
                options: {
                    archive: './dist/win.zip'
                },
                files: [{
                    expand: true,
                    cwd: './dist/svgo-gui/win64/',
                    src: ['**/*'],
                    dest: '/gCodeViewer-gui'
                }]
            }
        }
    });

    grunt.registerTask('default', [
        'nwjs',
        'compress'
    ]);
};
