<?php

function japi_get_attachment( $num = 1 ){

	$output = '';
	if( has_post_thumbnail() && $num == 1 ):
		$output = wp_get_attachment_url( get_post_thumbnail_id( get_the_ID() ) );
	else:
		$attachments = get_posts( array(
			'post_type' => 'attachment',
			'posts_per_page' => $num,
			'post_parent' => get_the_ID()

		) );
		if( $attachments && $num == 1 ):
			foreach ( $attachments as $attachment ):
				$output = wp_get_attachment_url( $attachment->ID );
			endforeach;
		elseif( $attachments && $num > 1 ):
			$output = $attachments;
		endif;

		wp_reset_postdata();

	endif;

	return $output;
}
function debug($msg) {
       $msg = str_replace('"', '\\"', $msg); // Escaping double quotes
        echo "<script>console.log(\"$msg\")</script>";
}
