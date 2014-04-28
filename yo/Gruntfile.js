module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        express: {
           prod: {
               options: {
                   port: 9000,
                   script: 'app.js',
	           fallback: function () {

               }
           }
        },

	open: {
	    delayed: {
		path: 'http://127.0.0.1:9000',
	        app: 'Google Chrome',
	        options: {
		    openOn: 'serverListening'
	        }
            }
	},

        watch: {
            options: {
                livereload: true
            },

	    express: {
		files: ['<%= pkg.name %>/static/**',
			'app.js'],
		tasks: ['express:prod'],
		options: {
		    spawn: false
		}
	    }
        }
    });
    grunt.registerTask('default', 'start server', function() {
        grunt.task.run('express');
        console.log("ssss");
        grunt.task.run('watch');
	if (!err) {
	    grunt.event.emit('serverListening');
	    }
    });
}

