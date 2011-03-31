
(function($, global, body, undefined){

  $(function(){

    var themes = $('p.themes'),
    
    rColorSheme = /black|darky|blue|white|brown/,
    
    rWide = /tiny|large/,

    themify = function(ev) {
      var href = ev.target.href,
      m = href.match(/\#\/themes\/(\w+)/)
      theme = m && m[1] ? m[1] : '',
      isColorSheme = theme !== 'tiny' && theme !== 'large';

      if(!theme) {return false;}
      
      body.className = body.className.replace(( isColorSheme ? rColorSheme : rWide ), theme);
    };

    // trigger on click
    themes.delegate('a', 'click', themify);


    $(window).bind('hashchange', function(ev){
      // trigger on hashchange
      themify({
        target: {
          href: global.location.hash
        }
      });
    })

    // Init on page load
    themify({
      target: {
        href: global.location.hash
      }
    });
    
    // widify
    $('.wide-content a').bind('click', themify);

    $('.hovereaster').click(function() {
      $(this).text('✌')
        .addClass('aha');
    });

  });

})(this.jQuery, this, this.document.body);

// a little noise
(function(document, body){
  
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
  
})(this.document, this.document.body);
