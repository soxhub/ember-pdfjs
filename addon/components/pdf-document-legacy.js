// globals PDFJS Promise window
/**
  This legacy component is for backwards compatibility with ember 1.12, and uses an actions block
**/

import Ember from 'ember';
import layout from '../templates/components/pdf-document-legacy';
import PDFDocumentComponent from './pdf-document';

const {
  get,
  set
} = Ember;

export default PDFDocumentComponent.extend({
  layout,

  setHeight: function(height, resize) {
    if (get(this, 'pageHeight') !== height) {
      set(this, 'pageHeight', height);
    }

    if (resize) {
      set(this, 'resize', true);
    }
  },

  actions: {
    setHeight: function(that, height, resize) {
      this.setHeight(height, resize);
    },

    doneScrolling: function() {
      this.doneScrolling(...arguments);
    }
  }
});
