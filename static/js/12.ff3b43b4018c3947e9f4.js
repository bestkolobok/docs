webpackJsonp([12],{314:function(t,a,s){var n=s(2)(null,s(362),null,null);t.exports=n.exports},362:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("h1",[t._v("tab-container")]),t._v(" "),s("blockquote",[s("p",[t._v("A switching panel.")])]),t._v(" "),s("hr"),t._v(" "),s("h2",[t._v("Import")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Example")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("h2",[t._v("API")]),t._v(" "),s("h3",[t._v("tab-container")]),t._v(" "),t._m(3),s("h3",[t._v("tab-container-item")]),t._v(" "),t._m(4),s("h2",[t._v("Slot")]),t._v(" "),s("h3",[t._v("tab-container")]),t._v(" "),t._m(5),s("h3",[t._v("tab-container-item")]),t._v(" "),t._m(6)],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",[s("code",{staticClass:"language-javascript"},[s("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { TabContainer, TabContainerItem } "),s("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'mint-ui'")]),t._v(";\n\nVue.component(TabContainer.name, TabContainer);\nVue.component(TabContainerItem.name, TabContainerItem);\n")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Only the "),s("code",[t._v("<mt-tab-container-item>")]),t._v(" whose "),s("code",[t._v("id")]),t._v(" equals the "),s("code",[t._v("active")]),t._v(" attribute in "),s("code",[t._v("mt-tab-container")]),t._v(" will be displayed.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("mt-tab-container")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":active.sync")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"active"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"tab-container1"')]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"n in 10"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"'tab-container1 ' + $index\"")]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"tab-container2"')]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"n in 5"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"'tab-container2 ' + $index\"")]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"tab-container3"')]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"n in 7"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"'tab-container3 ' + $index\"")]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("mt-cell")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("mt-tab-container-item")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("mt-tab-container")]),t._v(">")]),t._v("\n")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"table-container"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("option")]),t._v(" "),s("th",[t._v("description")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("acceptable values")]),t._v(" "),s("th",[t._v("default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("active")]),t._v(" "),s("td",[t._v("the "),s("code",[t._v("id")]),t._v(" of the active tab")]),t._v(" "),s("td",[t._v("*")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("swipeable")]),t._v(" "),s("td",[t._v("swipe effect")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("false")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"table-container"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("option")]),t._v(" "),s("th",[t._v("description")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("acceptable values")]),t._v(" "),s("th",[t._v("default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("id of each item")]),t._v(" "),s("td",[t._v("*")]),t._v(" "),s("td"),t._v(" "),s("td")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"table-container"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-")]),t._v(" "),s("td",[t._v("content of the container. Made up of several "),s("code",[t._v("tab-container-item")]),t._v("s")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"table-container"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-")]),t._v(" "),s("td",[t._v("content of each item")])])])])])}]}},99:function(t,a,s){t.exports=s(314)}});
//# sourceMappingURL=12.ff3b43b4018c3947e9f4.js.map