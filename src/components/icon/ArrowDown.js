import { _ as __vue_normalize__ } from 'mdi-vue/normalize-component-26d614d1.js';

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

var script = {
  name: 'mdi-arrow-down',
  props: {
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    viewBox: {
      type: [String],
      default: '0 0 24 24'
    },
    xmlns: {
      type: String,
      default: 'xmlns="http://www.w3.org/2000/svg"'
    },
    ariaLabel: {
      type: String,
      default: 'ArrowDown icon'
    },
    role: {
      type: String,
      default: 'img'
    }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function(_h, _vm) {
  var _c = _vm._c;
  return _c(
    "span",
    {
      staticClass: "mdi mdi-arrow-down",
      attrs: { role: _vm.props.role, "aria-label": _vm.props.ariaLabel }
    },
    [
      _c(
        "svg",
        {
          attrs: {
            fill: "currentColor",
            width: _vm.props.width,
            height: _vm.props.height,
            viewBox: _vm.props.viewBox,
            xmlns: _vm.props.xmlns
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
            }
          })
        ]
      )
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = true;
  /* style inject */
  
  /* style inject SSR */
  
  var ArrowDown = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default ArrowDown;
