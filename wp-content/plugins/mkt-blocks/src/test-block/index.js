/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { createBlock } from '@wordpress/blocks';

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
			<svg width="800px" height="800px" viewBox="0 0 24 24" >
			<g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g id="ic_fluent_movies_and_tv_24_filled" fill="#212121" fill-rule="nonzero">
					<path d="M19.7286477,3.87458256 L19.7796475,4.03423199 L20.3309222,5.95675538 C20.4355805,6.32174238 20.2508505,6.70115383 19.9126449,6.84979651 L19.8167039,6.88442967 L9.08979429,9.9595254 L20.2488588,9.96046231 C20.6285546,9.96046231 20.9423498,10.2426162 20.9920122,10.6086918 L20.9988588,10.7104623 L20.9988588,19.2084746 C20.9988588,20.6710064 19.8571542,21.8668789 18.4163811,21.9534558 L18.2488588,21.9584746 L5.75,21.9584746 C4.28746816,21.9584746 3.09159572,20.81677 3.00501879,19.3759969 L3,19.2084746 L2.99979429,10.8165254 L2.47803395,8.99538983 C2.07490554,7.589514 2.84275532,6.12527119 4.20385145,5.64491723 L4.36350088,5.59391744 L16.3781751,2.14876505 C17.7840509,1.74563665 19.2482937,2.51348642 19.7286477,3.87458256 Z M6.27268011,6.60691826 L4.77695691,7.03580999 C4.15481999,7.21420488 3.7786565,7.83376496 3.89085867,8.45731315 L3.91988247,8.58194642 L4.26421826,9.78278802 L4.55930489,9.69792899 L6.27268011,6.60691826 Z M11.029003,5.24306462 L8.31151617,6.02229143 L6.59814094,9.11330216 L9.31562776,8.33407535 L11.029003,5.24306462 Z M15.7862871,3.87893535 L13.0688003,4.65816215 L11.3554251,7.74917288 L14.0719506,6.97022172 L15.7862871,3.87893535 Z M17.6334765,3.64537692 L16.1127092,6.38504361 L18.6812212,5.64877896 L18.3377549,4.44768802 C18.2305941,4.07397383 17.96425,3.78902913 17.6334765,3.64537692 Z" id="🎨-Color">
			</path>
				</g>
			</g>
		</svg>
		),
		background: "#F35834",
		foreground: "c3c3c3"
	},
	edit: Edit,
	save,
	variations: [
		{
			name: 'mkt-blocks/gradient-blue',
			title: 'Text Blue Gradient',
			isDefault: true,
			icon: "wordpress",
			attributes: {
				gradient: "blue",
			}
		},
	],
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( { content, align } ) => {
					return createBlock( 'mkt-blocks/test-block', {
						text: content,
						alignment: align,
					} );
				},
			},
			{
				type: 'enter',
				regExp: /textbox/i,
				transform: () => {
					return createBlock( 'mkt-blocks/test-block', {
						text: 'New Text Box',
						shadow: true,
						gradient: 'blue',
					} );
				},
			},
			{
				type: 'prefix',
				prefix: 'textbox',
				transform: ( content ) => {
					return createBlock( 'mkt-blocks/test-block', {
						text: content,
					} );
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( { text, alignment } ) => {
					return createBlock( 'core/paragraph', {
						content: text,
						align: alignment,
					} );
				},
			},
		],
	},
});
