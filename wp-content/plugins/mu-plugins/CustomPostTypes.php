<?php
/**
 * Custom Post Types
 *
 * @package WCBFSE
 */

new CustomPostTypes();

/**
 * Custom Post Types Class
 */
class CustomPostTypes
{
    /**
     * Constructor
     */
    function __construct()
    {
        add_action('init', array($this, 'registerPostTypes'));

        //Uncomment the line below for build custom redirects
        //add_action('template_redirect', array($this, 'redirectRules'));

        //Uncomment the line below to disable default post type
        //add_filter('register_post_type_args', array($this, 'removeDefaultPostType'), 0, 2);
    }

    /**
     * Register Your Custom Post Types Here
     * 
     * @return void
     */
    function registerPostTypes()
    {
        // Plataformas Post Type
        register_post_type(
            'plataformas',
            array(
                'labels' => array(
                    'name' => __('Plataformas'),
                    'singular_name' => __('Plataformas')
                ),
                'has_archive' => true,
                'public' => true,
                'supports' => array('thumbnail', 'title', 'editor', 'author'),
                'menu_icon' => 'dashicons-megaphone',
                'taxonomies' => array('category', 'post_tag', 'type')
            )
        );
    }

    /**
     * Redirect Rules for custom post types (EG.: Single page redirect to home)
     * This could be useful when we need an archive page but we don't need the sigle page
     * 
     * @return void
     */
    function redirectRules()
    {
        if (is_singular('resources')) {
            wp_redirect(home_url(), 301);
            exit;
        }
    }

    /**
     * Remove Default Post Type
     * 
     * @param array  $args     // Post Type Args
     * @param string $postType // Post Type Name
     * 
     * @return array 
     */
    function removeDefaultPostType($args, $postType)
    {
        if ($postType === 'post') {
            $args['public']                = false;
            $args['show_ui']               = false;
            $args['show_in_menu']          = false;
            $args['show_in_admin_bar']     = false;
            $args['show_in_nav_menus']     = false;
            $args['can_export']            = false;
            $args['has_archive']           = false;
            $args['exclude_from_search']   = true;
            $args['publicly_queryable']    = false;
            $args['show_in_rest']          = false;
        }
    
        return $args;
    }
}
