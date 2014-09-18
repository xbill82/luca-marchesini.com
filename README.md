luca-marchesini.com
===================

This repository aims to share my experiments with **MVC libraries**, **responsive design frameworks** and **workflow automation tools** in the real world, since the website has no particular interest as open-source software (aside software development, I do some storytelling: this is my website as a storyteller in France). Also, I simply wanted to have a Git server and don't really bother to share my code with you all.

The Server-Side
---------------
The server-side is ridiculosly simple: some very basic PHP scripts provide the data required to fill the lists of gigs and claims (the "guestbook" area, basically "they say about me" stuff).
The scripts behave like a **REST**-ful service, even if the URLs are not formed in the pretty style that REST services use to feature (they use the old-fashioned HTTP GET variables).

The way the code is organized in these scripts respects the MVC pattern.


The Client-Side
---------------
The Client-side is built on the [Marionette.js MVC library](marionettejs.com) and the Twitter [Bootstrap Responsive Mobile-first framework](getbootstrap.com). The Development version of the code is versioned in this repository, but the Production version is deployed on the server. The Production version is the result of some **build tasks** ran by [Grunt.js](http://gruntjs.com/).

### The UI and the UX
When thinking bout what I wanted to provide as an experience to the users of my website, I managed to gather some basic requirements, mainly oriented to the type of audience that the site refers to. 

#### The "who"
The users I build my site for are the **storytelling audience** (people that go and pay a ticket to attend storytelling shows) and the **clients/buyers** (people that manage venues and/or a certain amount of money to program cultural events in such venues).

#### The "what"
As a storyteller, I expect my site to help me providing
  * a visual image impression (something like a **corporate image**) that tells something really essential about me as an artist,
  * **demo-videos** and textual pitch for my shows,
  * a **calendar** of the gigs to come (with all the useful details to reach the place and attend the show)
  * and, obviously, all my **contact details**.

#### The "how"
Before starting the design process, I studied all the other storyteller's websites and noticed that they use to be messy, buggy, overloaded of information and overloaded of useless decoration. And, frankly, ugly (even if there are exceptions). But still, the worse thing is that they are often hard to use (on a desktop, I'm not even talking about mobile).
I wanted to provide a reasonably beautiful, smooth and light experience to the users of my website, and I believe that as the time goes by, users will cease forgiving non-mobile-friendly websites.
So, my conclusion was that I wanted a **beautiful, responsive, fast and simple**, but yet, I wanted to be **visual** (*pictures and typography are part of the content*, since they define the coroporate image).

##### The Layout
Since I don't want the experience to be too different among different devices, the layout is "mobile-inspired" (ok, let's say "mobile-first", since it's so hype to say that). You basically scroll down to access information. This is useful for me because it forces me to organize the information in a hierarchical way, putting the most important thing on top of the fold.
If the screen shrinks, the layout adapts itself to it, without changing its the way the content is organized.
The role of the home-page is to welcome the user and to "headline" the different sections of the site, while on top of the screen, I fixed a navbar that allow quick access to the pages of these sections.

##### The Typography
In my website, I use typography as one of the main vehicles of *meaning*, so this choice is definitely a crucial part of the design process. Photos tell the user *the way I look like*, but typography gives the user the tone-of-voice and many other things. In some way, I could say that typography tells the user *the way I am*.
If I look at the way I work as an artist, I can say I am **sunny and passionate, loud and rough**, and I wanted typography to reflect these adjectives.

I've decided to write my name (which is some sort of logo, in the end) using **[TODO here]**, available on dafont.

[image here]

because it is sunny, passionate and loud.
For the "rough" part, I've chosen to write the headings in **Belta Regular**, 

![Belta Regular](http://www.dafont.com/img/preview/b/e/belta4.png)

also available on [Dafont](http://www.dafont.com/fr/belta.font).

### Marionette.js and the client-side MVC pattern
There's no real point in using an MVC js library in a non-data-driven website like this one. Content is very simple the user doesn't really interact with data. The separation of concerns proper to MVC patterns can be implemented server-side (in the way J2EE, Symfony and many other frameworks do) so, why bothering the client with a library like Marionette.js?

Well, because it's **hype** and I wanted to practice with it. No other point. 

Oh, well, maybe yes, the **transitions** between pages (which are not implemented yet). Ok, let's put it this way: such a framework allows the developer to *really* polish the way pages are rendered, it's reasonably easy to put loaders almost everywhere, and (if the developer makes the effort) the user is never kept waiting without a visual feedback. But I didn't implement transitions yet.

Instead, I've been studying the optimization strategies and the [critial rendering path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/) and we'll see below that using an MVC framework is a blocking point for page speed ranking and content delivery performance.

### Twitter Bootstrap and the Responsive Design


### The Workflow

### The Page Speed Index
