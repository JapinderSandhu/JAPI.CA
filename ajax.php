<?php

/* AJAX.php */

//ajax call with no privalidges, a user that is not logged can access load-more
add_action('wp_ajax_nopriv_japi_load_more','japi_load_more');
add_action('wp_ajax_japi_load_more','japi_load_more');

add_action('wp_ajax_nopriv_japi_code_tab','japi_code_tab');
add_action('wp_ajax_japi_code_tab','japi_code_tab');

add_action('wp_ajax_nopriv_japi_film_tab','japi_film_tab');
add_action('wp_ajax_japi_film_tab','japi_film_tab');

function japi_code_tab(){
  ?>
  <a name="Software"></a>


  <section class="SoftwareProjectRow">
    <div class="row">
      <div class="col-lg-4 col-sm-6 text-center">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <img id="Gimbal1" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/Projects/Gimbal/Gimbal1.jpg" alt="logo"/>
            </div>

            <div class="item">
              <img id="Gimbal2" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/Projects/Gimbal/Gimbal2.jpg" alt="logo"/>
            </div>

            <div class="item">
              <video id="Gimbal3" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/Projects/Gimbal/Gimbal3.mov" alt="logo"/>
            </div>
          </div>

          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <img class="left-control" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/live/left.png"/>

          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <img class="left-control" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/live/right.png"/>

          </a>
        </div>

      </div>
    </div>

  </section>



  <?php
  wp_reset_postdata();

  die();
}

function japi_film_tab(){
  ?>
  <a name="Film">FILM</a>


  <?php
  wp_reset_postdata();

  die();
}

function japi_load_more(){
  $year = htmlspecialchars(trim($_POST['digwp_y']));
  $month = htmlspecialchars(trim($_POST['digwp_m']));
  $day = htmlspecialchars(trim($_POST['digwp_d']));



  query_posts(array( 'date_query' => array(array('year' => $year, 'month' => $month,'day' => $day,)),'posts_per_page'=>-1 ));


	        if (have_posts()) : while (have_posts()) : the_post();

          ?>

            <?php get_template_part('content',get_post_format()); ?>

	    <?php
	        endwhile; else:

	        	echo "<p style='text-align: center; font-size: 15px; padding: 5px;'>Nothing found.</p>";

	        endif;


    wp_reset_postdata();

    die();
}
