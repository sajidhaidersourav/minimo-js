//======== java script =======
AOS.init({

    offset: 120,
    delay: 50,
    duration: 400,
    easing: 'linear',

});

// wow
wow = new WOW({
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    });
  wow.init();
  document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'lifestyle wow fadeInDown';
    this.parentNode.insertBefore(section, this);
  };


//========== jquery =======

$(function(){

    // preloader start
  $(window).load(function () {
    $("#loading").fadeOut(400);
  });
  // preloader end

})