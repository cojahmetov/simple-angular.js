
##![alt text](https://raw.githubusercontent.com/dman777/icons/master/angular.png)    Micro Angular.js Boiler Plate 
#####Version 0.5 Stable
######Todo: Clean up Gruntfile.js livereload directives

This is a micro boiler plate that runs Angular.js and Express.js with Grunt. It's intended audience is someone who wants something light weight - a simple boiler plate containing Angular.js with no testers, minifiers, etc. Perfect for diving into development right away. 

**Features automatic browser refresh(remote and local) on modified files with in /static.**




**Instructions:**

*(node's `npm` required- use your distro's package management system)*

1. Install grunt.js with `npm install -g grunt`.
2. Install bower with `npm install -g bower`.
3. In the same directory as `package.json` resides in, type in `npm install` to install local node dependencies.
4. In the same directory as `bower.json` resides in, type in `bower install` to install local app dependencies.
5. To start server, simply type `grunt` from the same directory as the `Gruntfile.js` resides in. 
   Hint: this is the same directory as step #2 and step #3.




**Gruntfile.js is set to listen on all interfaces by default on port 9000. Once you start your express.js server with `grunt` command, simply load browser to the ip address of the server. For example, if your host is `25.123.33.12`, type in the url window of the browser `25.123.33.12:9000`. 

**Optional: If you plan on only using `127.0.0.0:9000` in browser url, feel free to edit `Gruntfile.js` and uncomment the bottom line `grunt.task.run('open');` for automatic browser spawn when starting the express.js server. 



