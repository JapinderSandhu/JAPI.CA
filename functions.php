<?php

  function japi_include_enqueue(){

    wp_enqueue_style('customstyle',get_template_directory_uri() . '/css/master.css',array(),'1.0.1', 'all');

    wp_enqueue_script('script.js',get_template_directory_uri() . '/js/script.js',array(),'1.0.0', true);


  }

add_action('wp_enqueue_scripts', 'japi_include_enqueue');

require get_template_directory() . '/ajax.php';

add_filter ('get_archives_link',
function ($link_html, $url, $text, $format, $before, $after) {
    if ('with_plus' == $format) {
        $link_html = "<p> <a class = 'day' data-url='http://localhost:8888/wordpress/wp-admin/admin-ajax.php'>"
                   . "$text"
                   ."</a> </p>";
    }
    return $link_html;
}, 10, 6);
