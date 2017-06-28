<?php
/*
Template Name: Front Page
*/
?>
<?php include("header.php"); ?>

  <div id="w">
    <div id="content">

      <div id="Live" class="section">

        <div class="Post-container"></div>

        <div class="timeline">
          <?php wp_get_archives(['type'=>'daily', 'format'=>'with_plus','order'=> 'ASC']); ?>
        </div>

      </div><!-- @end #Live -->


      <div id="Home" class="section">

          <img id="japi" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/japi.png" alt="logo">

      </div><!-- @end #Home -->

    </div><!-- @end #content -->

  </div><!-- @end #w -->





<?php include("footer.php"); ?>
