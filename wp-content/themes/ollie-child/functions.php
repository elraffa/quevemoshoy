<?php
/**
 * This file adds functions to the Ollie WordPress theme.
 *
 * @package ollie
 * @author  Fede Ruffa
 * @license GNU General Public License v2 or later
 * @link    https://olliewp.com
 */

namespace OllieChild;

function my_theme_enqueue_styles() {
	wp_enqueue_style( 'style',
		get_stylesheet_uri(),
		array( 'Ollie' ),
		wp_get_theme()->get( 'Version' ) // This only works if you have Version defined in the style header.
	);
}

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\my_theme_enqueue_styles' );


function register_custom_blocks() {

    // Define the block names.
    $blocks = array(
        'testimonial',
        'movie-details',
        'platforms',
    );

    foreach ( $blocks as $block_name ) {
        
        // Construct the path for block's CSS file based on its name.
        $block_style_path = '/blocks/' . $block_name . '/' . $block_name . '.css';

        // Register block styles for both frontend + backend.
        wp_register_style(
            $block_name . '-style',
            get_stylesheet_directory_uri() . $block_style_path,
            is_admin() ? array( 'wp-edit-blocks' ) : null
        );

        // Register the block type.
        register_block_type(
            __DIR__ . '/blocks/' . $block_name, 
            array(
                'style' => $block_name . '-style', // Loaded on both frontend & backend
                //'editor_style' => $block_name . '-style', // Loaded only on backend
            )
        );
    }
}
add_action('init', __NAMESPACE__ . '\register_custom_blocks');