# Ember PDFJS Addon

This addon will add [PDFJS](https://mozilla.github.io/pdf.js/) to your `ember-cli` project.

## Installation

Within your `ember-cli` project:

* `ember install ember-pdfjs`

This will add a `pdf-document` component to your application.

Scrolling causes new pages to render and old pages to expire from the DOM. Only 4 pages will be rendered at any given time. This results in quick load times of very large PDFs.

Each page that renders will first render a `canvas` with the PDF and then render a `$textLayer` div that overlays the `canvas` with selectable text.

Pages unload by doing `this.$().html('');` as they scroll out of view.

## Standalone Sample
Though this project is an `addon` type for including a component in your Ember project, you can also kick the tires on the component in a live sample with this project.

````
git clone git@github.com:mysterlune/ember-pdfjs.git
cd ember-pdfjs && npm install && bower install
ember serve
````

... and in typical Ember fashion, a development server will fire up on port `--4200`. Then, simply visit:

````
http://localhost:4200
````

... and take a look at the familar, lovely "tracemonkey" document.

## Usage

In a template, just do:

````
{{pdf-document src=[model.src]}}
````
or
````
{{pdf-document src="/path/to/your.pdf"}}
````

### Note on Security
You will get errors and it will not load if you try to link to something not hosted on your domain. You will need to update `contentSecurityPolicy` in your Ember project accordingly.

Checkout [Ember Igniter](https://emberigniter.com/modify-content-security-policy-on-new-ember-cli-app/) for a how-to on updating `contentSecurityPolicy` for your app.


## Caveats
The goals of this project are spelled out in [Issues](https://github.com/mysterlune/ember-pdfjs/issues/2). If there are recommendations that you need for own project, likely they will benefit others.

## Running Tests

* `ember test`

## Contributing
If you have an "ember-ish"/"pdf.js-ish" addon project in the works -- or don't think this project will work for your needs -- please let's try to pull this together into one solution.

The Ember Community maintains a fundamental precept of common solutions to common problems. Proliferating addon solutions is kinda bunk, from a community perspective.

Please contribute!

> We confessed that we're not the only ones trying to climb the same mountain.
> 
> -- <cite>[DHH](https://youtu.be/9naDS3r4MbY?t=882), on the character of the Rails Community</cite>