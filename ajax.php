<?php

/* AJAX.php */

//ajax call with no privalidges, a user that is not logged can access load-more
add_action('wp_ajax_nopriv_japi_load_more','japi_load_more');
add_action('wp_ajax_japi_load_more','japi_load_more');

add_action('wp_ajax_nopriv_japi_code_tab','japi_code_tab');
add_action('wp_ajax_japi_code_tab','japi_code_tab');

add_action('wp_ajax_nopriv_japi_film_tab','japi_film_tab');
add_action('wp_ajax_japi_film_tab','japi_film_tab');

add_action('wp_ajax_nopriv_japi_welcome','japi_welcome');
add_action('wp_ajax_japi_welcome','japi_welcome');

function japi_code_tab(){
  ?>


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

function japi_welcome(){
  ?>
  <section class="col-lg-12 col-sm-8 col-centered padding-bottom-md">
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
              <img id="me1" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/Welcome/me1.jpg" alt="logo"/>
            </div>

            <div class="item">
              <img id="me2" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/Welcome/me2.png" alt="logo"/>
            </div>
            <div class="item">
              <img id="me3" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/Welcome/me3.jpg" alt="logo"/>
            </div>
            <div class="item">
              <img id="me4" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/Welcome/me4.jpg" alt="logo"/>
            </div>
            <div class="item">
              <img id="me5" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/Welcome/me5.jpg" alt="logo"/>
            </div>
            <div class="item">
              <img id="me8" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/Welcome/me8.jpg" alt="logo"/>
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

  <p class="Intro">

     Hey! Thank you for supporting me on this journey. Seeing visitors drives me to keep creating.

     Combining art and science is what inspires me.

     Forgive me as the site does not work on Mobile.
     Soon I will have the FILM and CODE tabs Completed.

            >Last update as of Wednesday, February 14, 2018.

  </p>
  <p class="Intro2">
       If you are looking to see my projects please head over to https://github.com/JapinderSandhu.

       If you would like to see the code for this site and or want my resume please email me at salutations@japi.ca.

     </p>

  <?php
  wp_reset_postdata();

  die();
}
