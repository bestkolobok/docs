webpackJsonp([76],{114:function(t,s,a){t.exports=a(250)},250:function(t,s,a){var l=a(2)(null,a(347),null,null);t.exports=l.exports},347:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("Infinite scroll")]),t._v(" "),a("blockquote",[a("p",[t._v("An infinite scroll directive.")])]),t._v(" "),a("hr"),t._v(" "),a("h2",[t._v("Import")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Example")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("API")]),t._v(" "),t._m(4)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { InfiniteScroll } "),a("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"hljs-string"},[t._v("'mint-ui'")]),t._v(";\n\nVue.use(InfiniteScroll);\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("To use infinite scroll, simply add "),a("code",[t._v("v-infinite-scroll")]),t._v(" to the HTML element. Scroll this element until the distance between its bottom and the bottom of the scrollable container is within the "),a("code",[t._v("infinite-scroll-distance")]),t._v(" threshold, the method appointed as "),a("code",[t._v("v-infinite-scroll")]),t._v(" will run.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("ul")]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("v-infinite-scroll")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"loadMore"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("infinite-scroll-disabled")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"loading"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("infinite-scroll-distance")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"10"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("li")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"item in list"')]),t._v(">")]),a("span",[t._v("{{")]),t._v(" item "),a("span",[t._v("}}")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("li")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("ul")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-javascript"},[t._v("loadMore() {\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".loading = "),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(";\n  setTimeout("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" last = "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".list["),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".list.length - "),a("span",{staticClass:"hljs-number"},[t._v("1")]),t._v("];\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("for")]),t._v(" ("),a("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" i = "),a("span",{staticClass:"hljs-number"},[t._v("1")]),t._v("; i <= "),a("span",{staticClass:"hljs-number"},[t._v("10")]),t._v("; i++) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".list.push(last + i);\n    }\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".loading = "),a("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v(";\n  }, "),a("span",{staticClass:"hljs-number"},[t._v("2500")]),t._v(");\n}\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("option")]),t._v(" "),a("th",[t._v("description")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("acceptable values")]),t._v(" "),a("th",[t._v("default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("infinite-scroll-disabled")]),t._v(" "),a("td",[t._v("if "),a("code",[t._v("true")]),t._v(", infinite scroll will not be triggered")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("infinite-scroll-distance")]),t._v(" "),a("td",[t._v("distance threshold to trigger the load-method")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("infinite-scroll-immediate-check")]),t._v(" "),a("td",[t._v("if "),a("code",[t._v("true")]),t._v(", the directive will check immediately after binding. Useful if it's possible that the content is not tall enough to fill up the scrollable container.")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("infinite-scroll-listen-for-event")]),t._v(" "),a("td",[t._v("infinite scroll will check again when the event is emitted in a Vue instance")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td"),t._v(" "),a("td")])])])])}]}}});
//# sourceMappingURL=76.59615139406f0f07e3b9.js.map