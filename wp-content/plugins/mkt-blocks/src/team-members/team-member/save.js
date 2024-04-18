import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { name, bio, backgroundColor, url, alt, id } = attributes;

	return (
		<div {...useBlockProps.save(
			{ className: `team-member`, style: { backgroundColor: backgroundColor } }
		)}>
			{ url && <img src={url} alt={alt} className={id ? `wp-image-${id}` : ''} /> }
			<RichText.Content tagName="h4" value={name} />
			<RichText.Content tagName="p" value={bio} />
		</div>
	);
}
