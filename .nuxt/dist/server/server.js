module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/about-us/index","2":"pages/contact-us/index","3":"pages/home/index","4":"pages/index","5":"pages/portfolio/index","6":"pages/product-landing/index","7":"pages/services/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const info = __webpack_require__(33);

const rootKeys = ['class-name', 'class', 'style'];

function propsToData(props, doc) {
  return Object.keys(props).reduce(function (data, key) {
    const k = key.replace(/.*:/, '');
    let obj = rootKeys.includes(k) ? data : data.attrs;
    const value = props[key];
    const {
      attribute
    } = info.find(info.html, key);

    if (key === 'v-bind') {
      let val = doc[value];

      if (!val) {
        val = eval(`(${value})`);
      }

      obj = Object.assign(obj, val);
    } else if (key.indexOf(':') === 0 || key.indexOf('v-bind:') === 0) {
      key = key.replace('v-bind:', '').replace(':', '');

      if (doc[value]) {
        obj[key] = doc[value];
      } else {
        obj[key] = eval(`(${value})`);
      }
    } else if (Array.isArray(value)) {
      obj[attribute] = value.join(' ');
    } else {
      obj[attribute] = value;
    }

    return data;
  }, {
    attrs: {}
  });
}
/**
 * Create the scoped slots from `node` template children. Templates for default
 * slots are processed as regular children in `processNode`.
 */


function slotsToData(node, h, doc) {
  const data = {};
  const children = node.children || [];
  children.forEach(child => {
    // Regular children and default templates are processed inside `processNode`.
    if (!isTemplate(child) || isDefaultTemplate(child)) {
      return;
    } // Non-default templates are converted into slots.


    data.scopedSlots = data.scopedSlots || {};
    const template = child;
    const name = getSlotName(template);
    const vDomTree = template.content.map(tmplNode => processNode(tmplNode, h, doc));

    data.scopedSlots[name] = function () {
      return vDomTree;
    };
  });
  return data;
}

function processNode(node, h, doc) {
  /**
   * Return raw value as it is
   */
  if (node.type === 'text') {
    return node.value;
  }

  const slotData = slotsToData(node || {}, h, doc);
  const propData = propsToData(node.props, doc);
  const data = Object.assign({}, slotData, propData);
  /**
   * Process child nodes, flat-mapping templates pointing to default slots.
   */

  const children = [];

  for (const child of node.children) {
    // Template nodes pointing to non-default slots are processed inside `slotsToData`.
    if (isTemplate(child) && !isDefaultTemplate(child)) {
      continue;
    }

    const processQueue = isDefaultTemplate(child) ? child.content : [child];
    children.push(...processQueue.map(node => processNode(node, h, doc)));
  }

  return h(node.tag, data, children);
}

const DEFAULT_SLOT = 'default';

function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}

function isTemplate(node) {
  return node.tag === 'template';
}

