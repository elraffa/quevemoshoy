import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import "./team-member";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	icon: {
		src: (
			<svg viewBox="0 0 24 24" fill="#fffff" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 16C10 17.6569 8.65685 19 7 19C5.34315 19 4 17.6569 4 16C4 14.3431 5.34315 13 7 13C8.65685 13 10 14.3431 10 16Z" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 16C20 17.6569 18.6569 19 17 19C15.3431 19 14 17.6569 14 16C14 14.3431 15.3431 13 17 13C18.6569 13 20 14.3431 20 16Z" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
		),
		background: "#F35834",
		foreground: "#ffffff",
	},
	edit: Edit,
	save,

});
