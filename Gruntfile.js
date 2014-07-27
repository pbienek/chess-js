module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: ['css/*.css'],
                tasks: ['concat', 'cssmin']
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify']
            }

        },
        uglify: {
            build: {
                src: 'js/complete.js',
                dest: 'js/complete.min.js'
            }
        },
        cssmin: {
            compress: {
                files: {
                    'css/complete.min.css': ['css/complete.css']
                }
            }
        },

        concat: {
            css: {
                src: ['css/normalize.css', 'css/main.css'],
                dest: 'css/complete.css'
            },
            scripts: {
                src: ['js/underscore.min.js',
                      'js/game.js',
                      'js/utils.js',
                      'js/movement.js',
                      'js/checkMove.js',
                      'js/finalise.js',
                      'js/search.js',
                      'js/evaluate.js',
                      'js/ai.js',
                      'js/interface.js',
                      'js/canvasInterface.js'],
                dest: 'js/complete.js'
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};