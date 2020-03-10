import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';
import InsertAdEmbedBottomCommand from './adEmbedBottomCommand';

export default class AdEmbedBottomEditing extends Plugin {
	static get requires() {
		return [ Widget ];
	}
	
	init() {
		this._defineSchema();
		this._defineConverters();
		
		this.editor.commands.add('insertAdEmbedBottom', new InsertAdEmbedBottomCommand( this.editor ));
	}
	
	_defineSchema() {
		const schema = this.editor.model.schema;
		schema.register( 'adEmbedBottom', {
			isObject: true,
			allowWhere: '$block'
		});
	}

	_defineConverters() {
		const conversion = this.editor.conversion;
		
		conversion.for( 'upcast' ).elementToElement( {
			model: 'adEmbedBottom',
			view: {
				name: 'div',
				classes: 'ad-bigbox',
				attributes: {
					id: "div-gpt-ad-1508183656681-0-slot-" + lainey.pageId
				}
			}
		} );
		
		conversion.for( 'dataDowncast' ).elementToElement( {
			model: 'adEmbedBottom',
			view: {
				name: 'div',
				classes: 'ad-bigbox',
				attributes: {
					id: "div-gpt-ad-1508183656681-0-slot-" + lainey.pageId
				}
			}
		} );
		
		conversion.for( 'editingDowncast' ).elementToElement( {
			model: 'adEmbedBottom',
			view: ( modelElement, viewWriter ) => {
				const section = viewWriter.createContainerElement( 'div', { class: 'ad-embed-editor-bottom' });

				return toWidget( section, viewWriter, { label: 'ad embed bottom' });
			}
		} );
	}
}