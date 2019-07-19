// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Gallery.soy.
 */

goog.provide('Gallery.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Gallery.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_submitDisabled">Your movie doesn\'t move. Use blocks to make something interesting. Then you may submit your movie to the gallery.</span></div>';
};
if (goog.DEBUG) {
  Gallery.soy.messages.soyTemplateName = 'Gallery.soy.messages';
}


Gallery.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: soy.$$escapeHtml(opt_ijData.appName) + 'Gallery'}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select></td></tr></table><div id="gallery"></div><div id="loading"><img src="common/loading.gif"></div>';
};
if (goog.DEBUG) {
  Gallery.soy.start.soyTemplateName = 'Gallery.soy.start';
}


Gallery.soy.record = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="galleryThumb">' + ((opt_data.key) ? '<input type="checkbox" id="publish-' + soy.$$escapeHtml(opt_data.key) + '"' + ((opt_data.published) ? ' checked ' : '') + 'onchange="Gallery.publish(this)">' : '') + '<a href="/' + soy.$$escapeHtml(opt_data.app) + '?level=10#' + soy.$$escapeHtml(opt_data.uuid) + '"><img src="' + soy.$$escapeHtml(opt_data.thumb) + '"></a></div><div class="galleryTitle"><a href="/' + soy.$$escapeHtml(opt_data.app) + '?level=10#' + soy.$$escapeHtml(opt_data.uuid) + '">' + soy.$$escapeHtml(opt_data.title) + '</a></div>';
};
if (goog.DEBUG) {
  Gallery.soy.record.soyTemplateName = 'Gallery.soy.record';
}
