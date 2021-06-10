$(function(){
  $("a").click(function(event){
      event.preventDefault();

      var hash = this.hash;

      $("html").animate({
        scrollTop: $(hash).offset().top,
      }, 800, function(){
        window.location.hash = hash;
      };
    );
  });
});