function getSlotName(node) {
  let name = '';

  for (const propName of Object.keys(node.props)) {
    if (!propName.startsWith('#') && !propName.startsWith('v-slot:')) {
      return;
    }

    name = propName.split(/[:#]/, 2)[1];
    break;
  }

  return name || DEFAULT_SLOT;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'NuxtContent',
  functional: true,
  props: {
    document: {
      required: true
    }
  },

  render(h, {
    data,
    props
  }) {
    const {
      document
    } = props;
    const {
      body
    } = document || {};

    if (!body || !body.children || !Array.isArray(body.children)) {
      return;
    }

    let classes = [];

    if (Array.isArray(data.class)) {
      classes = data.class;
    } else if (typeof data.class === 'object') {
      const keys = Object.keys(data.class);
      classes = keys.filter(key => data.class[key]);
    } else {
      classes = [data.class];
    }

    data.class = classes.concat('nuxt-content');
    data.props = Object.assign({ ...body.props
    }, data.props);
    return h('div', data, body.children.map(child => processNode(child, h, document)));
  }

});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(34);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  const options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

const functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  const render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e622d370", content, true)

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(25);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(30);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
// Module
exports.push([module.i, ".mar-top-40{margin-top:40px}.aboutus-des-sec h2{margin-bottom:30px;height:50px}.about-belief-sec{padding:50px 0 100px}.about-belief-sec .we-belief h3{margin:15px 0}.about-page-common h3{font-size:24px;line-height:34px;font-weight:800}.container-fluid{width:100%;margin-right:auto;margin-left:auto}.about-gallery-sec .gallery-grid{display:flex;align-items:center;justify-content:space-between}.gallery-grid .gallery-infra-col .medium-img-sec{height:414px;overflow:hidden}.gallery-grid .gallery-infra-col .medium-img-sec img{min-height:414px;-o-object-fit:cover;object-fit:cover}.about-gallery-sec .col-spacer{display:inline-block;margin:10px 0;width:100%}.gallery-grid .gallery-infra-col .small-img-sec{overflow:hidden}.gallery-grid .gallery-center-col{width:945px;margin:0 30px}.gallery-grid .gallery-center-col .large-img-sec{overflow:hidden}.gallery-grid .gallery-infra-col{width:360px}.growth-detail h2{width:65%;margin:0 auto;font-size:32px;line-height:46px;font-weight:400}.growth-detail .counters{margin-top:60px}.counter{font-size:80px;line-height:70px;letter-spacing:-3px;font-weight:800;margin-bottom:20px;display:inline-block}.about-mr-top-70{margin-top:70px}.team-grid-slider .leaders-slider{margin:0 -15px}.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:pan-y}.theme-white .team-grid-slider .leaders-slider .slick-arrow.pre-arrow{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat}.team-grid-slider .leaders-slider .slick-arrow.pre-arrow{left:-100px}.team-grid-slider .leaders-slider .slick-arrow{position:absolute;top:40%;width:36px;height:16px;color:#fff;font-size:40px;font-weight:500;line-height:14px;display:flex;align-items:center;justify-content:center;border-radius:100%;cursor:pointer;z-index:10}.slick-slider .slick-list,.slick-slider .slick-track{transform:translateZ(0)}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list,.slick-track{position:relative;display:block}.slick-track{top:0;left:0;margin-left:auto;margin-right:auto}.team-grid-slider .leaders-slider .slide{padding:0 15px}.slick-initialized .slick-slide{display:block}.slick-slide{float:left;height:100%;min-height:1px}.team-grid-slider .leaders-slider .slide .img-box img{width:100%;max-width:360px;-o-object-fit:cover;object-fit:cover}.slick-slide img{display:block}.team-grid-slider .leaders-slider .slide .member-detail{margin-top:20px;display:inline-block}.team-grid-slider .leaders-slider .slide .member-detail h6{margin-bottom:5px}.about-page-common h6{font-size:18px;line-height:26px;font-weight:800}.fa{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-linkedin:before{content:\"\\f0e1\"}.slick-track:after{clear:both}.slick-track:after,.slick-track:before{display:table;content:\"\"}.theme-white .team-grid-slider .leaders-slider .slick-arrow.next-arrow{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat}.team-grid-slider .leaders-slider .slick-arrow.next-arrow{right:-100px}.director-info-sec{padding-top:120px}.sec-pad-50{padding:50px 0}.director-info-sec .director-quote{background-color:#202020;position:relative;height:600px}.director-info-sec .director-quote .row{height:100%}.director-info-sec .director-quote .author-img{position:absolute;left:30px;bottom:0}.d-flex{display:flex!important}.director-info-sec .director-quote .quote-sec{padding:0 30px}.director-info-sec .director-quote .quote-sec h2{color:#fff;font-size:24px;line-height:34px;letter-spacing:.5px;margin-bottom:60px}.director-info-sec .director-quote .quote-sec h6{color:#fff;font-size:18px;font-weight:800}.director-info-sec .director-quote .quote-sec p{color:#fff}.about-left-right-sec .tagline{position:-webkit-sticky;position:sticky;top:100px}.about-page-common .about-left-right-sec .tagline span{font-size:18px;margin-bottom:10px;display:inline-block}.about-left-right-sec .tagline h2{width:85%}.about-left-right-sec .culture-detail{margin-bottom:60px}.about-left-right-sec .culture-detail h3{margin-bottom:15px}.about-we-work-sec .client-video-sec{position:relative}.about-we-work-sec .client-video-sec .video-button{position:absolute;left:20px;bottom:20px}.orange-btn{background:#f13c31;border-radius:25px;font-size:16px;color:#fff;padding:13px 33px;display:inline-block;margin-top:30px}.orange-btn:hover{text-decoration:none;color:#f13c31;background:#fff;border:2px solid #f13c31}.accolades-sec{padding:120px 0 70px;background-color:#fff}.accolades-sec h2,.accolades-sec p{color:#252b33}.about-page-common h2{font-size:40px;line-height:50px;font-weight:800;letter-spacing:-1px}.accolades-sec .certification-block{margin-top:60px}.certification-block ul li{list-style:none;margin-bottom:50px;text-align:center;display:inline-block;vertical-align:middle;padding:0 25px}.why-we-sec{clear:both;background-color:#f8f8f8}.sec-pad-100{padding:100px 0}.about-left-right-sec,.team-member-grid{position:relative}#team-grid-container{background:#000}#team-grid-container .team-title{position:absolute;left:0;right:0;width:65%;margin:0 auto;top:43%;z-index:1;text-align:center}#team-grid-container h2{color:#fff}.header .header-part{padding-bottom:10px;margin-bottom:10px;border-bottom:1px solid #f1f1f1}.back-button a{float:right;margin-top:-30px;color:#8a959e;font-size:20px;font-weight:500}.clearfix:after{display:block;clear:both;content:\"\"}a:hover{text-decoration:none}.mt-10{margin-top:6rem}.mb-10{margin-bottom:6rem}.mrg{margin-bottom:170px;margin-top:60px}.services-box{padding:20px 0;height:600px}.about-link ul li a{color:#f13c31;font-size:18px;font-weight:600;line-height:28px;letter-spacing:-.45px;position:relative}.technologies-section{margin-top:120px}.mrg-b{margin-bottom:60px}.webimg{width:400px;margin-top:-50px;margin-right:20px;margin-left:-50px;padding:15px}.technologies-section .technologies-tab .nav-tabs{border-bottom:1px solid #eee}.technologies-section .technologies-tab .nav{justify-content:center}li,ul{list-style:none;margin:0}.nav-tabs .nav-item{margin-bottom:-1px}.technologies-section .technologies-tab .nav-link.active{color:#f13c31;border-bottom:1px solid #f13c31}.technologies-section .technologies-tab .nav-link{color:#252b33;font-size:15px;font-weight:600;padding:0 20px 24px;border-radius:0;border:none;border-bottom:1px solid transparent;background-color:transparent}a{transition:all .3s ease-in-out}.technologies-section .technologies-tab .tab-content{margin-top:46px}.tab-content>.active{display:block}.technologies-section .technologies-tab .tab-content .row{justify-content:center}.technologies-section .technologies-tab .icon-block{display:block;text-align:center;padding:30px 6px}.technologies-section .technologies-tab .icon-block:hover{background-color:#fafafa}.technologies-section .technologies-tab .icon-block .icon-box{height:50px;display:flex;display:-ms-flexbox;justify-content:center;align-items:center}.technologies-section .technologies-tab .icon-block h5{font-size:14px;line-height:24px;color:#252b33;margin-top:16px}.case-study-section{margin:120px 0}.case-study-section h1{padding-bottom:20px}h1{font-size:40px;color:#252b33;font-weight:800;line-height:55px;letter-spacing:-.5px}h2{padding-bottom:20px}h1,h2,h3,h4,h5,h6,p{margin:0}.case-study-box{margin-top:60px}.cs-main{display:block;transition:all .3s ease-in-out}.cs-main:hover{transform:translate(5px,-5px)}.cs-main .cs-info{position:relative;padding:60px 40px 60px 60px;border-radius:4px}.case-study-block{display:flex;align-items:center;justify-content:space-between}.cs-detail{width:100%;max-width:455px}.cs-detail .cs-title{color:#fff;font-size:14px;text-transform:uppercase;font-weight:600;margin-bottom:20px;letter-spacing:3px}.cs-detail .cs-description{color:#fff;font-size:40px;font-weight:800;line-height:52px;letter-spacing:-1.3px;text-align:left;padding-bottom:0}.cs-detail .client-says{background:hsla(0,0%,100%,.2);border-radius:6px;padding:30px;margin-top:40px}.cs-detail .client-says h5{font-size:16px;color:#fff;letter-spacing:0;line-height:28px;font-weight:400}.cs-detail .client-says .client-box{margin-top:30px}.cs-detail .client-says .client-thumb{width:48px;height:48px;display:flex;align-items:center;justify-content:center}.cs-detail .client-says .client-thumb img{width:48px;height:48px;border-radius:100%}.cs-detail .client-says .client-des{padding-left:15px}.cs-detail .client-says .client-des h6{font-size:18px;color:#fff;letter-spacing:0;font-weight:600}.cs-detail .client-says .client-des span{font-size:16px;color:hsla(0,0%,100%,.5);letter-spacing:0;font-weight:400}.case-study-block .cs-thumb-img{position:absolute;right:40px;bottom:0}.case-study-section .button-box{text-align:center}.satisfaction-guarantee{padding:120px 0}.align-items-center{align-items:center!important}.satisfaction-guarantee .satisfaction-content h5{font-size:16px;color:#252b33;margin-bottom:30px}p{line-height:28px}.satisfaction-guarantee .satisfaction-content p,.satisfaction-guarantee[_ngcontent-c3] .satisfaction-content[_ngcontent-c3] p[_ngcontent-c3]{margin-bottom:16px}b,strong{font-weight:600}.button-box{margin-top:60px}.home-contact-section{margin-top:0;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 50%/cover no-repeat;height:810px}.home-contact-section .contact-section-box{background:#fff;padding:80px;box-shadow:0 16px 54px 0 rgba(0,0,0,.1);border-radius:4px;margin:120px 0}.home-contact-section .contact-section-box h2{padding:6px 0 24px;font-weight:600}.home-contact-section .contact-section-box h2 span{font-weight:800}.home-contact-section .contact-section-box .button-box{margin-top:40px}body{font-family:\"Poppins\",sans-serif;color:#252b33;font-size:16px;font-weight:400}a{color:inherit;transition:all .3s ease-in-out 0s}h1{font-style:normal;text-transform:none;margin:0}.our-work-full-banner,.our-work-full-banner .hero-banner{position:relative}.our-work-full-banner .our-work-content{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;height:100%}.container{width:100%}.our-work-full-banner .our-work-content .title-our-work{width:70%}.our-work-full-banner .our-work-content .title-our-work span{display:block;color:#fff;font-size:20px;font-weight:400;text-transform:uppercase}.our-work-full-banner .our-work-content .title-our-work h1{font-size:60px;color:#fff;font-weight:800;line-height:70px;letter-spacing:-1px}.our-work-full-banner .our-work-content .title-our-work p{font-size:20px;color:#fff;font-weight:400;line-height:30px;margin-top:30px}.technology-icon-section{padding:40px 0 35px}.col-12,.col-lg-8 .col-lg-4,.col-md-6,.col-md-12,.col-sm-12{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.mpc-tooltip-wrap{position:relative;display:inline-block}.services-tech-icons .mpc-tooltip-wrap .mpc-icon{opacity:.5;height:52px;width:52px}.services-tech-icons .mpc-tooltip-wrap .mpc-icon.icon-ios{background-position:-5px -3px}.services-tech-icons .mpc-icon.icon-sprite{background:transparent url(/images/all-icons-sprite-21.png) no-repeat scroll 0 0;display:inline-block}.mpc-icon{text-align:center;line-height:1rem;vertical-align:middle;max-width:100%}.services-tech-icons .mpc-tooltip{background:hsla(0,0%,100%,.8)}.mpc-tooltip.mpc-can-hove{pointer-events:all}.mpc-tooltip.mpc-position--top{top:0;left:50%;transform:translateX(-50%) translateY(-100%);margin-top:-1rem}.mpc-tooltip{border:1px solid #c4cace;border-radius:5px;padding:2px 7px;line-height:18px;font-weight:500;font-size:12px;position:absolute;display:block;white-space:nowrap;z-index:100000;visibility:hidden;opacity:0;pointer-events:none;transition:all .25s!important;box-sizing:border-box}.mpc-tooltip.mpc-position--top .mpc-arrow{bottom:-14px;left:50%;margin-left:-7px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.mpc-tooltip .mpc-arrow{position:absolute;border:7px solid;border-color:inherit}.mpc-tooltip *{visibility:inherit}.services-tech-icons .mpc-tooltip-wrap .mpc-icon.android-icon{background-position:-56px -3px}.technology-icon-box.services-tech-icons .mpc-tooltip-wrap .mpc-icon.php-icon{background-position:-828px -485px}.technology-icon-box.services-tech-icons .mpc-tooltip-wrap .mpc-icon.magento-icon{background-position:-702px -559px}.technology-icon-section .website-icon-box{text-align:right}.website-icon-box.services-tech-icons .mpc-tooltip-wrap .mpc-icon.app-store-icon{background-position:-4px -560px;height:53px;width:142px}.services-tech-icons .mpc-tooltip-wrap .mpc-icon{margin-right:5px;margin-bottom:5px;border:1px solid #c4cace;border-radius:4px;padding:10px}.website-icon-box.services-tech-icons .mpc-tooltip-wrap .mpc-icon.play-store-icon{background-position:-168px -560px;height:53px;width:142px}.website-icon-box.services-tech-icons .mpc-tooltip-wrap .mpc-icon.website-icon{background-position:-328px -560px;height:53px;width:142px}.portfolio-full-img-section img{width:100%}.img.ng-lazyloaded{-webkit-animation:fadein .5s;animation:fadein .5s}.portfolio-about-project-section{margin:60px 0 100px}.portfolio-about-project-section .about-project-content{text-align:center;margin-bottom:100px}.portfolio-about-project-section .about-project-content h2{margin-bottom:40px}h2{font-family:Poppins,sans-serif;margin:0;font-style:normal;font-weight:400;letter-spacing:0;text-transform:none}.portfolio-about-project-section .about-project-content p:last-child{margin-bottom:0;padding-bottom:10%}.portfolio-about-project-section .img-shadow{box-shadow:0 0 30px 0 #e4e4e4}.portfolio-about-project-section .portfolio-features-section .our-work-img{height:100%}.portfolio-about-project-section .our-work-img{overflow:hidden}.portfolio-about-project-section .portfolio-features-section .our-work-img img{filter:grayscale(100%);transition:all .3s ease-in-out}.portfolio-about-project-section .portfolio-features-section .our-work-img img:hover{filter:grayscale(0);transform:scale(1.08)}.portfolio-about-project-section .portfolio-features-section .our-work-img img{height:100%;-o-object-fit:cover;object-fit:cover}img.ng-lazyloaded{-webkit-animation:fadein .5s;animation:fadein .5s}.portfolio-about-project-section .portfolio-features{padding:30px 30px 30px 0}.portfolio-about-project-section .portfolio-features h3{font-size:35px;font-weight:800;color:#252b33}h3{font-family:Poppins,sans-serif;margin:0;line-height:1.2}.portfolio-about-project-section .portfolio-features ul{margin-top:15px}ul{margin-bottom:1rem}.portfolio-about-project-section .portfolio-features ul li{font-size:13px;margin-bottom:7px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat scroll left 5px;padding-left:15px;list-style:none;color:#252b33;font-weight:400}.portfolio-image-gallery-section .our-work-img{margin-top:30px}.portfolio-image-gallery-section .our-work-img img{filter:grayscale(100%);transition:all .3s ease-in-out}.portfolio-image-gallery-section .our-work-img img:hover{filter:grayscale(0);transform:scale(1.08)}.our-work-next-section{position:relative}.our-work-next-project{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:600px;transition:all .3s ease-in-out;background-size:cover;overflow:hidden;background-position:50%;background-repeat:no-repeat;filter:grayscale(100%);text-align:center}.next-project-info h3{color:#fff;font-size:28px;font-weight:400;margin-bottom:0}.next-project-info .separator{height:1px;position:relative;width:100px;display:block;margin:50px auto;background:#fff}.next-project-info h4{color:#fff;text-transform:uppercase;font-size:20px;margin-bottom:0}.next-project-info h2{color:#fff;font-size:60px;line-height:70px;margin-bottom:0}.our-work-list-view{position:absolute;left:0;right:0;bottom:-30px;z-index:99}.our-work-list-view a.icon-view{background:#fff url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat;height:60px;width:60px;display:block;border-radius:50px;background-position:-28px 19px;box-shadow:0 0 32px 0 rgba(0,0,0,.15);transition:all .3s ease-in-out;margin:0 auto}.content_bottom{background:transparent;background-repeat:repeat;z-index:1}.footer-nl-form{overflow:hidden;position:relative;background:#fff}.content_bottom{border-top:1px solid #eee}.footer-nl-form .container_inner{position:static}#lets-talk.lets-talk{z-index:999999;margin:100px auto}.enquiry-page-form{position:relative}.enquiry-page-form .contact-section .header-main{width:100%;margin-bottom:15px}.enquiry-page-form .contact-section .header-main .tag-line h2{text-align:center;font-size:26px;color:#252b33;font-weight:400;margin-bottom:8px;color:#f13c31}.enquiry-page-form .contact-section .header-main h4{font-size:14px;margin-bottom:20px;text-align:center;line-height:28px;color:#323a45;font-style:normal;font-weight:400;letter-spacing:0;text-transform:none;margin:0}.enquiry-page-form .btm-form-title-sec{margin-bottom:50px}.text-center{text-align:center!important}.enquiry-page-form .bottom-form-title{color:#f13c31;font-weight:800;margin-bottom:10px}.enquiry-page-form .btm-form-title-sec p{font-size:18px;line-height:28px}.client-logo{margin-top:60px;position:relative;float:left;box-sizing:border-box}.client-logo h4{font-size:20px;display:block;line-height:1.2;margin-left:40%}.client-logo .testimonial-slide{text-align:center;margin-top:40px}.inquiry{border-bottom:1px solid #d9dee2;padding-bottom:10px;margin-top:40px}.inquiry p{font-weight:600;font-size:12px;line-height:26px;display:inline;margin-bottom:0}.copyright-recaptcha{width:100%}.copyright-recaptcha p{font-size:13px}.copyright-recaptcha p a{color:#f13c31;cursor:pointer;text-decoration:none}.form{background-color:#f1f4f5;box-sizing:border-box;padding:30px}.intl-tel-input{position:relative;display:block;width:100%;height:40px}.intl-tel-input.allow-dropdown .flag-container,.intl-tel-input.separate-dial-code .flag-container{right:auto;left:0}.intl-tel-input .flag-container{position:absolute;top:0;bottom:0;right:0;padding:0}.intl-tel-input *{box-sizing:border-box;color:#323a45;font-size:14px;text-align:left}.intl-tel-input.separate-dial-code .selected-flag{display:table;border-radius:4px;background-color:transparent}.intl-tel-input .selected-flag{z-index:1;position:relative;width:100px!important;height:100%;padding:0 2px 0 15px}.intl-tel-input .selected-flag .iti-flag{position:absolute;top:0;bottom:0;margin:auto}.iti-flag.in{height:14px;background-position:-2413px 0}.iti-flag{width:20px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");background-repeat:no-repeat;background-color:#dbdbdb}.intl-tel-input.separate-dial-code .selected-dial-code{display:table-cell;vertical-align:middle;padding-left:28px}.intl-tel-input .selected-flag .iti-arrow{position:absolute;top:50%;margin-top:-2px;right:0;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top-style:4px solid #555}.intl-tel-input .country-list{position:absolute;z-index:2;list-style:none;text-align:left;padding:0;margin:0;box-shadow:1px 1px 4px rgba(0,0,0,.2);background-color:#fff;border:1px solid #ccc;white-space:nowrap;max-height:200px;overflow-y:scroll}.intl-tel-input .hide{display:none}.intl-tel-input .country-list .country{padding:5px 10px}.intl-tel-input .country-list .flag-box{margin-right:6px;width:20px;display:inline-block;background:0 0;vertical-align:middle}.iti-flag.us{height:11px;background-position:-5241px 0}.intl-tel-input .country-list .country-name{background:0 0;vertical-align:middle}.intl-tel-input .country-list .country .dial-code{color:#999}input.contact-number{width:100%;float:right;padding-left:110px}.intl-tel-input.selected-dial-code input,.intl-tel-input.selected-dial-code input[type=tel]{padding-right:6px;margin-left:0}.intl-tel-input input,.intl-tel-input input[type=tel],.intl-tel-input input[type=text]{position:relative;z-index:0;margin-top:0!important;margin-bottom:0!important;padding-right:36px;margin-right:0}.form-group{position:relative;width:100%;display:inline-block;padding-bottom:10px}.group label{margin-bottom:5px;display:block;font-size:1rem;color:#252b33;font-weight:400}.group.file-upload-sec .projectfileupload{position:relative;width:100%;height:40px;border:1px solid #d9dee2;background:#fff}.group.file-upload-sec .projectfileupload p{text-align:center;margin-top:5px}input{background-color:#fff;border:1px solid #d9dee2;height:40px;display:block;padding:0 0 0 15px;line-height:inherit;font-size:14px;box-sizing:border-box;border-radius:0}.group.file-upload-sec .projectfileupload input{position:absolute;background-color:#fff;border:1px solid #d9dee2;padding:0;width:100%;height:100%;outline:0;opacity:0;box-sizing:border-box;cursor:pointer}.font-weight-bold{font-weight:700}.group .file-upload-sec .projectfileupload p{width:100%;height:100%;text-align:center;color:#252b33;font-size:14px;line-height:37px;font-weight:400;margin-bottom:0}.group.file-upload-sec p.upload-file-size{color:#252b33;font-size:11px;line-height:22px;margin:3px 0}.btn{border:2px solid #f13c31}.btn:hover{background-color:#fff}h4{font-size:20px;margin:0;line-height:1.2;font-weight:400}a{cursor:pointer}.insert-remove-container{padding-top:90px}.card{background-image:linear-gradient(225deg,#39a1f7,#a875ff)}.content{margin-top:0}section{display:block}.small-banner{padding:100px}.small-title{max-width:75%;padding-left:15px;padding-right:15px}.small-title h1{font-size:60px;line-height:70px;letter-spacing:-1.5px;font-weight:800;margin-bottom:40px}.small-title p{font-size:18px;line-height:28px;color:#252b33;font-weight:400;font-style:normal;text-transform:none;margin-top:0;margin-bottom:1rem}.cs-filter-bar{justify-content:space-between;border-bottom:1px solid #eee}.cs-filter-bar,.cs-filter-bar .tab-filter{position:relative}.cs-filter-bar .tab-filter a{margin:0 20px 0 0;padding-bottom:20px;color:#81959e;font-size:16px;font-weight:600;text-decoration:none;cursor:pointer}.cs-filter-bar .tab-filter a.active{color:#252b33;border-bottom:1px solid #252b33}.filterby-sec{margin-bottom:40px;justify-content:space-between}.filterby-sec h4{font-size:24px;font-weight:800;margin:0;color:#323a45;line-height:1.2}.category-filter .dropdown{display:inline-block;padding:0 0 20px;margin:0 50px 0 0;cursor:pointer}.dropdown{position:relative}.category-filter .dropdown .drop{color:#252b33;font-size:16px;font-weight:600;padding:0 20px 0 0;position:relative}.category-filter .dropdown:hover>.dropdown-menu{display:block}.category-filter .dropdown .drop:after{position:absolute;content:\"\";width:0;height:0;border-color:#000 transparent transparent;border-style:solid;border-width:5px 5px 0;display:inline-block;margin-left:6px;top:10px;transform:rotate(0);transition:all .25s ease-in}.category-filter .dropdown .drop:hover:after{transform:rotate(180deg);transition:all .25s ease-out}.category-filter .dropdown .dropdownArrow{position:absolute;top:38px;right:50%;margin:0 0 0 -6px;width:12px;height:12px;transform:rotate(45deg);border-radius:4px 0 0;background:#fff;box-shadow:-3px -3px 5px rgba(82,95,127,.04);will-change:transform;transition-property:transform;z-index:9999;display:none}.category-filter .dropdown .dropdown-menu{margin:0;transition:all .5s ease;padding:.5rem 0;height:auto;box-shadow:0 0 16px 0 rgba(0,0,0,.15);border-radius:4px;border:none;min-width:150px;right:0;left:inherit}.dropdown-menu{position:absolute;z-index:1000;top:100%;display:none;float:left;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;color:#000}li{display:list-item;color:#252b33}.category-filter .dropdown>.dropdown-menu>li span{padding:.2rem 1rem;transition:all .25s linear;display:inline-flex;text-align:left}input[type=hidden],input[type=Hidden],input[type=hIdden],input[type=HIdden],input[type=hiDden],input[type=HiDden],input[type=hIDden],input[type=HIDden],input[type=hidDen],input[type=HidDen],input[type=hIdDen],input[type=HIdDen],input[type=hiDDen],input[type=HiDDen],input[type=hIDDen],input[type=HIDDen],input[type=hiddEn],input[type=HiddEn],input[type=hIddEn],input[type=HIddEn],input[type=hiDdEn],input[type=HiDdEn],input[type=hIDdEn],input[type=HIDdEn],input[type=hidDEn],input[type=HidDEn],input[type=hIdDEn],input[type=HIdDEn],input[type=hiDDEn],input[type=HiDDEn],input[type=hIDDEn],input[type=HIDDEn],input[type=hiddeN],input[type=HiddeN],input[type=hIddeN],input[type=HIddeN],input[type=hiDdeN],input[type=HiDdeN],input[type=hIDdeN],input[type=HIDdeN],input[type=hidDeN],input[type=HidDeN],input[type=hIdDeN],input[type=HIdDeN],input[type=hiDDeN],input[type=HiDDeN],input[type=hIDDeN],input[type=HIDDeN],input[type=hiddEN],input[type=HiddEN],input[type=hIddEN],input[type=HIddEN],input[type=hiDdEN],input[type=HiDdEN],input[type=hIDdEN],input[type=HIDdEN],input[type=hidDEN],input[type=HidDEN],input[type=hIdDEN],input[type=HIdDEN],input[type=hiDDEN],input[type=HiDDEN],input[type=hIDDEN],input[type=HIDDEN]{display:none;-webkit-appearance:initial;-moz-appearance:initial;appearance:auto;background-color:transparent;background-color:initial;cursor:default;padding:initial;border:initial}[dir=ltr] input{text-align:left}[dir=rtl] input{text-align:right}input{text-rendering:auto;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-shadow:none;display:inline-block}g{stroke:none;stroke-width:1;fill:none;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round}.category-filter .dropdown .dropdown-menu.two-part-tab:after{min-width:350px}.filter-dropdown .reset-icon a{position:relative}.fa{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;color:#252b33;margin-bottom:22px}.fa-repeat{content:\"\\f01e\"}.filter-dropdown .reset-icon .tooltiptext{visibility:hidden;position:absolute;bottom:60%;left:50%;transform:translateX(-50%);width:100px;background-color:#fff;color:#252b33;font-size:14px;line-height:20px;text-align:center;padding:5px;border-radius:4px;z-index:1;opacity:0;transition:opacity .6s;box-shadow:0 0 16px 0 rgba(0,0,0,.15)}p{font-weight:400;font-style:normal;text-transform:none;margin-top:0;margin-bottom:1rem;color:#81959e}.mb-filter-close{position:fixed;right:15px;bottom:15px;background:#f13c31;color:#fff;border-radius:25px;padding:3px 13px;text-align:center;text-decoration:none;border:2px solid #f13c31;z-index:9999;box-shadow:0 0 10px 0 rgba(0,0,0,.2);cursor:pointer}.cs-listing{padding:70px 0 80px}h3{font-size:26px;font-style:normal;letter-spacing:0;text-transform:none}.col-12 .col-md-6 .col-sm-6 .col-lg-4{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.case-listing-col .cs-listing-img img{width:360px;height:100%;min-height:270px;-o-object-fit:cover;object-fit:cover}.cs-mar-top-60{margin-top:60px}.case-listing-col .cs-listing-img{overflow:hidden;box-shadow:0 0 10px 0 rgba(0,0,0,.1)}img{transition:.4s ease}.case-listing-col .cs-listing-img img:hover{transform:scale(1.08)}.case-listing-col .cs-project-title{margin-top:15px}.case-listing-col .cs-project-title p{color:#81959e;font-size:12px;text-transform:uppercase;font-weight:400;margin-bottom:5px;min-height:26px}.case-listing-col .cs-project-title a{color:#252b33;font-size:20px;font-weight:600;cursor:pointer;text-decoration:none}.case-listing-col .cs-project-title .project-detail{color:#252b33;font-size:16px;line-height:26px;margin-top:5px;align-self:flex-start;height:55px;overflow:hidden;text-overflow:ellipsis}.case-listing-col .cs-technology{margin-top:10px}.case-listing-col .cs-technology span{border:1px solid #dae1e4;border-radius:12px;font-size:12px;color:#81959e;font-weight:400;padding:1px 10px;margin-right:4px;display:inline-block}.portfolio-bottom{background:#f8f8f8;overflow:hidden;position:relative}.portfolio-bottom .portfolio-footer-left{padding:60px 0}.portfolio-bottom .portfolio-footer-left p{color:#252b33;font-size:14px;line-height:26px;font-weight:400;text-transform:none}.portfolio-bottom .portfolio-form input{border:1px solid #ddd;width:100%;height:50px;border-radius:4px;border-radius:none;padding:15px;color:#252b33;font-size:16px;background:#fafafa;box-sizing:border-box}.form-control{line-height:1.5;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}input{overflow:visible;margin:0}.portfolio-bottom .portfolio-form textarea{border:1px solid #ddd;border-radius:4px;box-shadow:none;padding:15px;font-size:15px;color:#252b33;background:#fafafa;resize:none;box-sizing:border-box}.btn{white-space:nowrap;line-height:1.5;background-color:#f13c31;padding:5px 15px;color:#fff;font-weight:400}.btn:hover{color:#f13c31;background:#fff;border:2px solid #f13c31}.copyright-text{width:85%}.portfolio-bottom .portfolio-footer-left p{padding:10px 0 15px;margin:0}.copyright-text a{font-size:14px;color:#f13c31;cursor:pointer;text-decoration:none}.portfolio-bottom .portfolio-footer-right img{position:relative;left:75px}.cd-modal{background-color:#fff;height:100%;width:100%;opacity:0;visibility:inherit;z-index:-1;transition:all .6s ease-in-out;margin-top:-100%;position:absolute}.cd-modal .cd-modal content{height:100%;width:100%;padding:0;overflow-y:auto;box-sizing:border-box;overflow:hidden;position:relative}.portfolio-bottom .thankyou-popup{color:#202020;height:100%}.thankyou-popup{position:relative}body{text-align:left}.footer-section{padding:60px 0 0}a i:hover{color:#f13c31!important}.row{margin-right:-15px;margin-left:-15px}.footer-section ul li{margin-bottom:15px}h5{padding:20px}.footer-section .footer-last{padding:20px 0}body{font-family:\"Poppins\",sans-serif!important}.navbar-nav li a:hover{color:#f13c31!important}ul{list-style:none}.link-button:hover{text-decoration:none;color:#f13c31;background:#fff}.link-button{padding:10px 30px;background:#f13c31;color:#fff;font-size:16px;border-radius:30px;border:2px solid #f13c31;font-weight:600;display:inline-block}a:hover{text-decoration:none!important}.main-page-header{margin-top:70px;padding:60px 0;text-align:center;display:flex;align-items:center;height:calc(100vh - 90px)}.container{max-width:1140px;margin:0 auto;padding-left:15px;padding-right:15px}.main-page-header .page-header-content{padding:0 8%}*,:after,:before{box-sizing:border-box}.main-page-header .page-header-content h1{font-size:60px;color:#252b33;font-weight:800;line-height:70px;letter-spacing:-1px;margin-bottom:50px;margin-top:0}.main-page-header .page-header-content p{font-size:20px;color:#252b33;font-weight:500;line-height:30px;margin-top:0}.container-box{max-width:1250px;width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.wwd-service-section.left-section .service-content{padding:60px 80px 0 0}h2{font-size:40px;line-height:50px;font-weight:800}h2,p{color:#252b33}p{font-size:16px;line-height:26px}a,p a{cursor:pointer}ul{padding-left:0}.technology-icon ul li a{padding:3px 14px;border-radius:2px;border:1px solid #eee;width:auto;height:56px;display:flex;align-items:center;justify-content:center;color:red}.green-btn a:hover{color:#f13c31;background:#fff}.green-btn a:hover,a{text-decoration:none}.service-points{margin:40px 0}.service-points ul{display:flex;flex-wrap:wrap;margin-left:30px;margin-bottom:0}.service-points ul.two-col li{width:50%}.service-points ul li{font-size:14px;color:#252b33;list-style-position:outside;padding:0 30px 0 0;width:100%}.green-btn a{padding:10px 30px;background:#f13c31;color:#fff;font-size:16px;border-radius:30px;border:2px solid #f13c31;font-weight:600;transition:all .3s ease-in-out;display:inline-block;text-decoration:none}.wwd-service-section{margin-bottom:100px}.wwd-service-section.right-section .service-content{padding:60px 0 0 80px}.wwd-service-section .service-content h2{margin-bottom:30px}.technology-icon{margin-top:40px}.technology-icon ul{display:flex;flex-wrap:wrap;margin-bottom:0}.technology-icon ul li{list-style:none;margin:0 8px 8px 0}body{font-size:1rem;color:#212529}.footer-section{padding:40px 0 0;background-color:#fafafa;z-index:1}.footer-section .phone-number-box a,.footer-section ul li a{color:#252b33;font-size:14px;font-weight:400;line-height:normal}div{display:block}a:hover{color:#f13c31!important}.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.row{display:flex;flex-wrap:wrap;margin-right:-15px!important;margin-left:-15px!important}img{vertical-align:middle;border-style:none;max-width:100%}.footer-section ul li{list-style:none}.footer-section .email-msg .contact-number .title{font-size:15px;color:#8b969f;height:inherit}.footer-section h4{color:#252b33;font-size:18px;font-weight:600;margin-bottom:20px}.country-number a{color:#212529}h5{font-weight:600}.f-mar-top-30{margin-top:20px}p{margin-bottom:5px!important;line-height:20px;margin-bottom:0}ul li a{text-decoration:none;color:#212529;cursor:pointer}.footer-section ul{padding-left:0}.footer-section .email-msg a{color:#f13c31;font-size:15px;font-weight:400;cursor:pointer}.footer-section .service-list{padding-left:30px}.footer-section .footer-last{border-top:1px solid #e9e6e6;padding-top:10px}.footer-section .social-icons ul li a{font-size:20px}.footer-section .social-icons ul li a:hover{color:#f13c31}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMzYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5QYXRoPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnMvPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjAyLUFib3V0LVVzLS0tV2hpdGUtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4NC4wMDAwMDAsIC00NTQ1LjAwMDAwMCkiIGZpbGw9IiMyNTJCMzMiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODQuMDAwMDAwLCA0MTgzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4LjAwMDAwMCwgMzcwLjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTguMDAwMDAwLCAtMzcwLjAwMDAwMCkgIiBwb2ludHM9IjI4IDM2MiAyNi41OSAzNjMuNDEgMzIuMTcgMzY5IC0yLjI3MjE4MjQ0ZS0xMiAzNjkgLTIuMjcyMTgyNDRlLTEyIDM3MSAzMi4xNyAzNzEgMjYuNTkgMzc2LjU5IDI4IDM3OCAzNiAzNzAiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMzYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5QYXRoPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnMvPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjAyLUFib3V0LVVzLS0tV2hpdGUtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1ODAuMDAwMDAwLCAtNDU0NS4wMDAwMDApIiBmaWxsPSIjMjUyQjMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg0LjAwMDAwMCwgNDE4My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjEzMjQgMzYyIDEzMjIuNTkgMzYzLjQxIDEzMjguMTcgMzY5IDEyOTYgMzY5IDEyOTYgMzcxIDEzMjguMTcgMzcxIDEzMjIuNTkgMzc2LjU5IDEzMjQgMzc4IDEzMzIgMzcwIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/globe-bg-img.983eef5b137f10118dcb.983eef5.jpg";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAAYagMeiWXwAAAEJQTFRFAAAAnZ2xmZmqj5+fjpyqi5agi5WfjZagi5ehjJWfi5egipafi5agipWfipaei5afi5Wfipafi5Weipaei5Wei5WffXmDegAAABZ0Uk5TAA0PEBJLTU5RUlaFhry+v9na2/Dz9ERPxK8AAABJSURBVAiZRY3bEkAwDEQ3SqRUhMb//6pUB/u0c2YvAFjdlREqJkRiJZilBpIxVPBIFE7dkv/2+gLL/tbGc+5jQz7WBuKibhNwA34TAkxpvzA5AAAAAElFTkSuQmCC"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAWCAMAAABKfhpBAAAAnFBMVEWKlZ7///+KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ6KlZ5QF3oAAAAAM3RSTlMAABscHR4fICEiIyQlJiorLS4vMDEyMzQ1NjetsMzN2drb3N3e3+Dh4uPk6err7O3u7/Dh86q6AAAAqklEQVQ4ja3Uxw7CMBAE0IHQe+8loQcCBM///xuOBRekSBa7c/HtSWt7B/imvV0WPEIX4Pf8pBkzlDONmLeOmKlfmHQhZapnJn1ImcqR9wGkTPnA5xCeDPIS7JiOIWWCiK8JvJmcoYohzQxiZk2zgJzZ0MwVmGyoqZzJHkrhioHSnulI/ODu+z3k38+u1EljGYCaXc2enFEqCld+CrUFtK4aJWorPVr9z7wBqxtQYwpuCcgAAAAASUVORK5CYII="

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flags.ae33acae404631e997ef.ae33aca.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("517a8dd7", content, true)

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,\"Andale Mono\",\"Ubuntu Mono\",monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("property-information");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(12);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(13);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if (false) {}

    if (false) {}

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(14);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(9);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(8);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(2);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _5ae139f2 = () => interopDefault(__webpack_require__.e(/* import() | pages/about-us/index */ 1).then(__webpack_require__.bind(null, 78)));

const _392e639a = () => interopDefault(__webpack_require__.e(/* import() | pages/contact-us/index */ 2).then(__webpack_require__.bind(null, 79)));

const _f1421434 = () => interopDefault(__webpack_require__.e(/* import() | pages/home/index */ 3).then(__webpack_require__.bind(null, 77)));

const _15c21c47 = () => interopDefault(__webpack_require__.e(/* import() | pages/portfolio/index */ 5).then(__webpack_require__.bind(null, 80)));

const _734715f6 = () => interopDefault(__webpack_require__.e(/* import() | pages/product-landing/index */ 6).then(__webpack_require__.bind(null, 81)));

const _49f9ef87 = () => interopDefault(__webpack_require__.e(/* import() | pages/services/index */ 7).then(__webpack_require__.bind(null, 82)));

const _4227bfe5 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 4).then(__webpack_require__.bind(null, 83))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about-us",
    component: _5ae139f2,
    name: "about-us"
  }, {
    path: "/contact-us",
    component: _392e639a,
    name: "contact-us"
  }, {
    path: "/home",
    component: _f1421434,
    name: "home"
  }, {
    path: "/portfolio",
    component: _15c21c47,
    name: "portfolio"
  }, {
    path: "/product-landing",
    component: _734715f6,
    name: "product-landing"
  }, {
    path: "/services",
    component: _49f9ef87,
    name: "services"
  }, {
    path: "/",
    component: _4227bfe5,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(18)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5cfc2414"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(20)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "21d574ac"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/style.css
var style = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/prismjs/themes/prism.css
var prism = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=19aaac4e&
var defaultvue_type_template_id_19aaac4e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nuxt')],1)}
var defaultvue_type_template_id_19aaac4e_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=19aaac4e&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  
}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_19aaac4e_render,
  defaultvue_type_template_id_19aaac4e_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "42b82d0b"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js






