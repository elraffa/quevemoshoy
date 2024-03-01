/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	useBlockEditContext,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import { Slider } from './slider';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { autoplay, navigation, pagination } = attributes;
	const { clientId } = useBlockEditContext();
	const blockProps = useBlockProps();

	return (
		<>
			<div { ...blockProps }>
				<Slider attributes={ attributes } clientId={ clientId } />
			</div>

			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'wpe' ) }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Autoplay', 'wpe' ) }
							checked={ autoplay }
							onChange={ ( value ) =>
								setAttributes( { autoplay: value } )
							}
							help={ __(
								'“Autoplay” will automatically advance the slides. Note: this is intentionally disabled in the editor, but will affect the front end.'
							) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Navigation', 'wpe' ) }
							checked={ navigation }
							onChange={ ( value ) =>
								setAttributes( { navigation: value } )
							}
							help={ __(
								'“Navigation” will display arrows so user can navigate forward/backward.'
							) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Pagination', 'wpe' ) }
							checked={ pagination }
							onChange={ ( value ) =>
								setAttributes( { pagination: value } )
							}
							help={ __(
								'“Pagination” will display dots along the bottom for user to click through slides.'
							) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
