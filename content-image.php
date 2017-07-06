<?php
          $currentissue->posts;
          $currentissue->posts[0]->ID;
          $id = $currentissuce->posts[0]->ID;
          $category = get_the_category( $id );

 ?>


<div class="col-md-4 col-lg-6 <?php echo $category[0]->cat_name; ?>">
  <div class="">
    <p id="Post_content"><?php the_content(); ?></p>
  </div>
</div>
