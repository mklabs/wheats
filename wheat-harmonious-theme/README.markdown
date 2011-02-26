Wheat Harmonious Theme
-----------------------

This repo holds a custom theme crafted for the [wheat](https://github.com/creationix/wheat/) blog engine.

This theme uses basic markup from html5 boilerplate. css/js files equally follow boilerplate structure.

This is a port of a [custom wordpress](https://github.com/MkLabs/mk-boilertheme) I made for my personal blog. This wheat theme is called Harmonious mainly due to its special banner that makes use of [Mr Doob's Harmony application](https://github.com/mrdoob/harmony). Thank you Mr Doob! awesome work and very addictive to use (and hack around ;)).

The harmonious banner is made available using a jQuery plugin wrapper I crafted on top of Paul Irish's fork in his [Harmony Background edition!](https://github.com/paulirish/harmony).

Here is a quick preview

![Preview](https://github.com/MkLabs/wheat-harmonious-theme/raw/master/public/preview/preview.png)

## CSS3 Transitions and HTML 5 History API

GitHub recently realeased their [new Tree Slider](https://github.com/blog/760-the-tree-slider), a new feature improving UX of Safari, Chrome or Firefox4 users with some change to tree browsing on GitHub.

<embed src="http://blip.tv/play/AYKSzQUC" type="application/x-shockwave-flash" width="480" height="390" allowscriptaccess="always" allowfullscreen="true"></embed>

Their use of the new HTLM5 History API and CSS3 transitions is really nice and I immediatly wanted to know how it was done. So, you could find here my attempt to make the same things, wrapped in a [jQueryUI WIdget](blob/master/public/js/mylibs/ui.treeslider.js). I plan to rewrite it in a more flexible and cleaner way, make some documentations and a bunch of demo cases.

Widget features are only enabled on capable browsers (Safari, Chrome or Firefox4), others continue to work as always.

### How it is applied

New GitHub TreeSlider really improves UX when browsing repos sources, and is an obvious and brilliant use case of the HTML5 history API while CSS3 transitions handle the effects. However, this feature can be applied to any web page with very few impacts.

In this theme, most of links click are intercepted (to articles, categories and home), we call hitory.pushState() to change the browser's URL, load in data by ajax means, then slide over to it.

Any webpage requested and served by wheat will have the following basic markup

    <div class="frames">
      <div class="frame frame-center" data-path="this/is/the/url/requested">
        ... page content ...
      </div>
    </div>
  

* all click made upon a.js-slide-to
* load in data with ajax, only takes the content of .frame-center and append a new frame in .frames container.
* If the ressource requested was previously fetch and present in the dom tree (eg. $('.frame[data-path=path]') exists), widget directly performs the sliding.

The currently used CSS rules to make the sliding effect possible is as follows:

    #main{overflow:hidden;}
    #main .frames{width:10000px;}
    #main .frames .frame{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;float:left;}
    #main .frames .frame-left{margin-left:-2000px;margin-right:200px;}
    #main .frames .frame-center{margin-left:0;}
    #main .frames .frame-loading{height:100%;}
    
Be sure to check out this awesome ressource on [CSS3 Transitions from apple](http://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Transitions/Transitions.html) if you're interrested. The benefits of using CSS transitions to handle the sliding and effects is obvious and suitable to any changes.

Full Javascript related code as previously stated is available [there](blob/master/public/js/mylibs/ui.treeslider.js). Initialization of the widget is made as follows:

    $("#main").treeslider();
    
You can also see some application of CSS3 transform on nav links and logo, just for fun.


More to come soon...
