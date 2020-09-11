---
date: 2013-11-11T00:00:00.000Z
title: How I Use Grunt And Bower for Frontend Packages
aliases:
  - /2013/11/11/grunt-build-and-bower-package-management/
  - /posts/how-i-use-grunt-and-bower-for-frontend-packages
  - /2013/grunt-build-and-bower-package-management/
  - /2013-11-11-grunt-build-and-bower-package-management/
  - /2013/11/grunt-build-and-bower-package-management/
description: Learn how to use grunt and bower for a frontend workflow
tags:
  - JavaScript
  - GruntJS
  - Bower
  - Frontend Engineer
permalink: /posts/grunt-build-and-bower-package-management/
type: post
status: published
---



Frontend package management has quickly become a lot more, well...manageable since the release of [Bower](https://www.bower.io) & [Grunt](https://www.gruntjs.com). Here's how I manage frontend dependencies in my projects.

Bower has made it incredibly easy to install frontend packages (such as jQuery, Underscore, Backbone, Angular, the list goes on) and manage updates without the hassle of manually copying and pasting files into your projects or adding git submodules.

To get started using bower and grunt, you'll need to have [Node](https://nodejs.org) and [npm](https://npmjs.org) already installed. Once you have them installed, from your command line, run **`npm install -g bower`**, and let npm take care of pulling it in and setting it up for you. The -g flag is making bower available globally, so you don't have to install it every time.

**For convenience, I've added a working gist that can be cloned to your local box and run: [Gist: Using Grunt and Bower for Frontend Package Management](https://gist.github.com/7369801.git).**

## Harness the Power of Bower

The first thing you'll want to do is run **`bower init`** which will generate your _`bower.json`_ file and add the name, version, authors, license and ignore properties. This is also where all of your package definitions will be so when you pull this project down on a different computer or work with someone else, they can install all of the packages with one command.

Now that Bower is installed and initialized, let's setup our project's bower configuration. I don't like the name _`bower_components`_ for the directory we're going to store it in, so create a file called _`.bowerrc`_ in the root of your project's path, and add the following options:

```json
{
  "directory": "src/_lib",
  "json": "bower.json"
}
```

We're overwriting the default directory of _`bower_components`_ and defining the name of the package manifest.

### Installing Our Packages

In the project example, we'd like to use a few frontend packages:

- font-awesome
- underscore
- jquery
- requirejs

If we want to find a package, for example font-awesome, but we don't know the name, we can run **`bower search font-awesome`**, which will return a list of results. Looks like the package we want is called 'font-awesome', so the next thing we can do is run **`bower install font-awesome --save`**. This command will pull down the font-awesome package into _`src/_lib`_ and make it ready for us to use. If you take a peek into your _`bower.json`_ file, you'll see that the command also added font-awesome to your json file, so that it is now available for anyone else who uses your project to pull all the dependencies in with **`bower install`**.

Run **`bower install underscore --save`**, for each dependency until you've installed them all.

## Workflow Using Grunt

I am a huge proponent of using [Grunt as a build tool](/2013/11/07/using-grunt-for-a-better-workflow/), especially for frontend, so it only makes sense that we'd use it here!

One of the "downsides" of package management with Bower is that it pulls in a lot of extra cruft, all the tests, configuration files, README.md files, anything that's in version control, and when we're developing, we don't need all of it, so we can use Grunt to build only the files we need into our target directory.

Once you've gone through the steps to add **uglify** &amp; **copy** grunt-contrib plugins, add options to your Gruntfile.js grunt config:

```js
var pkgjson = require('./package.json');

var config = {
  pkg: pkgjson,
  app: 'src',
  dist: 'dist'
}

module.exports = function (grunt) {

  // Configuration
  grunt.initConfig({
    config: config,
    pkg: config.pkg,
    bower: grunt.file.readJSON('./.bowerrc'),
    copy: {
      dist: {
       files: [{
         expand: true,
         cwd: '<%= config.app %>/_lib/font-awesome',
         src: 'css/font-awesome.min.css',
         dest: '<%= config.dist %>'
       },
       {
         expand: true,
         cwd: '<%= config.app %>/_lib/font-awesome',
         src: 'fonts/*',
         dest: '<%= config.dist %>'
       }]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> lib - v<%= pkg.version %> -' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        files: {
          '<%= config.dist %>/js/lib.min.js': [
            '<%= bower.directory %>/jquery/jquery.js',
            '<%= bower.directory %>/underscore/underscore.js',
            '<%= bower.directory %>/requirejs/require.js',
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'copy',
    'uglify'
  ]);
};
```

This Gruntfile will only be running a few tasks, but they're really convenient from a frontend development workflow:

- Copy Font-Awesome's minified css file into a _/css_ directory in our target.
- Copy Font-Awesome's fonts into a _/fonts_ directory in our target.
- Create a minified _`lib.min.js`_ of all of the javascript dependencies we have with a banner and place it in a _/js_ directory in our target.

When you run **`grunt`**, your dependencies will be put where they need to go and minified, so when you build, you can rest easy you don't have to manually add packages, and as you upgrade your dependencies, grunt will still continue to upgrade your target version of them whenever you run it.

## Last Steps

In my _`.gitignore`_, I add the following directories: _`dist`_ &amp; _`src/_lib`_ (or whatever your bower directories name is). There's a lot of debate about whether or not to version control your dependencies, and I tend to fall on the side of not doing it. For me, I don't have a good reason to version control something that's already version controlled, so it keeps my projects a little lighter.

**If you decide to start using Grunt and Bower, let me know, and show me how you did it! Seeing something you think isn't so great in my workflow? I'd be interested to hear other's opinions on good practices.**
