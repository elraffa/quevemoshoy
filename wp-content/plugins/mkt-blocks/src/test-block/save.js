import {
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import classnames from "classnames";

export default function Save({ attributes }) {
	const {
		text,
		alignment,
		shadow,
		shadowOpacity,
	} = attributes;


	const classes = classnames( `test-block--align-${alignment}`, {
		'has-shadow': shadow,
		[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
	});

	return (
		<RichText.Content
			{...useBlockProps.save({
				className: classes,
			})}
			tagName="h4"
			value={text}
		/>
	);
}
