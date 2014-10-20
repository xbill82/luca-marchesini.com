luca-marchesini.com
===================

This repository aims to share my experiments with **MVC libraries**, **responsive design frameworks** and **workflow automation tools** in the real world, since the website has no particular interest as open-source software (aside software development, I do some storytelling: this is my website as a storyteller in France). Also, I simply wanted to have a Git server and don't really bother to share my code with you all.

The Server-Side
---------------
The server-side is ridiculosly simple: some very basic PHP scripts provide the data required to fill the lists of gigs and claims (the "guestbook" area, basically "they say about me" stuff).
The scripts behave like a **REST**-ful service, even if the URLs are not formed in the pretty style that REST services use to feature (they use the old-fashioned HTTP GET variables).

The way the code is organized in these scripts follows the MVC pattern and is shamelessly inspired by the [Symfony Framework](http://symfony.com/).


The Client-Side
---------------
The Client-side is built on the [Marionette.js MVC library](marionettejs.com) and the Twitter [Bootstrap Responsive Mobile-first framework](getbootstrap.com). The Development code of the code is versioned in this repository, and the Production build is deployed on the server. The Production version is the result of some **build tasks** ran by [Grunt.js](http://gruntjs.com/).

### The UI and the UX
When thinking about what I wanted to provide as an experience to the users of my website, I managed to gather some basic requirements, mainly oriented to the type of audience that the site refers to. 

#### The "who"
The users I build my site for are the **storytelling audience** (people that go and pay a ticket to attend storytelling shows) and the **clients/buyers** (people that manage venues and/or a certain amount of money to program cultural events in such venues).

#### The "what"
As a storyteller, I expect my site to help me providing
  * a visual impression (something like a **corporate image**) that tells something really essential about me as an artist,
  * **demo-videos** and text pitches for my shows,
  * a **calendar** of the gigs to come (with all the useful details to reach the place and attend the show),
  * a "**What they say** about me" page, to show the degree of satisfaction of previous venue managers,
  * and, obviously, all my **contact details**.

#### The "how"
Before starting the design process, I studied all the other storyteller's websites and noticed that they use to be messy, buggy, overloaded of information and useless decoration. And, frankly, ugly (even if there are exceptions). And often they are very hard to use (on a desktop, and I'm not even talking about mobile).
I wanted to provide a reasonably beautiful, smooth and light experience to the users of my website.
I also believe that, as the time goes by, users will cease forgiving non-mobile-friendly websites, so I definitely wanted a **responsive, fast and simple** website, but yet I wanted it to be **visual** (*pictures and typography are part of the content*, since they define the coroporate image).

##### The Layout
Since I don't want the experience to be too different among different devices, the layout is "mobile-inspired" (ok, let's say **"mobile-first"**, since it's so hype to say that). You basically scroll down to access information. This is useful for me because it forces me to **organize the information in a hierarchical way**, putting the most important thing on top of the fold.
If the screen shrinks, the layout adapts to it, without changing the way the content is organized.
The role of the home-page is to welcome the user and to "headline" the different sections of the site. On top of the screen, I fixed **a navbar that allows quick access** to the pages of these sections.

##### The Typography
For the corporate image, Typography is one of the main vehicles of *meaning*, so this choice is definitely a crucial part of the design process. Photos tell the user *the way I look like*, but **typography tells the user the tone-of-voice** and provides emotional information about me. In some way, I could say that typography tells the user *the way I am*.
If I look at my work as an artist, I can say I am **sunny and passionate, loud and rough**, and I wanted typography to reflect these adjectives.

I've decided to write my name (which is some sort of logo, in the end) using **[TODO here]**, available on dafont.

[image here]

because it is sunny, passionate and loud. This font is available on Dafont.

I've chosen to write the headings in **Belta Regular**, 

![Belta Regular](http://www.dafont.com/img/preview/b/e/belta4.png)

Belta is available on [Dafont](http://www.dafont.com/fr/belta.font).

### Marionette.js and the client-side MVC pattern
There's no real point in using an MVC js library in a non-data-driven website like this one. Content is very simple and the user doesn't really interact with data. The separation of concerns proper to MVC patterns can be implemented server-side (in the way J2EE, Symfony and many other frameworks do) so, why bothering the client with a library like Marionette.js?

Well, because it's **hype** and I wanted to practice with it. No other point. 

Oh, well, maybe yes, rendering pages in the client lets the developer improve **transitions** between them.
Ok, let's put it this way: such a framework allows the developer to *really* polish the way pages are rendered, it's reasonably easy to put loaders almost everywhere, and (if the developer makes the effort) the user is never kept waiting without a visual feedback. But I didn't implement transitions yet, because pages are already loading reasonably fast.

On the other side, client-side MVC frameorks have severe drawbacks on the [critial rendering path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/) as we'll see below.

### Twitter Bootstrap and the Responsive Design
On the other hand, I wanted neat colors, whitespace, clear buttons with clear states, responsive classes, rock-solid UI elements, and all this with **as less effort as possible**.

I think interface design should be "invisible", which means that I don't need custom UI items to define my corporate identity, which is a bless, because custom UI items are expensive and difficult to mantain.

In my opinion, **UI should just _work_**. On desktop, tablet and mobile.

My intention was to use one of the existing responsive frameworks without the hassle of custom styling. The choice was between Foundation and Bootstrap, and the latter seemed fine to me, because of the **big community** built around it. A quick look to the [Bootstrap tag](https://stackoverflow.com/questions/tagged/bootstrap) on StackOverflow helped me in this choice, mostly because I knew I had to tweak things to get everything properly **optimized and squeezed**, as we will see below.

#### The Buttons
In this case, I rely on Bootsrap's default theme, because it provides beautiful and neat buttons.
Since the audience of my website is mostly composed by people that aren't very familiar with computers, I have to **prioritize the functional aspect of the buttons over their design** (no, my corporate image isn't enforced by fancy button design). Standard Bootstrap buttons are used on many sites, which makes them more **easily recognizable** on the page. Also, I needed the **call-to-action** to be clear, and so it is for these non-flat (slightly [skeuomorphic](https://en.wikipedia.org/wiki/Skeuomorph)) buttons.
Default Bootstrap buttons have **neat styles for every state**, so that the *click* or *tap* experience is enforced by visual feedback.

I also wanted to have **icons** on the buttons. I believe that, when the pixels are available, it is better to enforce the interaction by using both text and icons in buttons. The **text enforces the discoverability**, since the first time you click on a button, you're likely to be interested in the consequence of your action *before* you click. **The icon enforces user habits**, because it makes the button easier to find without reading all the labels.
Obviously, for the icons, I've choosen the awesome [FontAwesome](https://fortawesome.github.io/Font-Awesome/) iconic font.

### The Workflow
Starting a web project in 2014 is a clear chance to try out the latest workflow productivity patterns that make the buzz all over the community. Defining a workflow allows the developer to properly **separate tasks and understand the way these task can be automated**. I wanted my site to be ready for development and/or deployment on a machine with Git and Node.js within two or three commands, and this is now possible thanks to [Npm](https://www.npmjs.org/), [Grunt.js](http://gruntjs.com/) (although Gulp.js seems to be a very good alternative, I didn't try it and could not recomment one rather than the other) and [Bower.js](bower.io/).

#### Codebase vs Dependencies
When thinking about how to organize the code and the dependencies, **I didn't want to Git the dependencies**, just my own code, because I wanted to allow dependencies to evolve, have bugfixes and version control independently from my own code. That's what Npm and Bower are for. The only thing I had to keep in mind is version constraints. I struggled a bit to understand that I'd rather not always specify that I want the `latest` version of every library, since file trees can change, breaking Require.js paths and messing things up. So I paid attention to use the `~x.y.z` [version syntax](http://semver.org/), which makes the package manager get the latest version *compatible* with the specified one. Very convenient.

#### Optimization (let's be cool and call it Build!)
Since one of my goals was to achieve a decent Page Speed rank, I had to optimize **Js, CSS and images**. When optimization comes into play, most of the time I end up throwing away all the automated steps of the project and tweaking things manually in order to achieve minimum file size and best compression. But now things are different, a lot of smart people have been working on the problem. [R.js](http://requirejs.org/docs/optimization.html) optimizer is perfectly **integrated with Grunt** and can smoothly run in my `build` task. Same thing for the [LESS](http://lesscss.org/) compiler. Which is just *great*.

##### r.js and the useless files
Unfortunately I had to find a workaround for a quite annoying issue. When checking out packages with a manager like Npm or Bower.js, the whole git repository is downloaded, then **r.js scans the whole project tree for js and css files to uglify _everything_** (I didn't manage to change this behavior), daramatically slowing down the optimization task with useless computing. Also, I wanted to be able to choose which Bootstrap components to build in, in order to save space and bandwith, so I needed a way to **specify which files from every repository have to be included in the build process**.
Fortunately [`grunt-bower-task`](https://github.com/yatskevich/grunt-bower-task) allows it. 

That's what my Grunt `install` task is for, basically. 
 * Check-out the libs,
 * copy the necessary files to a separate `lib` directory (remember that I specfied version names in the package manager's config files, so that file paths will not break up).

So, while I'm coding, I load libraries from my `lib` path (instead of `bower-components` or `node-components`), and when I build, I'm sure that only the necessary sources are optimized and concatenated.

##### LESS and Bootstrap
Another issue I had is that **Bootstrap's** out-of-the-box built **stylesheet is just huge**, since it contains the styling for all the components. I didn't need all that, so I definitely had to optimize things. To do that, I centralized the building of my stylesheets in the `main.less` file, which linked together my own stylesheets with the ones that I needed from Bootstrap. Stylesheets are compiled and compressed by the [`grunt-contrib-less`](https://github.com/gruntjs/grunt-contrib-less), which is executed in my `install` (without compression) and `build` tasks.

##### The images
My Grunt `build` task also executes [`grunt-contrib-imagemin`](https://www.npmjs.org/.../grunt-contrib-imagemin) on all my images. **The size reduction is huge**, so I strongly recommend it. I use it in conjunction with [`grunt-newer`](https://github.com/tschaub/grunt-newer), which performs the minification only on files that have changed.

Once images are minified, they are **scaled delivered on-the-fly** by [Adaptive Images](http://adaptive-images.com/), depending on the client's screen resolution (just waiting for the `picture` HTML tag to wipe this out).

##### Typography
Typography is very important for my "brand" experience, and I don't want it to be loaded asynchronously because of [FOUC effects](https://en.wikipedia.org/wiki/Flash_of_unstyled_content). So, since I wante do inline web-fonts in my stylesheet (using the [base64 encoding](http://www.smashingmagazine.com/2011/03/02/the-font-face-rule-revisited-and-useful-tricks/)), typography represented a *lot* of data being transferred before any content could be rendered, so this needed some optimization. While for Belta I needed the whole typeset, I was sure something could be done for FontAwesome, since a really small subset of icons was used. Meet [Fontello](http://fontello.com/), an iconic font generator which let me choose which icons I wanted to select from FontAwesome (and some other fonts, or even custom SVGs) to compose my own, optimized iconic font. At the time being, the font I use was created by hand on the website, which means that if I need to add a new icon, I have to repeat the whole process again (and I don't even have a clear list of the icons I use written somewhere). Fortunately, Fontello has a [web API](https://github.com/fontello/fontello#developers-api) that allow developers to programmatically generate iconic fonts (yes, it supports [Grunt integration](https://github.com/jubalm/grunt-fontello)).

#### Deployment
Since my web-hosting provider doesn't allow me to make a pull from GitHub (mutualized servers don't allow external connections), I have to deploy my code by FTP. So, in order to automate that, **I need a Grunt task that synchronizes the remote server with my build tree by FTP**.
Unfortunately, **none of the available tools worked for me**, so this is the only step I still do by hand.

### The Page Speed Index
Google recently released some great tools to let us improve the quality of our web applications. These tools are either tutorials and how-tos, technical guidelines, and proper apps that test your site from different perspectives. One of them is the [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/).

The great thing about this tool is not only that it gives you a score based on the speed that your site loads, but it also gives you some great advices on how to improve your score.
Here's some tricks that I introduced to improve my score:
  * [the Gzip Compression](https://developers.google.com/speed/docs/insights/EnableCompression),
  * [leveraging the browser cache](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching)
My score is currently still sucking (specially on mobile) so I still have a lot of work to do.
One big bottleneck that I found is that, since I'm using an MVC library, I can't deliver any content before the library (and its dependencies) are loaded. This means that, before the first bit of content received, the use has already downloaded, like, 350Kb of data, which is huge specially on mobile.
