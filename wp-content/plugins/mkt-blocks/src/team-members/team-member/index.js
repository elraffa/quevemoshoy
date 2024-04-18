import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";
import Save from "./save";

registerBlockType("mkt-blocks/team-member", {
	apiVersion: 2,
	title: __("Team Member", "mkt-blocks"),
	description: __("A custom block for displaying a team member.", "mkt-blocks"),
	icon: "admin-users",
	parent: ["mkt-blocks/team-members"],
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		name: {
			type: "string",
			source: "html",
			selector: "h4",
		},
		bio: {
			type: "string",
			source: "html",
			selector: "p",
		},
		backgroundColor: {
			type: "string",
		},
		id: {
			type: "number",
		},
		url: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "src",
		},
		alt: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "alt",
			default: "",
		},
	},
	edit: Edit,
	save: Save,
});
