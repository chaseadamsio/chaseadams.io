---
date: 2013-11-18T00:00:00.000Z
title: 5 Grunt Plugins for a Better Workflow
tags:
  - GruntJS
  - JavaScript
  - Build Tools
  - Automation
aliases:
  - /posts/5-grunt-plugins-for-a-better-workflow
  - /2013/5-useful-grunt-plugins/
  - /2013-11-18-5-useful-grunt-plugins/
  - /2013/11/5-useful-grunt-plugins/
description: Learn about 5 Grunt build tool plugins to optimize your workflow.
permalink: /posts/5-useful-grunt-plugins/
type: post
status: published
---



Grunt has become the build tool/task manager standard for javascript developers and empowered us to take control of our workflows. Better workflows mean better productivity, and Grunt has some great plugins for maximizing that productivity.

I wanted to write a [Javascript cookie manager utility](https://github.com/chaseadamsio/cookiejar), knowing full well that I was reinventing the wheel, so that I could learn how to write better Javascript as well as play with grunt.

I found that when writing any kind of javascript utility or framework, there are a few tasks that I consider standard for my projects: Watching files for changes and running tasks, checking my javascript for code consistency, running functional tests, minifying javascript and a way for the system to alert me when something goes wrong.

_A quick note: All of these tasks leverage minimatch, a 'minimal matching' utility that I highly recommend reading up on if you haven't already:_ [minimatch on GitHub](https://github.com/isaacs/minimatch)

## Grunt Watch: So you can just work

[grunt-contrib-watch on GitHub](https://github.com/gruntjs/grunt-contrib-watch)

I rarely, if ever, create a Grunt file without including watch. Being able to run `grunt watch` and know that I don't need to run my tasks over and over again allows me to shave of huge amounts of time having to context switch between the terminal and my editor.

For my cookie manager utility, this is what my watch task looks like:

Watch is pretty straight forward:

- Give it parameters for files you want to watch.
- Tell it what tasks you want to run.

Your watch task can get pretty complex with options, but I keep mine basic by just enabling livereload (which will refresh my browser automatically).

## JSHint: For Writing Consistent Javascript

[grunt-contrib-jshint on GitHub](https://github.com/gruntjs/grunt-contrib-jshint)

JSHint allows you to write cleaner, more consistent javascript. You can define your project's code standards by creating a `.jshintrc`. As most everything javascript, it's an object with key/value pairs of what standards you want to follow.

Like watch, the jshint task can be pretty simple, just pass it a minimatch array of files you want it to check and you're on your way. One extra option that I didn't show in the example above is the `beforeconcat` and `afterconcat` options. This allows you to run jshint on your source files before and your concatenated files after.

## Mocha: Automated Unit Testing

[grunt-mocha on GitHub](https://github.com/kmiyashiro/grunt-mocha)

Unit testing (or any formal testing for that matter), seems to me to be the most under-utilized tool most front-end developers have. As developers, we could save a lot of time simply by leveraging unit tests to make sure we don't break or regress code we've already written. Thankfully, there are a lot of great testing frameworks out there, and Mocha is the one that I like to use, because it allows you to run client-side unit tests in a headless browser.

_If all of that sounded like white noise, I'd check out Smashing Magazine's [Introdution to Javascript Testing](https://coding.smashingmagazine.com/2012/06/27/introduction-to-javascript-unit-testing/)._

This task is simple (starting to see a pattern here?), you tell it where your test file[s] lives and tell it to use PhantomJS. Badabing, you are now unit testing your javascript!

([Installation instructions for PhantomJS](https://phantomjs.org/download.html))

## Notify:

[grunt-notify on GitHub](https://github.com/dylang/grunt-notify)

I like to tie all of these tasks together with the Notify task. Notify will use whatever system notification application you use (Growl, notify-send, Snarl or OSX Notification Center) to alert you when something is complete or fails.

If you're running jshint or mocha, this is a great tool because it allows you to write your javascript, save your file and continue on without having to confirm everything passed in your terminal.

When something fails, grunt-notify will alert you with a notification that looks like this:

![Growl example of grunt-notify](https://f.cloud.github.com/assets/51505/982676/43c372da-0814-11e3-89e5-0cb0f45f50e1.png)

## Uglify

[grunt-contrib-uglify on GitHub](https://github.com/gruntjs/grunt-contrib-uglify)

The last task I always have in any project I create is the Uglify task. This task allows you to minify and obfuscate your javascript, which basically just means less code to do the same stuff.

I also like to add a banner with the package name, the package version, where the package lives and a timestamp.

## Your Unique Workflow

Not all workflows are created equal, and it's likely that there are far superior workflows to this one out there. This is an example of me learning by doing and finding what works for me.

**What are you doing to be more productive in creating your development projects? Do you have anything you'd add to make this one better?**
