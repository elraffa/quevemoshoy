<?php
/**
 * Enqueue styles
 */
function quevemoshoy_enqueue_styles() {
    // Enqueue the main style sheet
    wp_enqueue_style( 'quevemoshoy-style', get_stylesheet_uri() );

    // Enqueue additional style sheets
    wp_enqueue_style( 'quevemoshoy-custom-style', get_template_directory_uri() . '/assets/css/style.css' );
}

add_action( 'wp_enqueue_scripts', 'quevemoshoy_enqueue_styles' );

// Hide page title
add_filter( 'the_title', 'quevemoshoy_hide_page_title' );
function quevemoshoy_hide_page_title( $title ) {
    if ( is_page() ) {
        return '';
    }

    return $title;
}

// Add custom logo support
add_action( 'after_setup_theme', 'quevemoshoy_custom_logo' );
function quevemoshoy_custom_logo() {
    add_theme_support( 'custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
}


// Add custom background support
add_action( 'after_setup_theme', 'quevemoshoy_custom_background' );
function quevemoshoy_custom_background() {
    add_theme_support( 'custom-background', array(
        'default-color' => 'ffffff',
        'default-image' => '',
    ) );
}

// Add editor styles support
add_action( 'after_setup_theme', 'quevemoshoy_editor_styles' );
function quevemoshoy_editor_styles() {
    add_editor_style( 'assets/css/editor-style.css' );
}

// Add responsive embeds support
add_action( 'after_setup_theme', 'quevemoshoy_responsive_embeds' );
function quevemoshoy_responsive_embeds() {
    add_theme_support( 'responsive-embeds' );
}

// Add responsive image support
add_action( 'after_setup_theme', 'quevemoshoy_responsive_images' );
function quevemoshoy_responsive_images() {
    add_theme_support( 'align-wide' );
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'responsive-embeds' );
}

function quevemoshoy_custom_image_sizes( $sizes, $size, $image_src, $image_meta, $attachment_id ) {
    return '(max-width: 100%) 100vw, 100%';
}
add_filter( 'wp_calculate_image_sizes', 'quevemoshoy_custom_image_sizes', 10, 5 );