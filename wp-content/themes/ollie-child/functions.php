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

function register_acf_blocks() {
    register_block_type( __DIR__ . '/blocks/testimonial' );
}

add_action( 'init', __NAMESPACE__ . '\register_acf_blocks' );
