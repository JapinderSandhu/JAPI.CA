<?php
/*
Template Name: Front Page
*/
?>
<?php include("header.php"); ?>

  <div id="w">

    <div id="content">

      <ul class="navigation">
        <li >
          <a id="code_title">CODE_</a>
        </li>
        <li >
          <a id="live_title">_LIVE_</a>
        </li>
        <li >
          <a id="film_title">_FILM</a>
        </li>
      </ul>

      <div id="Live">



        <div class="timeline">
          <!-- This is an array of all the dates, This will be used for reference as to what date we are on currently -->
          <div id="dom-target" data-url="<?php echo admin_url('admin-ajax.php') ?>" style="display: none;">
              <?php wp_get_archives(['type'=>'daily', 'format'=>'with_plus','order'=> 'ASC']); ?>
          </div>
          <?php

              $years = $wpdb->get_col("SELECT DISTINCT YEAR(post_date) FROM $wpdb->posts WHERE post_status = 'publish' AND post_type = 'post' ORDER BY post_date ASC");
              foreach($years as $year) :
              ?>


                  <ul id="year_style" >

                    <div class= "archive-years-container">
                    <div class='day_box'></div> <a class="archive-years" ><?php echo $year; ?></a>
                    </div>

                      <li>
                      <?	$months = $wpdb->get_col("SELECT DISTINCT MONTH(post_date) FROM $wpdb->posts WHERE post_status = 'publish' AND post_type = 'post' AND YEAR(post_date) = '".$year."' ORDER BY post_date 	ASC");
                          foreach($months as $month) :
                          ?>
                          <ul id="month_style" class="<?php $dateObj = DateTime::createFromFormat('!m', $month); $monthName = $dateObj->format('F'); echo $monthName.$year ?>-monthList" >

                            <div class= "archive-months-container" >
                              <div class='day_box' ></div> <a class="archive-months" id="<?php $dateObj = DateTime::createFromFormat('!m', $month); $monthName = $dateObj->format('F'); echo $monthName.''.$year ?>" > <?php $dateObj = DateTime::createFromFormat('!m', $month); $monthName = $dateObj->format('F'); echo $monthName ?></a>
                            </div>


                            <li id="<?php $dateObj = DateTime::createFromFormat('!m', $month); $monthName = $dateObj->format('F'); echo $monthName.$year ?>-monthList" >
                            <?	$days = $wpdb->get_col("SELECT DISTINCT DAY(post_date) FROM $wpdb->posts WHERE post_status = 'publish' AND post_type = 'post' AND Month(post_date) = '".$month."' ORDER BY post_date 	ASC");
                                foreach($days as $day) :
                                ?>
                                <ul  id="day_style">

                                  <div class= "archive-days-container archive-days" data-day="<?php $dateObj = DateTime::createFromFormat('!m', $month); $monthName = $dateObj->format('F'); echo $monthName.' '.$day.', '.$year ?> ">
                                    <a class='day_box' id="<?php $dateObj = DateTime::createFromFormat('!m', $month); $monthName = $dateObj->format('F'); echo $monthName.''.$day.''.$year ?>"></a> <a class="archive-days" id="_<?php $dateObj = DateTime::createFromFormat('!m', $month); $monthName = $dateObj->format('F'); echo $monthName.''.$day.''.$year ?>" data-day="<?php $dateObj = DateTime::createFromFormat('!m', $month); $monthName = $dateObj->format('F'); echo $monthName.' '.$day.', '.$year ?> "> <?php echo $day;?></a>
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
          <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/next.png" >
        </div>

        <div class="next Onclick" type="button">
          <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/previous.png">
        </div>

        <div class="Post-container"></div>

        <div class="selected_date_wrapper">
          <div class="selected_date"></div>
        </div>
      </div><!-- @end #Live -->

      <div id="Code">


      </div>

      <div id="Film">


      </div>


    </div>


      <div id="Home">
          <img id="japi" src="<?php bloginfo('stylesheet_directory'); ?>/assets/media/1920x1080/japi.png" alt="logo"/>
      </div><!-- @end #Home -->

    </div><!-- @end #content -->

  </div><!-- @end #w -->





<?php include("footer.php"); ?>
