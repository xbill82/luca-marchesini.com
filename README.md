luca-marchesini.com
===================

This repository aims to share my experiments with **MVC libraries**, **responsive design frameworks** and **workflow automation tools** in the real world, since the website has no particular interest (aside software development, I do some storytelling: this is my website as a storyteller in France). Also, I simply wanted to have a Git server and don't really bother to share my code with you all.

The Server-Side
---------------
The server-side is ridiculosly simple: some very basic PHP scripts provide the data required to fill the lists of gigs and claims (the "guestbook" area, basically "they say about me" stuff).
The scripts behave like a **REST**-ful service, even if the URLs are not formed in the pretty style that REST services use to feature (they use the old-fashioned HTTP GET variables).

The Client-Side
---------------
The Client-side is built on the [Marionette.js MVC library](marionettejs.com) and the Twitter [Bootstrap Responsive Mobile-first framework](getbootstrap.com). The Development version of the code is versioned in this repository, but the Production version is deployed on the server. The Production version is the result of some **build tasks** ran by [Grunt.js](http://gruntjs.com/).
