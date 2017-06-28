<?php

/* AJAX.php */

//ajax call with no privalidges, a user that is not logged can access load-more
console.log("test0");
add_action('wp_ajax_nopriv_japi_load_more','japi_load_more');
add_action('wp_ajax_japi_load_more','japi_load_more');
console.log("test1");
function japi_load_more(){
  $year = htmlspecialchars(trim($_POST['digwp_y']));
  $month = htmlspecialchars(trim($_POST['digwp_m']));
  $day = htmlspecialchars(trim($_POST['digwp_d']));

  $querystring = "year=$year&monthnum=$month&day=$day&posts_per_page=-1";
  query_posts($querystring);


	        if (have_posts()) : while (have_posts()) : the_post();

          $currentissue->posts;
          $currentissue->posts[0]->ID;
          $id = $currentissue->posts[0]->ID;
          $category = get_the_category( $id );


          ?>
          
            <h3 id="Post_title"><?php the_title(); ?></h3>

            <div class="<?php echo $category[0]->cat_name; ?>">
              <p id="Post_content"><?php the_content(); ?></p>
            </div>


	    <?php
	        endwhile; else:

	        	echo "<p style='text-align: center; font-size: 15px; padding: 5px;'>Nothing found.</p>";

	        endif;


    wp_reset_postdata();

    die();
}
