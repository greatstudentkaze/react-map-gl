(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+M/S":function(e,t,r){"use strict";var n=r("q1tI"),o=r("zCpp"),a=r("nTsD");function i(e){var t=Object(a.a)((function(t){return new t.mapLib.ScaleControl(e)}),{position:e.position});return t.options.unit===e.unit&&t.options.maxWidth===e.maxWidth||(t.options.maxWidth=e.maxWidth,t.setUnit(e.unit)),Object(n.useEffect)((function(){Object(o.a)(t._container,e.style)}),[e.style]),null}i.defaultProps={unit:"metric",maxWidth:100},t.a=n.memo(i)},"+t2D":function(e,t,r){"use strict";function n(e,t){var r=Array.isArray(e)?e[0]:e?e.x:0,n=Array.isArray(e)?e[1]:e?e.y:0,o=Array.isArray(t)?t[0]:t?t.x:0,a=Array.isArray(t)?t[1]:t?t.y:0;return r===o&&n===a}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!o(e[r],t[r]))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(var i=0,u=n;i<u.length;i++){var c=u[i];if(!t.hasOwnProperty(c))return!1;if(!o(e[c],t[c]))return!1}return!0}return!1}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}))},"5gko":function(e,t,r){"use strict";var n=r("rePB"),o=r("q1tI"),a=r("tP6N"),i=r("so0g"),u=r("+t2D");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=0;t.a=function(e){var t=Object(o.useContext)(a.a).map.getMap(),r=Object(o.useRef)(e),n=Object(o.useState)(0)[1],c=Object(o.useMemo)((function(){return e.id||"jsx-layer-"+l++}),[]);if(Object(o.useEffect)((function(){if(t){var e=function(){return n((function(e){return e+1}))};return t.on("styledata",e),e(),function(){t.off("styledata",e),t.style&&t.style._loaded&&t.getLayer(c)&&t.removeLayer(c)}}}),[t]),t&&t.style&&t.getLayer(c))try{!function(e,t,r,n){if(Object(i.a)(r.id===n.id,"layer id changed"),Object(i.a)(r.type===n.type,"layer type changed"),"custom"!==r.type&&"custom"!==n.type){var o=r.layout,a=void 0===o?{}:o,c=r.paint,s=void 0===c?{}:c,l=r.filter,f=r.minzoom,p=r.maxzoom,d=r.beforeId;if(d!==n.beforeId&&e.moveLayer(t,d),a!==n.layout){var m=n.layout||{};for(var v in a)Object(u.b)(a[v],m[v])||e.setLayoutProperty(t,v,a[v]);for(var y in m)a.hasOwnProperty(y)||e.setLayoutProperty(t,y,void 0)}if(s!==n.paint){var b=n.paint||{};for(var g in s)Object(u.b)(s[g],b[g])||e.setPaintProperty(t,g,s[g]);for(var h in b)s.hasOwnProperty(h)||e.setPaintProperty(t,h,void 0)}Object(u.b)(l,n.filter)||e.setFilter(t,l),f===n.minzoom&&p===n.maxzoom||e.setLayerZoomRange(t,f,p)}}(t,c,e,r.current)}catch(f){console.warn(f)}else!function(e,t,r){if(e.style&&e.style._loaded&&(!("source"in r)||e.getSource(r.source))){var n=s(s({},r),{},{id:t});delete n.beforeId,e.addLayer(n,r.beforeId)}}(t,c,e);return r.current=e,null}},"83gU":function(e,t,r){"use strict";var n=r("q1tI"),o=r("zCpp"),a=r("nTsD"),i=Object(n.forwardRef)((function(e,t){var r=Object(n.useRef)({props:e}),i=Object(a.a)((function(t){var n=new t.mapLib.GeolocateControl(e),o=n._setupUI;return n._setupUI=function(e){n._container.hasChildNodes()||o(e)},n.on("geolocate",(function(e){var t,n;null===(t=(n=r.current.props).onGeolocate)||void 0===t||t.call(n,e)})),n.on("error",(function(e){var t,n;null===(t=(n=r.current.props).onError)||void 0===t||t.call(n,e)})),n.on("outofmaxbounds",(function(e){var t,n;null===(t=(n=r.current.props).onOutOfMaxBounds)||void 0===t||t.call(n,e)})),n.on("trackuserlocationstart",(function(e){var t,n;null===(t=(n=r.current.props).onTrackUserLocationStart)||void 0===t||t.call(n,e)})),n.on("trackuserlocationend",(function(e){var t,n;null===(t=(n=r.current.props).onTrackUserLocationEnd)||void 0===t||t.call(n,e)})),n}),{position:e.position});return r.current.props=e,Object(n.useImperativeHandle)(t,(function(){return{trigger:function(){return i.trigger()}}}),[]),Object(n.useEffect)((function(){Object(o.a)(i._container,e.style)}),[e.style]),null}));i.displayName="GeolocateControl",t.a=n.memo(i)},AOuc:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("rePB");var n=r("q1tI");r("tP6N");var o=n.createContext(null)},BB3P:function(e,t,r){"use strict";var n=r("rePB"),o=r("q1tI"),a=r("tP6N"),i=r("so0g"),u=r("+t2D");function c(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var f=0;function p(e,t,r){if(e.style&&e.style._loaded){var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);return delete o.id,delete o.children,e.addSource(t,o),e.getSource(t)}return null}t.a=function(e){var t=Object(o.useContext)(a.a).map.getMap(),r=Object(o.useRef)(e),n=Object(o.useState)(0)[1],s=Object(o.useMemo)((function(){return e.id||"jsx-source-"+f++}),[]);Object(o.useEffect)((function(){if(t){var e=function(){return n((function(e){return e+1}))};return t.on("styledata",e),e(),function(){if(t.off("styledata",e),t.style&&t.style._loaded&&t.getSource(s)){var r,n=null===(r=t.getStyle())||void 0===r?void 0:r.layers;if(n)for(var o,a=c(n);!(o=a()).done;){var i=o.value;i.source===s&&t.removeLayer(i.id)}t.removeSource(s)}}}}),[t]);var l=t&&t.style&&t.getSource(s);return l?function(e,t,r){Object(i.a)(t.id===r.id,"source id changed"),Object(i.a)(t.type===r.type,"source type changed");var n="",o=0;for(var a in t)"children"===a||"id"===a||Object(u.b)(r[a],t[a])||(n=a,o++);if(o){var c=t.type;if("geojson"===c)e.setData(t.data);else if("image"===c)e.updateImage({url:t.url,coordinates:t.coordinates});else if("canvas"!==c&&"video"!==c||1!==o||"coordinates"!==n)if("vector"===c&&"setUrl"in e)switch(n){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles)}else console.warn("Unable to update <Source> prop: "+n);else e.setCoordinates(t.coordinates)}}(l,e,r.current):l=p(t,s,e),r.current=e,l&&o.Children.map(e.children,(function(e){return e&&Object(o.cloneElement)(e,{source:s})}))||null}},OSzm:function(e,t,r){"use strict";var n=r("q1tI"),o=r("zCpp"),a=r("nTsD");function i(e){var t=Object(a.a)((function(t){return new t.mapLib.NavigationControl(e)}),{position:e.position});return Object(n.useEffect)((function(){Object(o.a)(t._container,e.style)}),[e.style]),null}t.a=n.memo(i)},SA6Z:function(e,t,r){"use strict";var n=r("rePB"),o=r("q1tI"),a=r("i8i4"),i=r("zCpp"),u=r("tP6N"),c=r("+t2D");function s(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){return new Set(e?e.trim().split(/\s+/):[])}function d(e){var t=Object(o.useContext)(u.a),r=t.map,l=t.mapLib,d=Object(o.useMemo)((function(){return document.createElement("div")}),[]),m=Object(o.useRef)({props:e});m.current.props=e;var v=Object(o.useMemo)((function(){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),r=new l.Popup(t).setLngLat([e.longitude,e.latitude]);return r.once("open",(function(e){var t,r;null===(t=(r=m.current.props).onOpen)||void 0===t||t.call(r,e)})),r}),[]);if(Object(o.useEffect)((function(){var e=function(e){var t,r;null===(t=(r=m.current.props).onClose)||void 0===t||t.call(r,e)};return v.on("close",e),v.setDOMContent(d).addTo(r.getMap()),function(){v.off("close",e),v.isOpen()&&v.remove()}}),[]),Object(o.useEffect)((function(){Object(i.a)(v.getElement(),e.style)}),[e.style]),v.isOpen()&&(v.getLngLat().lng===e.longitude&&v.getLngLat().lat===e.latitude||v.setLngLat([e.longitude,e.latitude]),e.offset&&!Object(c.b)(v.options.offset,e.offset)&&v.setOffset(e.offset),v.options.anchor===e.anchor&&v.options.maxWidth===e.maxWidth||(v.options.anchor=e.anchor,v.setMaxWidth(e.maxWidth)),v.options.className!==e.className)){for(var y,b=p(v.options.className),g=p(e.className),h=s(b);!(y=h()).done;){var O=y.value;g.has(O)||v.removeClassName(O)}for(var j,P=s(g);!(j=P()).done;){var S=j.value;b.has(S)||v.addClassName(S)}v.options.className=e.className}return Object(a.createPortal)(e.children,d)}t.a=o.memo(d)},a1KU:function(e,t,r){"use strict";var n=r("q1tI"),o=r("zCpp"),a=r("nTsD");function i(e){var t=Object(a.a)((function(t){return new t.mapLib.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})}),{position:e.position});return Object(n.useEffect)((function(){Object(o.a)(t._controlContainer,e.style)}),[e.style]),null}t.a=n.memo(i)},bzer:function(e,t,r){"use strict";var n=r("tP6N");r.d(t,"default",(function(){return n.b})),r.d(t,"Map",(function(){return n.b}));var o=r("jnJa");r.d(t,"Marker",(function(){return o.a}));var a=r("SA6Z");r.d(t,"Popup",(function(){return a.a}));r("zfLA");var i=r("a1KU");r.d(t,"FullscreenControl",(function(){return i.a}));var u=r("83gU");r.d(t,"GeolocateControl",(function(){return u.a}));var c=r("OSzm");r.d(t,"NavigationControl",(function(){return c.a}));var s=r("+M/S");r.d(t,"ScaleControl",(function(){return s.a}));var l=r("BB3P");r.d(t,"Source",(function(){return l.a}));var f=r("5gko");r.d(t,"Layer",(function(){return f.a}));var p=r("nTsD");r.d(t,"useControl",(function(){return p.a}));r("AOuc"),r("nFRI")},jnJa:function(e,t,r){"use strict";var n=r("rePB"),o=r("q1tI"),a=r("i8i4"),i=r("zCpp"),u=r("tP6N"),c=r("+t2D");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=Object(o.useContext)(u.a),r=t.map,n=t.mapLib,s=Object(o.useRef)({props:e});s.current.props=e;var f=Object(o.useMemo)((function(){var t=!1;o.Children.forEach(e.children,(function(e){e&&(t=!0)}));var r=l(l({},e),{},{element:t?document.createElement("div"):null}),a=new n.Marker(r).setLngLat([e.longitude,e.latitude]);return a.getElement().addEventListener("click",(function(e){var t,r;null===(t=(r=s.current.props).onClick)||void 0===t||t.call(r,{type:"click",target:a,originalEvent:e})})),a.on("dragstart",(function(e){var t,r,n=e;n.lngLat=f.getLngLat(),null===(t=(r=s.current.props).onDragStart)||void 0===t||t.call(r,n)})),a.on("drag",(function(e){var t,r,n=e;n.lngLat=f.getLngLat(),null===(t=(r=s.current.props).onDrag)||void 0===t||t.call(r,n)})),a.on("dragend",(function(e){var t,r,n=e;n.lngLat=f.getLngLat(),null===(t=(r=s.current.props).onDragEnd)||void 0===t||t.call(r,n)})),a}),[]);return Object(o.useEffect)((function(){return f.addTo(r.getMap()),function(){f.remove()}}),[]),Object(o.useEffect)((function(){Object(i.a)(f.getElement(),e.style)}),[e.style]),f.getLngLat().lng===e.longitude&&f.getLngLat().lat===e.latitude||f.setLngLat([e.longitude,e.latitude]),e.offset&&!Object(c.a)(f.getOffset(),e.offset)&&f.setOffset(e.offset),f.isDraggable()!==e.draggable&&f.setDraggable(e.draggable),f.getRotation()!==e.rotation&&f.setRotation(e.rotation),f.getRotationAlignment()!==e.rotationAlignment&&f.setRotationAlignment(e.rotationAlignment),f.getPitchAlignment()!==e.pitchAlignment&&f.setPitchAlignment(e.pitchAlignment),f.getPopup()!==e.popup&&f.setPopup(e.popup),Object(a.createPortal)(e.children,f.getElement())}f.defaultProps={draggable:!1,popup:null,rotation:0,rotationAlignment:"auto",pitchAlignment:"auto"},t.a=o.memo(f)},nFRI:function(e,t){},nTsD:function(e,t,r){"use strict";var n=r("q1tI"),o=r("tP6N");t.a=function(e,t,r,a){var i=Object(n.useContext)(o.a),u=Object(n.useMemo)((function(){return e(i)}),[]);return Object(n.useEffect)((function(){var e=a||r||t,n="function"==typeof t&&"function"==typeof r?t:null,o="function"==typeof r?r:"function"==typeof t?t:null,c=i.map;return c.hasControl(u)||(c.addControl(u,null==e?void 0:e.position),n&&n(i)),function(){o&&o(i),c.hasControl(u)&&c.removeControl(u)}}),[]),u}},so0g:function(e,t,r){"use strict";function n(e,t){if(!e)throw new Error(t)}r.d(t,"a",(function(){return n}))},tP6N:function(e,t,r){"use strict";r.d(t,"a",(function(){return R}));var n=r("rePB"),o=r("q1tI"),a=r("AOuc"),i=r("vuIU");function u(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function c(e,t){var r=t.viewState||t,n=!1;if("longitude"in r&&"latitude"in r){var o=e.center;e.center=new o.constructor(r.longitude,r.latitude),n=n||o!==e.center}if("zoom"in r){var a=e.zoom;e.zoom=r.zoom,n=n||a!==e.zoom}if("bearing"in r){var i=e.bearing;e.bearing=r.bearing,n=n||i!==e.bearing}if("pitch"in r){var u=e.pitch;e.pitch=r.pitch,n=n||u!==e.pitch}return r.padding&&!e.isPaddingEqual(r.padding)&&(n=!0,e.padding=r.padding),n}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function m(e){if(!e)return null;if("string"==typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;for(var t,r={},n=f(e.layers);!(t=n()).done;){var o=t.value;r[o.id]=o}var a=e.layers.map((function(e){var t=r[e.ref],n=null;if("interactive"in e&&delete(n=l({},e)).interactive,t){delete(n=n||l({},e)).ref;for(var o,a=f(d);!(o=a()).done;){var i=o.value;i in t&&(n[i]=t[i])}}return n||e}));return l(l({},e),{},{layers:a})}var v=r("+t2D");function y(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},j={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},P={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},S=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],w=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"],_=function(){function e(e,t,r){var n=this;this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=function(e){var t=n.props[P[e.type]];t&&t(e)},this._onPointerEvent=function(e){"mousemove"!==e.type&&"mouseout"!==e.type||n._updateHover(e);var t=n.props[O[e.type]];if(t){if(n.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type){var r=n._hoveredFeatures||n._map.queryRenderedFeatures(e.point,{layers:n.props.interactiveLayerIds});e.features=r}t(e),delete e.features}},this._onCameraEvent=function(e){if(!n._internalUpdate){var t=n.props[j[e.type]];t&&t(e)}e.type in n._deferredEvents&&(n._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(r)}var t=e.prototype;return t.setProps=function(e){var t=this.props;this.props=e;var r=this._updateSettings(e,t);r&&this._createShadowTransform(this._map);var n=this._updateSize(e),o=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(r||n||o&&!this._map.isMoving())&&this.redraw()},e.reuse=function(t,r){var n=e.savedMaps.pop();if(!n)return null;var o=n.map,a=o.getContainer();for(r.className=a.className;a.childNodes.length>0;)r.appendChild(a.childNodes[0]);o._container=r,n.setProps(h(h({},t),{},{styleDiffing:!1})),o.resize();var i=t.initialViewState;return i&&(i.bounds?o.fitBounds(i.bounds,h(h({},i.fitBoundsOptions),{},{duration:0})):n._updateViewState(i,!1)),o.isStyleLoaded()?o.fire("load"):o.once("styledata",(function(){return o.fire("load")})),n},t._initialize=function(e){var t=this,r=this.props,n=h(h(h({},r),r.initialViewState),{},{accessToken:r.mapboxAccessToken||E()||null,container:e,style:m(r.mapStyle)}),o=n.initialViewState||n.viewState||n;if(Object.assign(n,{center:[o.longitude||0,o.latitude||0],zoom:o.zoom||0,pitch:o.pitch||0,bearing:o.bearing||0}),r.gl){var a=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){return HTMLCanvasElement.prototype.getContext=a,r.gl}}var i=new this._MapClass(n);o.padding&&i.setPadding(o.padding),r.cursor&&(i.getCanvas().style.cursor=r.cursor),this._createShadowTransform(i);var u=i._render;i._render=function(e){t._inRender=!0,u.call(i,e),t._inRender=!1};var c=i._renderTaskQueue.run;i._renderTaskQueue.run=function(e){c.call(i._renderTaskQueue,e),t._onBeforeRepaint()},i.on("render",(function(){return t._onAfterRepaint()}));var s=i.fire;for(var l in i.fire=this._fireEvent.bind(this,s),i.on("resize",(function(){t._renderTransform.resize(i.transform.width,i.transform.height)})),i.on("styledata",(function(){return t._updateStyleComponents(t.props,{})})),i.on("sourcedata",(function(){return t._updateStyleComponents(t.props,{})})),O)i.on(l,this._onPointerEvent);for(var f in j)i.on(f,this._onCameraEvent);for(var p in P)i.on(p,this._onEvent);this._map=i},t.recycle=function(){e.savedMaps.push(this)},t.destroy=function(){this._map.remove()},t.redraw=function(){var e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())},t._createShadowTransform=function(e){var t,r,n=(t=e.transform,(r=t.clone()).pixelsToGLUnits=t.pixelsToGLUnits,r);e.painter.transform=n,this._renderTransform=n},t._updateSize=function(e){var t=e.viewState;if(t){var r=this._map;if(t.width!==r.transform.width||t.height!==r.transform.height)return r.resize(),!0}return!1},t._updateViewState=function(e,t){if(this._internalUpdate)return!1;var r=this._map,n=this._renderTransform,o=n.zoom,a=n.pitch,i=n.bearing,s=r.isMoving();s&&(n.cameraElevationReference="sea");var l=c(n,h(h({},u(r.transform)),e));if(s&&(n.cameraElevationReference="ground"),l&&t){var f=this._deferredEvents;f.move=!0,f.zoom||(f.zoom=o!==n.zoom),f.rotate||(f.rotate=i!==n.bearing),f.pitch||(f.pitch=a!==n.pitch)}return s||c(r.transform,e),l},t._updateSettings=function(e,t){for(var r,n=this._map,o=!1,a=y(S);!(r=a()).done;){var i=r.value;i in e&&!Object(v.b)(e[i],t[i])&&(o=!0,n["set"+i[0].toUpperCase()+i.slice(1)](e[i]))}return o},t._updateStyle=function(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor),e.mapStyle!==t.mapStyle){var r={diff:e.styleDiffing};return"localIdeographFontFamily"in e&&(r.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(m(e.mapStyle),r),!0}return!1},t._updateStyleComponents=function(e,t){var r=this._map,n=!1;return r.style.loaded()&&("light"in e&&!Object(v.b)(e.light,t.light)&&(n=!0,r.setLight(e.light)),"fog"in e&&!Object(v.b)(e.fog,t.fog)&&(n=!0,r.setFog(e.fog)),"terrain"in e&&!Object(v.b)(e.terrain,t.terrain)&&(e.terrain&&!r.getSource(e.terrain.source)||(n=!0,r.setTerrain(e.terrain)))),n},t._updateHandlers=function(e,t){for(var r,n=this._map,o=!1,a=y(w);!(r=a()).done;){var i=r.value,u=e[i];Object(v.b)(u,t[i])||(o=!0,u?n[i].enable(u):n[i].disable())}return o},t._updateHover=function(e){var t=this.props;if(t.interactiveLayerIds&&(t.onMouseMove||t.onMouseEnter||t.onMouseLeave)){var r,n,o=e.type,a=(null===(r=this._hoveredFeatures)||void 0===r?void 0:r.length)>0;if("mousemove"===o)try{n=this._map.queryRenderedFeatures(e.point,{layers:t.interactiveLayerIds})}catch(u){n=[]}else n=[];var i=n.length>0;!i&&a&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=n,i&&!a&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=o}else this._hoveredFeatures=null},t._fireEvent=function(e,t,r){var n=this._map,o=n.transform,a="string"==typeof t?t:t.type;return"move"===a&&this._updateViewState(this.props,!1),a in j&&("object"==typeof t&&(t.viewState=u(o)),this._map.isMoving())?(n.transform=this._renderTransform,e.call(n,t,r),n.transform=o,n):(e.call(n,t,r),n)},t._onBeforeRepaint=function(){var e=this,t=this._map;for(var r in this._internalUpdate=!0,this._deferredEvents)this._deferredEvents[r]&&t.fire(r);this._internalUpdate=!1;var n=this._map.transform;this._map.transform=this._renderTransform,this._onAfterRepaint=function(){e._map.transform=n}},Object(i.a)(e,[{key:"map",get:function(){return this._map}},{key:"transform",get:function(){return this._renderTransform}}]),e}();function E(){var e=null;if("undefined"!=typeof location){var t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||"pk.eyJ1IjoidWNmLW1hcGJveCIsImEiOiJja2tyNHQzdnIzYmNnMndwZGI3djNzdjVyIn0.xgCXV9mLZ47q7easx6WLCQ"}catch(r){}try{e=e||{}.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(n){}return e}function C(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}_.savedMaps=[];var x=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function A(e,t){if(!e)return null;for(var r,n=e.map,o={getMap:function(){return n},getCenter:function(){return e.transform.center},getZoom:function(){return e.transform.zoom},getBearing:function(){return e.transform.bearing},getPitch:function(){return e.transform.pitch},getPadding:function(){return e.transform.padding},getBounds:function(){return e.transform.getBounds()},project:function(r){return e.transform.locationPoint(t.LngLat.convert(r))},unproject:function(r){return e.transform.pointLocation(t.Point.convert(r))},queryTerrainElevation:function(t,r){var o=n.transform;n.transform=e.transform;var a=n.queryTerrainElevation(t,r);return n.transform=o,a}},a=C(function(e){var t=new Set,r=e;for(;r;){for(var n,o=C(Object.getOwnPropertyNames(r));!(n=o()).done;){var a=n.value;"_"!==a[0]&&"function"==typeof e[a]&&"fire"!==a&&"setEventedParent"!==a&&t.add(a)}r=Object.getPrototypeOf(r)}return Array.from(t)}(n));!(r=a()).done;){var i=r.value;i in o||x.includes(i)||(o[i]=n[i].bind(n))}return o}var M="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;function I(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var R=o.createContext(null),k={minZoom:0,maxZoom:22,minPitch:0,maxPitch:60,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,mapStyle:{version:8,sources:{},layers:[]},styleDiffing:!0,projection:"mercator",renderWorldCopies:!0,onError:function(e){return console.error(e.error)},RTLTextPlugin:"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"},N=Object(o.forwardRef)((function(e,t){var i=Object(o.useContext)(a.a),u=Object(o.useState)(null),c=u[0],s=u[1],l=Object(o.useRef)(),f=Object(o.useRef)({mapLib:null,map:null}).current;Object(o.useEffect)((function(){var t,n=e.mapLib,o=!0;return Promise.resolve(n||r.e(27).then(r.t.bind(null,"bhPm",7))).then((function(r){if(o){if(r.Map||(r=r.default),!r||!r.Map)throw new Error("Invalid mapLib");if(!r.supported(e))throw new Error("Map is not supported by this browser");!function(e,t){for(var r,n=I(T);!(r=n()).done;){var o=r.value;o in t&&(e[o]=t[o])}t.RTLTextPlugin&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(t.RTLTextPlugin,(function(e){e&&console.error(e)}),!1)}(r,e),e.reuseMaps&&(t=_.reuse(e,l.current)),t||(t=new _(r.Map,e,l.current)),f.map=A(t,r),f.mapLib=r,s(t),null==i||i.onMapMount(f.map,e.id)}})).catch((function(t){e.onError({type:"error",target:null,originalEvent:null,error:t})})),function(){o=!1,t&&(null==i||i.onMapUnmount(e.id),e.reuseMaps?t.recycle():t.destroy())}}),[]),M((function(){c&&c.setProps(e)})),Object(o.useImperativeHandle)(t,(function(){return f.map}),[c]);var p=Object(o.useMemo)((function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({position:"relative",width:"100%",height:"100%"},e.style)}),[e.style]);return o.createElement("div",{id:e.id,ref:l,style:p},c&&o.createElement(R.Provider,{value:f},e.children))}));N.displayName="Map",N.defaultProps=k;t.b=N},zCpp:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function o(e,t){if(e&&t){var r=e.style;for(var o in t){var a=t[o];Number.isFinite(a)&&!n.test(o)?r[o]=a+"px":r[o]=a}}}},zfLA:function(e,t,r){"use strict";r("q1tI"),r("zCpp"),r("nTsD")}}]);