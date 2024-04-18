import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	icon: {
		src: (
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21 15L21 5C21 3.89543 20.1046 3 19 3L12 3M21 15V15.1716C21 15.702 20.7893 16.2107 20.4142 16.5858L16.5858 20.4142C16.2107 20.7893 15.702 21 15.1716 21H15M21 15L17 15C15.8954 15 15 15.8954 15 17L15 21M15 21L5 21C3.89543 21 3 20.1046 3 19L3 12M13 7L17 7M10 11H17M7 15L11 15" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M6 3V6M6 9V6M6 6H9M6 6H3" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg>
		),
		background: "#F35834",
	},
	edit: Edit,
	save,
});
