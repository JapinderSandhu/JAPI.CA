<?php
/*
Template Name: Front Page
*/
?>
<?php include("header.php"); ?>

  <div id="w">
    <div id="content">

      <div id="Live" class="section">

        <div id="day-may13_2017">

          <div id="day-may13_2017_title">

            May 13 2017

          </div>

          <div id="Posts">
            <img id="may13_2017_post_1"src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/live/may13_2017/post/1.jpg" >
          </div>

          <div id="Vlog">
            <video id="may13_2017_video"width="320" height="240" controls>
              <source src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/live/may13_2017/vlog/may13_2017.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>

          <div id="Music">

            <audio id="1_album" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/live/may13_2017/music/1.mp3" type="audio/mpeg" preload="auto">
            </audio>

            <a onclick="StartOrStop()"><img id="may13_2017_post_1"height="100"width="100"src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/live/may13_2017/music/1_album.jpg" ></a>
          </div>

        </div><!-- @end #day-may13_2017 -->

      </div><!-- @end #Live -->


      <div id="Home" class="section">

          <img id="japi" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/japi.png" alt="logo">

      </div><!-- @end #Home -->





    </div><!-- @end #content -->

  </div><!-- @end #w -->
  <br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br>

  <script>
  var x = document.getElementById("1_album");

  /*Stop/Stop the audio using click
    Implementated in the music in each day */

   function StartOrStop() {

     if(x.paused==true){
        x.play();
        console.log("play");
     }
     else{
       x.pause();
       console.log("pause");
     }
   }








   /* Shows window size */



  $(document).ready(function(){
    /*GOAL:
      Scroll to specific point on page load, stick to certain part when in close proximity
      - This would be the "HOME"*/


    console.log("this is the position" + $("#japi").position().top);
    console.log("this is the height" + $("#japi").height());
    console.log("this is the wrapper height" + $("#w").height());
    var currPosition = $("#japi").position().top + $("#japi").height()/2 - $("#w").height()/2;
    console.log("this is the current position" + currPosition);

    var coordinate = $("#japi").offset();
    console.log("this is the  offset" + coordinate.top);


    $('html,body').animate({scrollTop: $("#japi").position().top+40}, 500);

    $(window).scroll(function(){
      var scrollPos = $(document).scrollTop();
      console.log(scrollPos);
    });



  /*



    ATTEMPT 1
    ///////////////////////////////
    if($(document).width()<=1500){

      window.scroll(0,1510);
      console.log("CHAKDE");
    }
    if($(document).width()<=604){

      window.scroll(0,2000);
      console.log("OHHHH PANDI");
    }

    ATTEMPT 2
    ///////////////////////////////
    var coordinate = $("#w").offset();
    size = $(window).width();
    console.log("The window width is: " + size);
    window.scroll(0,1272-coordinate.top);


    ATTEMPT 3
    ///////////////////////////////
    console.log("this is the position" + $("#japi").position().top);
    console.log("this is the height" + $("#japi").height());
    console.log("this is the wrapper height" + $("#w").height());

    var currPosition = $("#japi").position().top + $("#japi").height()/2 - $("#w").height()/2;
    console.log("this is the currPosition" + currPosition);
    $('html,body').animate({scrollTop: currPosition}, 500);
    */

  });


 </script>



<?php include("footer.php"); ?>
