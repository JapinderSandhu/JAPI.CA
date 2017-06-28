<?php

  function japi_include_enqueue(){

    wp_enqueue_style('customstyle',get_template_directory_uri() . '/css/master.css',array(),'1.0.1', 'all');


  }

add_action('wp_enqueue_scripts', 'japi_include_enqueue');
