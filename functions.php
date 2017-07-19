<?php
function japi_include_enqueue(){

  wp_enqueue_style('customstyle',get_template_directory_uri() . '/css/master.css',array(),'1.0.1', 'all');

  wp_enqueue_script('script.js',get_template_directory_uri() . '/js/script.js',array(),'1.0.0', true);

  //wp_enqueue_style('bootstrap', get_style_sheet_directory_uri() . '/css/bootstrap.min.css');
  //wp_enqueue_script('bootstrap', get_style_sheet_directory_uri() . '/js/bootstrap.min.js');


}
/* Add bootstrap support to the Wordpress theme*/

function theme_add_bootstrap() {
	wp_enqueue_style( 'bootstrap-css', get_template_directory_uri() . '/css/bootstrap.min.css' );
	wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '3.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'theme_add_bootstrap' );

add_action('wp_enqueue_scripts', 'japi_include_enqueue');

//$ajax_url_data= admin_url('admin-ajax.php');
require get_template_directory() . '/ajax.php';

add_filter ('get_archives_link',
function ($link_html, $url, $text, $format, $before, $after) {
    if ('with_plus' == $format) {
      $link_html = "<p> <a>"
                 . "$text"
                 ."</a> </p>";
    }
    return $link_html;
}, 10, 6);


add_theme_support('post-formats',array('aside', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio', 'chat'));
