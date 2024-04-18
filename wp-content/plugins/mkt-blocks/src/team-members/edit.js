import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;

	const onChangeColumns = (newColumns) => {
		setAttributes({ columns: newColumns });
	};

	return (
		<div {...useBlockProps({
			className: `has-${columns}-columns`
		})}>
			<InspectorControls>
				<PanelBody title={__("Team Member Settings", "mkt-blocks")}>
					<RangeControl
						label={__("Number of Columns", "mkt-blocks")}
						value={columns}
						onChange={onChangeColumns}
						min={1}
						max={6}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={["mkt-blocks/team-member"]}
				orientation="horizontal"
				template={[
					["mkt-blocks/team-member"],
					["mkt-blocks/team-member"],
					["mkt-blocks/team-member"]
				]}
			/>
		</div>
	);
}

