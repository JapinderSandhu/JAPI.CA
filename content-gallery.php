<?php
/*
-- Gallery Post Format
*/
?>

<article class="Gallery">



			<div id="post-gallery-<?php the_ID(); ?>" class="carousel slide" data-ride="carousel" data-interval="20000">

				<div class="carousel-inner" role="listbox" data-interval="20000">

					<?php
          $attachments = japi_get_attachment(7);
						$i = 0;
						foreach( $attachments as $attachment ):
						$active = ( $i == 0 ? ' active' : '' );

            $link= wp_get_attachment_url( $attachment->ID );
            //if link is jpg then print it as image
            if(strpos($link, ".jpg")){

              ?>
              <img class="item<?php echo $active; ?>" style="width: 100%; margin: auto;"src="<?php echo wp_get_attachment_url( $attachment->ID ); ?> "></img>

              <?php
              //if link is video then print it as video

            }elseif(strpos($link, ".mp4")) { ?>
              <video class="item<?php echo $active; ?>" style="max-width: 100%;max-height: 100%; margin: 0 auto; padding-left:30px; padding-right:30px;" controls> <source src="<?php echo wp_get_attachment_url( $attachment->ID ); ?>" type="video/mp4"></video>

          <?php } ?>

					<?php $i++; endforeach; ?>

				</div><!-- .carousel-inner -->

				<a class="left carousel-control" href="#post-gallery-<?php the_ID(); ?>" role="button" data-slide="prev" style="background:none !important">
					<img class="left-control" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/live/left.png"/>
				</a>
				<a class="right carousel-control" href="#post-gallery-<?php the_ID(); ?>" role="button" data-slide="next" style="background:none !important">
					<img class="right-control" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/live/right.png"/>
				</a>

			</div><!-- .carousel -->



</article>
