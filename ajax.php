<?php

/* AJAX.php */

//ajax call with no privalidges, a user that is not logged can access load-more
add_action('wp_ajax_nopriv_japi_load_more','japi_load_more');
add_action('wp_ajax_japi_load_more','japi_load_more');
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
