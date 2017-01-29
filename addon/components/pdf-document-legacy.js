// globals PDFJS Promise window
/**
  This legacy component is for backwards compatibility with ember 1.12, and uses an actions block
**/


/**
* This program has 3 basic workflows.
*
* First is the loading of the document and generation of the individual pages.
* This happens using methods on the PDFJS global and is a promise chain. It
* populates the get(this, 'pages') array and renders the initial pages.
*
* The second workflow is the sizing of the pages and blank pages. This happens
* through communication with pdf-page. pdf-page lets pdf-document know the height
* of the first canvas rendered. pdf-document observes this and then sets the
* height property on all pages. All pdf-pages then resize themselves.
*
* The third workflows are the scroll and resize bindings. The addon will only
* render 3-5 pages at a time. When the user scrolls new pages will become rendered
* and old pages will be removed from the DOM. Resizing the width of the page will
* cause the pages to be re-rendered and all the page sizes will change. It also
* makes its best effort at snapping the page to what it was before resizing. This
* can get a little wonky when resizing really small and huge.
*
* It also has testing hooks built in that will notify acceptance tests when certain
* promises have been resolved. If it finds the #ember-testing-container then it will
* activate these hooks.
*/

import Ember from 'ember';
import layout from '../templates/components/pdf-document-legacy';
import PDFDocumentComponent from './pdf-document';

/**
*  Test hooks so tests know when all the async calls in this component have
*  been resolved.
*/
let testing = $('#ember-testing-container').length;

let componentLoaded;
let componentScrolled;
let finishedLoading;
let finishedScrolling;

if (testing) {
  componentLoaded = new Promise((resolve/*, reject*/) => {
    finishedLoading = resolve;
  });

  componentScrolled = new Promise((resolve/*, reject*/) => {
    finishedScrolling = resolve;
  });
}

export default PDFDocumentComponent.extend({
  layout,

  actions: {
    setHeight: function() {
      this.setHeight(...arguments);
    },

    doneScrolling: function() {
      this.doneScrolling(...arguments);
    }
  }
});
