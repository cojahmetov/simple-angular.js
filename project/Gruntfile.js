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
	    port: 35728,
	    proxy: {
		host: '0.0.0.0'
	    }
	},
	bowerInstall: {
	    app: {
	      src: ['<%= pkg.name %>/static/index.html'],
	    }
	},
	//Todo: clean up file path directives
        watch: {
	    express: {
		files: ['<%= pkg.name %>/static/**',
			 '<%= pkg.name %>scripts/**',
			'app.js'],
		tasks: ['express:prod'],
		options: {
		    spawn: false,
		    livereload: true
		}
	    },
		files: ['<%= pkg.name %>/static/**',
		        '<%= pkg.name %>/scripts/**',
			'app.js'],
		tasks: ['reload'],
        }
    });
    grunt.registerTask('default', 'start server', function() {
        grunt.task.run('express');
        //  Uncomment grunt.task.run('open') if you plan on running on running on 
        //  just 127.0.0.1 rather than all interfaces 0.0.0.0
        //grunt.task.run('open');
        grunt.task.run('bowerInstall');
        grunt.task.run('watch');
    });
}

