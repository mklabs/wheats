/* Author: just a guy

*/
(function($, window, undefined){
  
	var goCrazy = true,
	crazyLink = true,
  frownFamily = $(".mk-blog-demo-frown-family"),
  historyAble = typeof Modernizr !== 'undefined' ? Modernizr.history : typeof H.pushState === 'function',
	randomize = function r(range) {
    return Math.floor(Math.random() * (range || 255));
	};
  
  $(function(){
    
    var main = $('#main'),
    banner = $('#header').find('div.banner'),
    logo = $("#logo"),
    rt;
    
    banner.harmony({
      color: ["#eeeeee"]
    });
		
    // Init our main tree slider for webkit browsers
    main.treeslider();
    
    // translate
    main.find('.content div.wikistyle').gtranslate({
      key: 'key',
      target: 'en'
    });
    
    
    // Ahaha
    if(Modernizr.csstransitions && goCrazy && historyAble) {
      rt = logo.find('span').addClass('csstransition-please');
      var random = 0;
      (function ahahaha(){
        setTimeout(function ohohoho(){
          
          rt.each(function(){
            var random = randomize(360);
            $(this).css({
              transform: 'rotate( ' + random + 'deg)',
              '-webkit-transform': 'rotate( ' + random + 'deg)',
              '-moz-transform': 'rotate( ' + random + 'deg)',
            });  
          });
          ahahaha();
        }, 700);
      })(); 
    }
    
    if(Modernizr.csstransitions && crazyLink && historyAble) {
      (function(){
        var links = $('nav a.js-slide-to').addClass('csstransition-please'),
        
        rotate = 0;
        
        highlight = function(ev){
          var path = window.location.pathname,
          link = links.filter('[href="' + path + '"]'),
          random = randomize(1800);
          
          links.css({
            transform: 'rotate(0deg)',
            '-webkit-transform': 'rotate(0deg)',
            '-moz-transform': 'rotate(0deg)',
          });
          
          link.css({
             transform: 'rotate( ' + random + 'deg)',
             '-webkit-transform': 'rotate( ' + random + 'deg)',
             '-moz-transform': 'rotate( ' + random + 'deg)',
          });
        };
        
        logo.addClass('csstransition-please').bind('click', function(){
          rotate = (rotate + 360 > 720) ? 0 : (rotate + 360);
          $(this).css({
             transform: 'rotate( ' + rotate  + 'deg)',
             '-webkit-transform': 'rotate( ' + rotate + 'deg)',
             '-moz-transform': 'rotate( ' + rotate + 'deg)',
          });
        });
        
        $(window).bind('popstate', highlight);
        links.live('click', highlight);
        
      })();
    }
    
    // if any frown, make it smile
    $("span.frown").hover(function() {
			var t = $(this);
			t.text(t.text().replace('(', ')'));
		}, function(){
			var t = $(this);
			t.text(t.text().replace(')', '('));
		});
		
		frownFamily.find('a').bind('click', function(){
			var ff = $(this).closest('div');
			var frowning = ff.data('frowning');
			var crazy = ff.data('crazyparty');
			
			// Show the family case they're hidden (404 case)
			ff.find('.waitforit').removeClass('waitforit');
			
			if(crazy) {
				ff.goToFiesta(0, 'stop');
				return false;
			}
			
			if(frowning) {
				ff.goToFiesta(0, 'crazy');
				return false;
			}
			
			ff.goToFiesta(300);
			
			return false;
		});
		
		frownFamily.find('.frown-stop').bind('click', function(){
			frownFamily.goToFiesta(0, 'stop');
		});
    
  });
})(this.jQuery, this);
