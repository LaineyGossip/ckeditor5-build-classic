import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';
import InsertAdEmbedTopCommand from './adEmbedTopCommand';

export default class AdEmbedTopEditing extends Plugin {
	static get requires() {
		return [ Widget ];
	}

	init() {
		this._defineSchema();
		this._defineConverters();
		this.editor.commands.add( 'insertAdEmbedTop', new InsertAdEmbedTopCommand( this.editor ) );
	}

	_defineSchema() {
		const schema = this.editor.model.schema;
		schema.register( 'adEmbedTop', {
			isObject: true,
			allowWhere: '$block'
		} );
	}

	_defineConverters() {
		const conversion = this.editor.conversion;
		
		conversion.for( 'upcast' ).elementToElement( {
			model: 'adEmbedTop',
			view: {
				name: 'div',
				classes: 'ad-bigbox',
				attributes: {
					id: 'div-gpt-ad-1461009352217-0-slot-' + window.lainey.pageId
				}
			}
		} );

		conversion.for( 'dataDowncast' ).elementToElement( {
			model: 'adEmbedTop',
			view: {
				name: 'div',
				classes: 'ad-bigbox',
				attributes: {
					id: 'div-gpt-ad-1461009352217-0-slot-' + window.lainey.pageId
				}
			}
		} );

		conversion.for( 'editingDowncast' ).elementToElement( {
			model: 'adEmbedTop',
			view: ( modelElement, viewWriter ) => {
				const section = viewWriter.createContainerElement( 'div', { class: 'ad-embed-editor-top' } );

				return toWidget( section, viewWriter, { label: 'ad embed top' } );
			}
		} );
	}
}
