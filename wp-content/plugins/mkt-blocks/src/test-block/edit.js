import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {text} = attributes;
	return (
		<>
			<BlockControls controls={[{
				icon: "admin-generic",
				title: __("My Block Controls", "mkt-blocks"),
				isActive: true,
				onClick: () => alert("You clicked me!")
			},
			{
				icon: "admin-collapse",
				title: __("My Block Controls", "mkt-blocks"),
				onClick: () => alert("You clicked me 2!")
			}
			]}>
			<ToolbarGroup>
				<ToolbarButton title="Align Left" icon="editor-alignleft" onClick={() => alert("Align Left")} />
			</ToolbarGroup>
			</BlockControls>
			<RichText {...useBlockProps() }
				onChange={ (value ) => setAttributes({ text: value })}
				value={text}
				placeholder={__("Your Text", "mkt-blocks")}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
