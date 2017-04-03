$(function(){
  $("#nav a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash);
  });
});
$( document ).ready(function() {
    $(".list").hide().fadeIn(10000);
    console.log("fade");
    window.scroll(1331, 1331);
});
