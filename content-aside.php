<?php
          $currentissue->posts;
          $currentissue->posts[0]->ID;
          $id = $currentissuce->posts[0]->ID;
          $category = get_the_category( $id );

 ?>

<h3 id="Post_title" style="overflow-y: hidden;"><?php the_title(); ?></h3>

<div class="Vlog_Large">
  <div class="embed-responsive embed-responsive-16by9">
    <p id="Post_content"><?php the_content(); ?></p>
  </div>
</div>
