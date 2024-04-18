import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "react";
import { PanelBody, RangeControl } from "@wordpress/components";
import classnames from "classnames";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from "@wordpress/block-editor";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { text, alignment, style, shadow, shadowOpacity, posts } = attributes;

	const classes = classnames(`test-block--align-${alignment}`, {
		"has-shadow": shadow,
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
	};

	const toggleShadow = () => {
		setAttributes({ shadow: !shadow });
	};

	// Fetch posts data
	useEffect(() => {
		// Replace this with your actual API endpoint or data fetching logic
		fetch("http://localhost:10003/wp-json/wp/v2/posts")
			.then((response) => response.json())
			.then((data) => {
				setAttributes({ posts: data });
			})
			.catch((error) => {
				console.error("Error fetching posts:", error);
			});
	}, []);

	// Call useBlockProps at the top level of your component
	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<>
			{shadow && (
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
			<BlockControls
				controls={[
					{
						icon: "admin-page",
						title: __("Shadow", "mkt-blocks"),
						onClick: toggleShadow,
						isActive: shadow,
					},
				]}
			>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>
			<div>
			{posts &&
				posts.map((post) => (
					<div key={post.id}>
						<RichText
							value={post.title.rendered}
							tagName="h4"
							allowedFormats={[
								"core/bold",
								"core/italic",
								"core/strikethrough",
								"core/link",
							]}
						/>
						{post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
							<img
								src={post._embedded["wp:featuredmedia"][0].source_url}
								alt={post.title.rendered}
							/>
						)}
						<RichText
							value={post.excerpt.rendered}
							tagName="p"
							allowedFormats={[
								"core/bold",
								"core/italic",
								"core/strikethrough",
								"core/link",
							]}
						/>
					</div>
				))}
			</div>
		</>
	);
}
