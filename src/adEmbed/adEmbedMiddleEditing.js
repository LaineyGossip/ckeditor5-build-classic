import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';
import InsertAdEmbedMiddleCommand from './adEmbedMiddleCommand';

export default class AdEmbedMiddleEditing extends Plugin {
	static get requires() {
		return [ Widget ];
	}
	
	init() {
		console.log( 'SimpleBoxEditing#init() got called' );
		this._defineSchema();
		this._defineConverters();
		
		this.editor.commands.add( 'insertAdEmbedMiddle', new InsertAdEmbedMiddleCommand( this.editor ) );
	}
	
	_defineSchema() {
		const schema = this.editor.model.schema;
		schema.register( 'adEmbedMiddle', {
			isObject: true,
			allowWhere: '$block'
		});
	}

	_defineConverters() {
		const conversion = this.editor.conversion;
		
		conversion.for( 'upcast' ).elementToElement( {
			model: 'adEmbedMiddle',
			view: {
				name: 'div',
				classes: 'ad-bigbox',
				attributes: {
					id: "div-gpt-ad-1490283400205-0-slot-" + lainey.pageId
				}
			}
		} );
		
		conversion.for( 'dataDowncast' ).elementToElement( {
			model: 'adEmbedMiddle',
			view: {
				name: 'div',
				classes: 'ad-bigbox',
				attributes: {
					id: "div-gpt-ad-1490283400205-0-slot-" + lainey.pageId
				}
			}
		} );
		
		conversion.for( 'editingDowncast' ).elementToElement( {
			model: 'adEmbedMiddle',
			view: ( modelElement, viewWriter ) => {
				const section = viewWriter.createContainerElement( 'div', { class: 'ad-embed-editor-middle' } );

				return toWidget( section, viewWriter, { label: 'ad embed middle' } );
			}
		} );
	}
}