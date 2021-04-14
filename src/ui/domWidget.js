var widget = require('./widget');
var inherit = require('../inherit');
var registerWidget = require('../registry').registerWidget;

var domWidget = function (arg) {
  'use strict';
  if (!(this instanceof domWidget)) {
    return new domWidget(arg);
  }

  widget.call(this, arg);

  var m_this = this,
      m_default_canvas = 'div';

  /**
   * Initializes DOM Widget.
   * Sets the canvas for the widget, does parent/child relationship management,
   * appends it to it's parent and handles any positioning logic.
   */
  this._init = function () {
    if (arg.hasOwnProperty('parent')) {
      arg.parent.addChild(m_this);
    }

    m_this._createCanvas();
    m_this._appendChild();

    m_this.canvas().addEventListener('mousedown', function (e) {
      e.stopPropagation();
    });

    m_this.reposition();
  };

  /**
   * Creates the widget canvas.
   * This is just a simple DOM element (based on args.el, or defaults to a div)
   */
  this._createCanvas = function () {
    m_this.canvas(document.createElement(arg.el || m_default_canvas));
  };

  return this;
};

inherit(domWidget, widget);

registerWidget('dom', 'dom', domWidget);
module.exports = domWidget;
