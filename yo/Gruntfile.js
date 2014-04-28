module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        express: {
           prod: {
               options: {
                   port: 9000,
                   script: 'app.js',
               }
           }
        },

	open: {
	    prod: {
		path: 'http://127.0.0.1:9000',
            }
	},
	reload: {
	    port: 9000,
	    proxy: {
		host: '127.0.0.0'
	    }
	},

        watch: {


	    express: {
		files: ['<%= pkg.name %>/static/**',
			'app.js'],
		tasks: ['express:prod'],
		options: {
		    spawn: false,
		    livereload: true
		}
	    }
        }
    });
    grunt.registerTask('default', 'start server', function() {
        grunt.task.run('express');
        grunt.task.run('open');
        grunt.task.run('watch');
    });
}