const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (NuxtError.options || NuxtError).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(11);

// CONCATENATED MODULE: ./.nuxt/nuxt-icons.js
/* harmony default export */ var nuxt_icons = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.5f6a36.png",
    "120x120": "/_nuxt/icons/icon_120x120.5f6a36.png",
    "144x144": "/_nuxt/icons/icon_144x144.5f6a36.png",
    "152x152": "/_nuxt/icons/icon_152x152.5f6a36.png",
    "192x192": "/_nuxt/icons/icon_192x192.5f6a36.png",
    "384x384": "/_nuxt/icons/icon_384x384.5f6a36.png",
    "512x512": "/_nuxt/icons/icon_512x512.5f6a36.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.5f6a36.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.5f6a36.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.5f6a36.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.5f6a36.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.5f6a36.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.5f6a36.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.5f6a36.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.5f6a36.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.5f6a36.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.5f6a36.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// EXTERNAL MODULE: ./.nuxt/content/nuxt-content.js
var nuxt_content = __webpack_require__(10);

// CONCATENATED MODULE: ./.nuxt/content/plugin.server.js


external_vue_default.a.component(nuxt_content["a" /* default */].name, nuxt_content["a" /* default */]);
/* harmony default export */ var plugin_server = ((ctx, inject) => {
  const $content = ctx.ssrContext.$content;
  inject('content', $content);
  ctx.$content = $content;
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(15);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\workbox.js (mode: 'client')

 // Source: .\\nuxt-icons.js (mode: 'all')

 // Source: .\\content\\plugin.client.js (mode: 'client')

 // Source: .\\content\\plugin.server.js (mode: 'server')

 // Source: .\\axios.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "eb-website-nuxt",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "## Build Setup"
      }, {
        "hid": "mobile-web-app-capable",
        "name": "mobile-web-app-capable",
        "content": "yes"
      }, {
        "hid": "apple-mobile-web-app-title",
        "name": "apple-mobile-web-app-title",
        "content": "eb-website-nuxt"
      }, {
        "hid": "theme-color",
        "name": "theme-color",
        "content": "black"
      }, {
        "hid": "og:type",
        "name": "og:type",
        "property": "og:type",
        "content": "website"
      }, {
        "hid": "og:title",
        "name": "og:title",
        "property": "og:title",
        "content": "eb-website-nuxt"
      }, {
        "hid": "og:site_name",
        "name": "og:site_name",
        "property": "og:site_name",
        "content": "eb-website-nuxt"
      }, {
        "hid": "og:description",
        "name": "og:description",
        "property": "og:description",
        "content": "## Build Setup"
      }],
      "link": [{
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Poppins&display=swap"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.3.1\u002Fcss\u002Fbootstrap.min.css"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Ffont-awesome\u002F4.7.0\u002Fcss\u002Ffont-awesome.min.css"
      }, {
        "rel": "manifest",
        "href": "\u002F_nuxt\u002Fmanifest.a5e50a9c.json"
      }, {
        "rel": "shortcut icon",
        "href": "\u002F_nuxt\u002Ficons\u002Ficon_64x64.5f6a36.png"
      }, {
        "rel": "apple-touch-icon",
        "href": "\u002F_nuxt\u002Ficons\u002Ficon_512x512.5f6a36.png",
        "sizes": "512x512"
      }],
      "style": [],
      "script": [],
      "htmlAttrs": {
        "lang": "en"
      }
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof nuxt_icons === 'function') {
    await nuxt_icons(app.context, inject);
  }

  if (false) {}

  if ( true && typeof plugin_server === 'function') {
    await plugin_server(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if ( true && ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map