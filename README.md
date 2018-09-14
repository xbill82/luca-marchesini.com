# luca-marchesini.com

This repository aims to share my experiments with **MVC libraries**, **responsive design frameworks** and **workflow automation tools** in the real world, since the website has no particular interest as open-source software (aside software development, I do some storytelling: this is my website as a storyteller in France). Also, I simply wanted to have a Git server and don't really bother to share my code with you all.

## The Server-Side

There is no server side, this is a static website.

## The Client-Side

NuxtJS.

### The UI and the UX

When thinking about what I wanted to provide as an experience to the users of my website, I managed to gather some basic requirements, mainly oriented to the type of audience that the site refers to.

#### The "who"

The users I build my site for are the **storytelling audience** (people that go and pay a ticket to attend storytelling shows) and the **clients/buyers** (people that manage venues and/or a certain amount of money to program cultural events in such venues).

#### The "what"

As a storyteller, I expect my site to help me providing

- a visual impression (something like a **corporate image**) that tells something really essential about me as an artist,
- **demo-videos** and text pitches for my shows,
- a **calendar** of the gigs to come (with all the useful details to reach the place and attend the show),
- a "**What they say** about me" page, to show the degree of satisfaction of previous venue managers,
- and, obviously, all my **contact details**.

#### The "how"

Before starting the design process, I studied all the other storyteller's websites and noticed that they use to be messy, buggy, overloaded of information and useless decoration. And, frankly, ugly (even if there are exceptions). And often they are very hard to use (on a desktop, and I'm not even talking about mobile).
I wanted to provide a reasonably beautiful, smooth and light experience to the users of my website.
I also believe that, as the time goes by, users will cease forgiving non-mobile-friendly websites, so I definitely wanted a **responsive, fast and simple** website, but yet I wanted it to be **visual** (_pictures and typography are part of the content_, since they define the coroporate image).

##### The Layout

Since I don't want the experience to be too different among different devices, the layout is "mobile-inspired" (ok, let's say **"mobile-first"**, since it's so hype to say that). You basically scroll down to access information. This is useful for me because it forces me to **organize the information in a hierarchical way**, putting the most important thing on top of the fold.
If the screen shrinks, the layout adapts to it, without changing the way the content is organized.
The role of the home-page is to welcome the user and to "headline" the different sections of the site. On top of the screen, I fixed **a navbar that allows quick access** to the pages of these sections.

##### The Typography

For the corporate image, Typography is one of the main vehicles of _meaning_, so this choice is definitely a crucial part of the design process. Photos tell the user _the way I look like_, but **typography tells the user the tone-of-voice** and provides emotional information about me. In some way, I could say that typography tells the user _the way I am_.
If I look at my work as an artist, I can say I am **sunny and passionate, loud and rough**, and I wanted typography to reflect these adjectives.

I've decided to write my name (which is some sort of logo, in the end) using **[TODO here]**, available on dafont.

[image here]

because it is sunny, passionate and loud. This font is available on Dafont.

I've chosen to write the headings in **Belta Regular**,

![Belta Regular](http://www.dafont.com/img/preview/b/e/belta4.png)

Belta is available on [Dafont](http://www.dafont.com/fr/belta.font).

### Twitter Bootstrap and the Responsive Design

On the other hand, I wanted neat colors, whitespace, clear buttons with clear states, responsive classes, rock-solid UI elements, and all this with **as less effort as possible**.

I think interface design should be "invisible", which means that I don't need custom UI items to define my corporate identity, which is a bless, because custom UI items are expensive and difficult to mantain.

In my opinion, **UI should just _work_**. On desktop, tablet and mobile.

My intention was to use one of the existing responsive frameworks without the hassle of custom styling. The choice was between Foundation and Bootstrap, and the latter seemed fine to me, because of the **big community** built around it. A quick look to the [Bootstrap tag](https://stackoverflow.com/questions/tagged/bootstrap) on StackOverflow helped me in this choice, mostly because I knew I had to tweak things to get everything properly **optimized and squeezed**, as we will see below.

#### The Buttons

In this case, I rely on Bootsrap's default theme, because it provides beautiful and neat buttons.
Since the audience of my website is mostly composed by people that aren't very familiar with computers, I have to **prioritize the functional aspect of the buttons over their design** (no, my corporate image isn't enforced by fancy button design). Standard Bootstrap buttons are used on many sites, which makes them more **easily recognizable** on the page. Also, I needed the **call-to-action** to be clear, and so it is for these non-flat (slightly [skeuomorphic](https://en.wikipedia.org/wiki/Skeuomorph)) buttons.
Default Bootstrap buttons have **neat styles for every state**, so that the _click_ or _tap_ experience is enforced by visual feedback.

I also wanted to have **icons** on the buttons. I believe that, when the pixels are available, it is better to enforce the interaction by using both text and icons in buttons. The **text enforces the discoverability**, since the first time you click on a button, you're likely to be interested in the consequence of your action _before_ you click. **The icon enforces user habits**, because it makes the button easier to find without reading all the labels.
Obviously, for the icons, I've choosen the awesome [FontAwesome](https://fortawesome.github.io/Font-Awesome/) iconic font.

### Internationalization

Since my storytelling activity is done mainly in France, I don't need any internationalization at the moment. Still I could have introduced it from the beginning because maybe one day I'll need it. Argh!

### The Workflow

Starting a web project in 2014 is a clear chance to try out the latest workflow productivity patterns that make the buzz all over the community. Defining a workflow allows the developer to properly **separate tasks and understand the way these task can be automated**. I wanted my site to be ready for development and/or deployment on a machine with Git and Node.js within two or three commands, and this is now possible thanks to [Npm](https://www.npmjs.org/), [Grunt.js](http://gruntjs.com/) (although Gulp.js seems to be a very good alternative, I didn't try it and could not recomment one rather than the other) and [Bower.js](bower.io/).

##### Typography

Typography is very important for my "brand" experience, and I don't want it to be loaded asynchronously because of [FOUC effects](https://en.wikipedia.org/wiki/Flash_of_unstyled_content). So, since I wante do inline web-fonts in my stylesheet (using the [base64 encoding](http://www.smashingmagazine.com/2011/03/02/the-font-face-rule-revisited-and-useful-tricks/)), typography represented a _lot_ of data being transferred before any content could be rendered, so this needed some optimization. While for Belta I needed the whole typeset, I was sure something could be done for FontAwesome, since a really small subset of icons was used. Meet [Fontello](http://fontello.com/), an iconic font generator which let me choose which icons I wanted to select from FontAwesome (and some other fonts, or even custom SVGs) to compose my own, optimized iconic font. At the time being, the font I use was created by hand on the website, which means that if I need to add a new icon, I have to repeat the whole process again (and I don't even have a clear list of the icons I use written somewhere). Fortunately, Fontello has a [web API](https://github.com/fontello/fontello#developers-api) that allow developers to programmatically generate iconic fonts (yes, it supports [Grunt integration](https://github.com/jubalm/grunt-fontello)).

#### The Tests

TODO

#### Deployment

TODO

### The Page Speed Index

TODO

### The Analytics

TODO

#### SEO

TODO
