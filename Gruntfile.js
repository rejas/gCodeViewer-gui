module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-makensis');
    grunt.loadNpmTasks('grunt-nw-builder');

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
            options: {
                srcDir: './dist/gCodeViewer/win64/',
                buildDir: './dist/gCodeViewer/exe/',
                appName: 'gCodeViewer',
                setupName: '_installer'
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
