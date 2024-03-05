import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;
	return (
		<RichText.Content
			{...useBlockProps.save({
				className: `test-block--align-${alignment}`,
				style: {
					backgroundColor,
					color: textColor,
				},
			})}
			tagName="h4"
			value={text}
		/>
	);
}
