Template.carousel.onRendered(function () {
   
    Loading.start();
    
    this.$('#Caro').touchwipe({
      wipeUp: function () {
          
        $('#Caro').carousel('prev');
      },
      preventDefaultEvents: false
    });
    this.$('#CaroImg').touchwipe({
      wipeDown: function () {
        $('#Caro').carousel('next');
      },
      preventDefaultEvents: false
    });


    Loading.stop();
  });