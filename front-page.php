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
          <?php
              $years = $wpdb->get_col("SELECT DISTINCT YEAR(post_date) FROM $wpdb->posts WHERE post_status = 'publish' AND post_type = 'post' ORDER BY post_date ASC");
              foreach($years as $year) :
              ?>
              <!-- This is an array of all the dates, This will be used for reference as to what date we are one currently -->
              <div id="dom-target" data-url="<?php echo admin_url('admin-ajax.php') ?>" style="display: none;">
                  <?php wp_get_archives(['type'=>'daily', 'format'=>'with_plus','order'=> 'ASC']); ?>
              </div>

                  <ul style="list-style-type: none;padding: 0;">

                    <div class= "archive-years-container">
                    <div class='day_box'></div> <a class="archive-years"><?php echo $year; ?></a>
                    </div>

                      <li  style="list-style-type: none;padding-right:0px;">
                      <?	$months = $wpdb->get_col("SELECT DISTINCT MONTH(post_date) FROM $wpdb->posts WHERE post_status = 'publish' AND post_type = 'post' AND YEAR(post_date) = '".$year."' ORDER BY post_date 	ASC");
                          foreach($months as $month) :
                          ?>
                          <ul style="list-style-type: none;padding-left:10px;padding-right:0px;">

                            <div class= "archive-months-container">
                              <div class='day_box' ></div> <a class="archive-months" id="<?php echo (date( 'F', mktime(0, 0, 0, $month))).''.$year ?>" > <?php echo date( 'F', mktime(0, 0, 0, $month) );?></a>
                            </div>


                            <li id="<?php echo (date( 'F', mktime(0, 0, 0, $month))).$year ?>-monthList" style="list-style-type: none;padding-right:0px;">
                            <?	$days = $wpdb->get_col("SELECT DISTINCT DAY(post_date) FROM $wpdb->posts WHERE post_status = 'publish' AND post_type = 'post' AND Month(post_date) = '".$month."' ORDER BY post_date 	ASC");
                                foreach($days as $day) :
                                ?>
                                <ul  style="list-style-type: none;padding-right:0px;">

                                  <div class= "archive-days-container">
                                    <div class='day_box' id="<?php echo (date( 'F', mktime(0, 0, 0, $month))).''.$day.''.$year ?>"></div> <a class="archive-days" data-day="<?php echo (date( 'F', mktime(0, 0, 0, $month))).' '.$day.', '.$year ?> "> <?php echo $day;?></a>
                                  </div>

                                </ul>
                                <?php endforeach;?>
                            </li>

                          </ul>
                          <?php endforeach;?>
                      </li>
                  </ul>
              <?php endforeach; ?>


        </div>

        <div class="previous Onclick" type="button">
          <img id="previous"src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/next.png" >
        </div>

        <div class="next Onclick" type="button">
          <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/previous.png">
        </div>


        <div class="Post-container"></div>

        <div class="selected_date_wrapper">
          <div class="selected_date"></div>
        </div>
      </div><!-- @end #Live -->


      <div id="Home" class="section">

          <img id="japi" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/japi.png" alt="logo"/>

      </div><!-- @end #Home -->

    </div><!-- @end #content -->

  </div><!-- @end #w -->





<?php include("footer.php"); ?>
