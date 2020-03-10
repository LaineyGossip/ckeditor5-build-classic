
import Command from '@ckeditor/ckeditor5-core/src/command';

function createAdEmbed( writer ) {
	return writer.createElement('adEmbedTop');
}

export default class InsertAdEmbedTopCommand extends Command {
	execute() {
		this.editor.model.change( writer => {
			// Insert <simpleBox>*</simpleBox> at the current selection position
			// in a way that will result in creating a valid model structure.
			this.editor.model.insertContent( createAdEmbed( writer ) );
		} );
	}

	refresh() {
		const model = this.editor.model;
		const selection = model.document.selection;
		const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), 'adEmbedTop');

		this.isEnabled = allowedIn !== null;
	}
}
