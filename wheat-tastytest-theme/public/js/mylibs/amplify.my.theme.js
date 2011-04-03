(function(global, location, document) {
  
  Modernizr.load({
    
    test: global.JSON,
    nope: '/js/libs/fill/json2.js',
    load: ['/js/libs/jquery.min.js', '/js/libs/amplify.store.js', '/js/plugins.js'],
    
    // lookup in the store to init theme & width on page load
    complete: function () {
      var theme = amplify.store('theme'),
      width = amplify.store('width'),
      hrefReg = /\#\/themes\/(\w+)/,
      widthReg = /tiny|large/,

      themify = function(ev) {
        var href = ev instanceof jQuery.Event ? ev.target.href : ev,
        m = href.match(hrefReg),
        theme = m && m[1] ? m[1] : '',
        isWidth = widthReg.test(theme),
        r = isWidth ? widthReg : /\w+/g;

        if(!theme) {
          return false;
        }
        
        document.body.className = document.body.className.replace(r, isWidth ? theme : function(a) {
          return isWidth ? a :
            widthReg.test(a) ? a :
            theme;
        });
        
        amplify.store(isWidth ? 'width' : 'theme', theme);
      };
      
      theme && themify('#/themes/' + theme);

      width && themify('#/themes/' + width);

      location.hash && themify('#/themes/' + location.hash);
      
      $(function(){
        var themes = $('.themes'),
        body = document.body;
        
        // trigger on click
        !Modernizr.hashchange ? themes.delegate('a', 'click', themify) :
          $(window).bind('hashchange', function(ev) {
            var hash = global.location.hash;
            if(!hash) {
              return;
            } 
            
            ev.target = {href: hash};
            themify(ev);
          });
        
        $('.hovereaster').click(function() {
          $(this).text('✌')
            .addClass('aha');
        });
        
        // a little noise
        (function(body){

          if(!Modernizr.canvas) {
            return;
          }

          var canvas = document.createElement('canvas'),
          ctx = canvas.getContext('2d'),
          width = canvas.width = 45,
          height = canvas.height = 45,
          x, y, num;

          for( x = 0; x < width; x++ ) {
            for( y = 0; y < height; y++ ) {
              num = Math.floor( Math.random() * 90);

              ctx.fillStyle = "rgba(num, num, num, 0.1)".replace(/num/g, num);
              ctx.fillRect(x, y, 1, 1);
            }        
          }


          body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";  

        })(document.body);
                  
      });
      
    }
  });

})(this, this.location, this.document);