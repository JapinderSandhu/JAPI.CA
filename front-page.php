<?php
/*
Template Name: Front Page
*/
?>
<?php include("header.php"); ?>

  <div id="w">
    <div id="content">

      <div id="Live" class="section">

        <div class="timeline">
          <?php wp_get_archives(['type'=>'daily', 'format'=>'with_plus','order'=> 'ASC']); ?>
        </div>

        <div class="previous Onclick" type="button">
          <img id="previous"src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/next.png" >
        </div>

        <div class="next Onclick" type="button">
          <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/previous.png">
        </div>


        <div class="Post-container"></div>

        <div class="selected_date"></div>

      </div><!-- @end #Live -->


      <div id="Home" class="section">

          <img id="japi" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/japi.png" alt="logo">

      </div><!-- @end #Home -->

    </div><!-- @end #content -->

  </div><!-- @end #w -->





<?php include("footer.php"); ?>
