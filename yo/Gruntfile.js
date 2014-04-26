module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	watch {
	    servedFiles: {
		files : '<%= pkg.name %>/static/**'
	    },
	    options: {
	      livereload: {
	          port: 9000,
		  hostname: 0.0.0.0,


        
    });


