import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;
	const onChangeBackgroundColor = (newColor) => {
		setAttributes({ backgroundColor: newColor });
	};
	const onChangeTextColor = (newColor) => {
		setAttributes({ textColor: newColor });
	};
	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};
	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__("Color Settings", "mkt-blocks")}
					initialOpen
					disableCustomColors={false}
					icon="admin-appearance"
					colorSettings={[
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __("Background Color", "mkt-blocks"),
						},
						{
							value: textColor,
							onChange: onChangeTextColor,
							label: __("Text Color", "mkt-blocks"),
						},
					]}
				/>

			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>
			<RichText
				{...useBlockProps({
					className: `test-block--align-${alignment}`,
					style: {
						backgroundColor,
						color: textColor,
					},
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__("Your Text", "mkt-blocks")}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
