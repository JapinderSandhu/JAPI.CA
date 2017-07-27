<?php
          $currentissue->posts;
          $currentissue->posts[0]->ID;
          $id = $currentissuce->posts[0]->ID;
          $category = get_the_category( $id );

 ?>
<div class="<?php echo $category[0]->cat_name; ?>">
  <div class=" embed-responsive embed-responsive-16by9">
    <p id="Post_content"><?php the_content(); ?></p>
  </div>
</div>
