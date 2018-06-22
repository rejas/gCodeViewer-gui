module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-makensis');
    grunt.loadNpmTasks('grunt-nw-builder');

    grunt.initConfig({
        compress: {
            win: {
                options: {
                    archive: './dist/gCodeViewer-win.zip'
                },
                files: [{
                    expand: true,
                    cwd: './dist/gcodeviewer2/win64/',
                    src: ['**/*'],
                    dest: '/gCodeViewer-gui'
                }]
            }
        },
        makensis: {
            win: {
                options: {
                    srcDir: 'dist\\gcodeviewer2\\win64\\',
                    buildDir: './dist',
                    appName: 'gCodeViewer',
                    setupName: '_installer'
                }
            }
        },
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
        }
    });

    grunt.registerTask('exe', [
        'nwjs',
        'makensis'
    ]);

    grunt.registerTask('zip', [
        'nwjs',
        'compress'
    ]);
};
