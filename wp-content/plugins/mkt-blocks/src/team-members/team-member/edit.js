import { useEffect, useState } from "@wordpress/element";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ColorPicker,
	Spinner,
	ToolbarButton,
	TextareaControl,
	SelectControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";

export default function Edit({ attributes, setAttributes }) {
	const { name, bio, backgroundColor, url, alt, id } = attributes;
	const [blobURL, setBlobURL] = useState();

	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};
	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};
	const onSelectImage = (media) => {
		if (!media || !media.url) {
			setAttributes({
				id: null,
				url: null,
				alt: "",
			});
			return;
		}
		setAttributes({
			id: media.id,
			url: media.url,
			alt: media.alt,
		});
	};
	const onSelectURL = (url) => {
		setAttributes({
			id: null,
			url: url,
			alt: "",
		});
	};

	const removeImage = () => {
		setAttributes({
			id: null,
			url: null,
			alt: "",
		});
	};

	const onChangeAlt = (newAlt) => {
		setAttributes({ alt: newAlt });
	};

	useEffect(() => {
		if (!id && isBlobURL(url)) {
			setAttributes({ url: null, alt: "" });
		}
	}, [url]);

	useEffect(() => {
		if (isBlobURL(url)) {
			setBlobURL(url);
		} else {
			revokeBlobURL(blobURL);
			setBlobURL();
		}
	}, [url]);

	return (
		<>
			{url && (
				<BlockControls group="inline">
					<MediaReplaceFlow
						name={__("Replace Image", "mkt-blocks")}
						mediaId={id}
						mediaURL={url}
						mediaAlt={alt}
						accept="image/*"
						allowedTypes={["image"]}
						onSelect={onSelectImage}
						onSelectURL={onSelectURL}
					/>
					<ToolbarButton onClick={removeImage}>
						{__("Remove image", "mkt-blocks")}
					</ToolbarButton>
				</BlockControls>
			)}
			<div
				{...useBlockProps({
					className: `team-member`,
					style: { backgroundColor },
				})}
			>
				<InspectorControls>
					<PanelBody
						title={__("Team Member Settings", "mkt-blocks")}
						initialOpen={true}
					>
						{id && 
							<SelectControl 
								label={__("Image Size", "mkt-blocks")}
								value={attributes.size}
								options={[
									{ label: __("Small", "mkt-blocks"), value: "small" },
									{ label: __("Medium", "mkt-blocks"), value: "medium" },
									{ label: __("Large", "mkt-blocks"), value: "large" },
								]}
								onChange={(size) => setAttributes({ size })}
							/>
						}
						{url && !isBlobURL(url) && (
							<TextareaControl
								label={__("Alt Text", "mkt-blocks")}
								value={alt}
								onChange={onChangeAlt}
								help={__("Change the alt text for the image", "mkt-blocks")}
							/>
						)}
						<p>{__("Background Color", "mkt-blocks")}</p>
						<ColorPicker
							color={backgroundColor}
							onChange={(newColor) =>
								setAttributes({ backgroundColor: newColor })
							}
						/>
					</PanelBody>
				</InspectorControls>
				{url && ( // If there is a URL, show the image
					<div
						className={`wp-block-mkt-blocks-team-member-img${
							isBlobURL(url) ? " is-loading" : ""
						} `}
					>
						<img src={url} alt={alt ? alt : ""} />
						{isBlobURL(url) && <Spinner />}
					</div>
				)}
				<MediaPlaceholder
					icon="admin-users"
					onSelect={onSelectImage}
					onSelectURL={onSelectURL}
					accept="image/*"
					allowedTypes={["image"]}
					disableMediaButtons={url}
				/>
				<RichText
					tagName="h4"
					placeholder={__("Team Member", "mkt-blocks")}
					onChange={onChangeName}
					value={name}
					allowedFormats={[]}
				/>
				<RichText
					tagName="p"
					placeholder={__("Bio goes here.", "mkt-blocks")}
					value={bio}
					onChange={onChangeBio}
					allowedFormats={[]}
				/>
			</div>
		</>
	);
}
