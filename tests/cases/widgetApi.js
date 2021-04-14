var geo = require('../test-utils').geo;
var createMap = require('../test-utils').createMap;
var $ = require('jquery');

describe('widget api', function () {
  'use strict';

  function makeMap() {
    var map;

    map = createMap({
      center: {
        x: -98.0,
        y: 39.5
      },
      zoom: 5
    }, {width: '500px', height: '400px'});

    var uiLayer = map.createLayer('ui');
    map.draw();
    return {map: map, uiLayer: uiLayer};
  }

  it('a widget should have the UI layer as its parent', function () {
    var widget = makeMap().uiLayer.createWidget('dom');

    expect(widget.parent()).toEqual(jasmine.any(geo.gui.uiLayer));
  });

  it('a widget stuck to albany shouldn\'t be in the viewport ' +
     'if we pan to moscow',
     function () {
       var o = makeMap(), widget = o.uiLayer.createWidget(
         'dom', {
           position: {
             x: -73.7572,
             y: 42.6525
           }
         }
       );

       o.map.center({x: 37.6167, y: 55.7500});
       expect(widget.isInViewport()).toBe(false);
     });

  it('a widget stuck to albany should be in the viewport if albany is', function () {
    var o = makeMap(),
        widget = o.uiLayer.createWidget('dom', {
          position: {
            x: -73.7572,
            y: 42.6525
          }
        });

    o.map.center({x: -73.7572, y: 42.6525});
    expect(widget.isInViewport()).toBe(true);

  });

  it('a widget stuck to the top left should always be in the viewport', function () {
    var o = makeMap(), widget = o.uiLayer.createWidget('dom');

    expect($(widget.canvas()).position()).toEqual({top: 0, left: 0});

    o.map.center({x: 37.6167, y: 55.7500});
    expect(widget.isInViewport()).toBe(true);
    expect($(widget.canvas()).position()).toEqual({top: 0, left: 0});
  });

  it('Widgets positions can be changed', function () {
    var o = makeMap(), widget = o.uiLayer.createWidget('dom', {
          position: {left: 15, top: 10}});

    expect($(widget.canvas()).position()).toEqual({top: 10, left: 15});
    widget.position({top: null, bottom: '20%', left: 10});
    expect(widget.position()).toEqual({top: null, bottom: '20%', left: 10});
    expect($(widget.canvas()).position()).toEqual({top: 320, left: 10});
  });

  it('nested widgets should be properly structured', function () {
    var o = makeMap();
    var domWidget = o.uiLayer.createWidget('dom');
    var svgWidget = o.uiLayer.createWidget('svg', {
      parent: domWidget
    });
    var widgetCount = $(o.uiLayer.canvas()).children().length;

    expect($(svgWidget.canvas()).parent()[0]).toBe($(domWidget.canvas())[0]);

    // Only top level widgets are children of the UI Layer
    // So removing the domWidget will also remove the svgWidget, but only
    // reduce the number of widgets the UILayer has as children by 1
    domWidget._exit();
    expect($(o.uiLayer.canvas()).children().length).toBe(widgetCount - 1);
  });
});
