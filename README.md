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

### The UI and the UX
When thinking bout what I wanted to provide as an experience to the users of my website, I managed to gather some basic requirements, mainly oriented to the type of audience that the site refers to. 

#### The "who"
The users I build my site for are the **storytelling audience** (people that go and pay a ticket to attend storytelling shows) and the **clients/buyers** (people that manage venues and/or a certain amount of money to program cultural events in such venues).

#### The "what"
As a storyteller, I expect my site to help me providing
  * a visual image (something like a **corporate image**),
  * **demo-videos** and textual pitch for my shows,
  * a **calendar** of the gigs to come (with all the useful details to reach the place and attend the show)
  * and, obviously, all my **contact details**.

#### The "how"
Before starting the design process, I studied all the other storyteller's websites and noticed that they use to be messy, buggy, overloaded of information and overloaded of useless decoration. And, frankly, ugly (even if there are exceptions). But still, the worse thing is that they are often hard to use (on a desktop, I'm not even talking about mobile).
I wanted to provide a reasonably beautiful, smooth and light experience to the users of my website, and I believe that as the time goes by, users will cease forgiving non-mobile-friendly websites.
So, my conclusion was that I wanted a **beautiful, responsive, fast and simple**, but yet, I wanted to be **visual** (*pictures and typography are part of the content*, since they define the coroporate image).

##### The Layout

##### The Typography

### Marionette.js and the MVC pattern

### Twitter Bootstrap and the Responsive Design

### The Workflow
