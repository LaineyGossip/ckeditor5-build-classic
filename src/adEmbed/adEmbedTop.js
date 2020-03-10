import AdEmbedTopEditing from './adEmbedTopEditing';
import AdEmbedTopUI from './adEmbedTopUI';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class AdEmbedTop extends Plugin {
	static get requires() {
		return [ AdEmbedTopEditing, AdEmbedTopUI ];
	}
}