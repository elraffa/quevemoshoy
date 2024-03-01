/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function Save({ attributes }) {
	const { text } = attributes;
	return (
		<RichText.Content {...useBlockProps.save() } tagName='h4' value={text}/>
	);
}
