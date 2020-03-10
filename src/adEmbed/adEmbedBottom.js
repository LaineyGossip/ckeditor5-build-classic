import AdEmbedBottomEditing from './adEmbedBottomEditing';
import AdEmbedBottomUI from './adEmbedBottomUI';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class AdEmbedBottom extends Plugin {
	static get requires() {
		return [ AdEmbedBottomEditing, AdEmbedBottomUI ];
	}
}