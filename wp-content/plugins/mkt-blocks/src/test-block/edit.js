import { __ } from "@wordpress/i18n";
import { useState } from "react";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls
} from "@wordpress/block-editor";
import "./editor.scss";
import { PanelBody, RangeControl } from "@wordpress/components";
import classnames from "classnames";



export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { text, alignment, style, shadow, shadowOpacity } = attributes;

	const classes = classnames( `test-block--align-${alignment}`, {
		'has-shadow': shadow,
		[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
	});

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	const onChangeShadowOpacity = (newShadowOpacity) => {
		setAttributes({ shadowOpacity: newShadowOpacity });
	}

	const toggleShadow = () => {
		setAttributes({ shadow: !shadow });
	}

	return (
		<>
		{ shadow && (
			<InspectorControls>
				<PanelBody title={__("Shadow Settings", "mkt-blocks")}>
					<RangeControl
						label={__("Shadow Opacity", "mkt-blocks")}
						value={shadowOpacity}
						onChange={onChangeShadowOpacity}
						min={10}
						max={50}
						step={10}
					/>
				</PanelBody>
			</InspectorControls>
		)}
			<BlockControls controls={[
				{
					icon: "admin-page",
					title: __("Shadow", "mkt-blocks"),
					onClick: toggleShadow,
					isActive: shadow,
				},
			]}>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>
				<RichText
					{...useBlockProps({
						className: classes,
					})}
					onChange={onChangeText}
					value={text}
					placeholder={__("Your Text", "mkt-blocks")}
					tagName="h4"
					allowedFormats={[
						'core/bold',
						'core/italic',
						'core/strikethrough',
						'core/link',
					]}
				/>
		</>
	);
}

