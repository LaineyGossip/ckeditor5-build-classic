import AdEmbedMiddleEditing from './adEmbedMiddleEditing';
import AdEmbedMiddleUI from './adEmbedMiddleUI';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class AdEmbedMiddle extends Plugin {
	static get requires() {
		return [ AdEmbedMiddleEditing, AdEmbedMiddleUI ];
	}
}