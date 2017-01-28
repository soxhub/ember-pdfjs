'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-pdfjs',

  treeFor: function(/* tree? */) {

    var trees = [];

    trees.push(this._super.treeFor.apply(this, arguments));

    var PDFJS = new Funnel('bower_components/pdfjs-dist/build',{
        srcDir: '/',
        files: ['pdf.js','pdf.worker.js'],
        destDir: '/'
    });

    trees.push(PDFJS);

    var PDFJSExtras = new Funnel('bower_components/pdfjs-dist/web',{
        srcDir: '/',
        files: ['compatibility.js'],
        destDir: '/assets'
    });

    trees.push(PDFJSExtras)

    var PDFJSCmaps = new Funnel('bower_components/pdfjs-dist/cmaps',{
        srcDir: '/',
        files: ['**/*.bcmap'],
        destDir: '/assets/web/cmaps'
    });

    trees.push(PDFJSCmaps);

    return mergeTrees(trees);
  },

  treeForPublic: function(tree) {
    var trees = [];
    trees.push(this._super.treeForPublic.apply(this, arguments));

    var publicFiles = new Funnel(tree, {
        srcDir: '/',
        files: ['test.pdf'],
        destDir: '/assets'
    });

    trees.push(publicFiles);

    return mergeTrees(trees);
  },

  included: function(app, parentAddon) {

    this._super.included.apply(this, arguments);

    var target = (parentAddon || app);

    target.import(target.bowerDirectory + '/pdfjs-dist/build/pdf.js');
    target.import(target.bowerDirectory + '/pdfjs-dist/build/pdf.worker.js');
    target.import(target.bowerDirectory + '/pdfjs-dist/web/pdf_viewer.css');
    target.import(target.bowerDirectory + '/pdfjs-dist/web/pdf_viewer.js');

  }
}
