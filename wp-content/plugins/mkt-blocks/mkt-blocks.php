<?php
/**
 * Plugin Name:       Mkt Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mkt-blocks
 *
 * @package           wpe
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function mkt_blocks_mkt_blocks_block_init() {
	register_block_type( __DIR__ . '/build/slider' );
	register_block_type( __DIR__ . '/build/test-block' );
	register_block_type( __DIR__ . '/build/team-members' );
    register_block_type( __DIR__ . '/build/posts' );
}
add_action( 'init', 'mkt_blocks_mkt_blocks_block_init' );

function my_plugin_block_categories( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'mkt-blocks',
                'title' => __( 'MKT Blocks', 'mkt-blocks' ),
                'icon'  => 'wordpress',
            ),
        )
    );
}
add_filter( 'block_categories_all', 'my_plugin_block_categories', 10, 2 );
