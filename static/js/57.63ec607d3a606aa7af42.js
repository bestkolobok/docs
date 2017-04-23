webpackJsonp([57],{119:function(s,t,a){s.exports=a(269)},269:function(s,t,a){var v=a(2)(null,a(349),null,null);s.exports=v.exports},349:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Palette Button")]),s._v(" "),a("h2",[s._v("Import")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { PaletteButton } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'mint-ui'")]),s._v(";\n\nVue.component(PaletteButton.name, PaletteButton);\n")])]),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),a("p",[s._v("basic usage")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-palette-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"+"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-palette-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("set option, event and trigger event menually")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[s._v("    methods: {\n      main_log(val) {\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-string"},[s._v("'main_log'")]),s._v(", val);\n      },\n      sub_log(val) {\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-string"},[s._v("'sub_log'")]),s._v(", val);\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.target_1.collapse();\n      }\n    }\n")])]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-palette-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"+"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@expand")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"main_log('expand')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@expanded")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"main_log('expanded')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@collapse")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"main_log('collapse')\"")]),s._v("\n      "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"rt"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"pb"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":radius")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"80"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"target_1"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("mainButtonStyle")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"color:#fff;background-color:#26a2ff;"')]),s._v("\n      "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left:30px;"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button indexicon icon-popup"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@touchstart")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sub_log(1)"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button indexicon icon-popup"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@touchstart")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sub_log(2)"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button indexicon icon-popup"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@touchstart")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sub_log(3)"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-palette-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h2",[s._v("Option")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("Option")]),s._v(" "),a("th",[s._v("Desc.")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("acceptable values")]),s._v(" "),a("th",[s._v("default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("content")]),s._v(" "),a("td",[s._v("the text content of the main button")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("offset")]),s._v(" "),a("td",[s._v("the offset arc of the fan-shaped area")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Math.PI / 4")])]),s._v(" "),a("tr",[a("td",[s._v("direction")]),s._v(" "),a("td",[s._v("the direction of the fan-shaped area")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("lt, t, rt, r, rb, b, lb, l")]),s._v(" "),a("td",[s._v("lt")])]),s._v(" "),a("tr",[a("td",[s._v("radius")]),s._v(" "),a("td",[s._v("the radius of the fan-shaped area")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("90")])]),s._v(" "),a("tr",[a("td",[s._v("mainButtonStyle")]),s._v(" "),a("td",[s._v("set the style of the main button")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")])])])]),a("p",[a("img",{attrs:{src:"/static/palette-button.png",alt:"One picture worth thousands of word"}})]),s._v(" "),a("h2",[s._v("Method")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("Method")]),s._v(" "),a("th",[s._v("Desc.")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("toggle")]),s._v(" "),a("td",[s._v("toggle between expand and collapse")])]),s._v(" "),a("tr",[a("td",[s._v("expand")]),s._v(" "),a("td",[s._v("expand all sub buttons")])]),s._v(" "),a("tr",[a("td",[s._v("collapse")]),s._v(" "),a("td",[s._v("collapse all sub buttons")])])])])]),a("h2",[s._v("Event")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("Event")]),s._v(" "),a("th",[s._v("Desc.")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("expand")]),s._v(" "),a("td",[s._v("begin expand sub buttons")])]),s._v(" "),a("tr",[a("td",[s._v("expanded")]),s._v(" "),a("td",[s._v("all sub buttons has been expanded(after animation end)")])]),s._v(" "),a("tr",[a("td",[s._v("collapse")]),s._v(" "),a("td",[s._v("begin collapse sub buttons")])])])])])])}]}}});
//# sourceMappingURL=57.63ec607d3a606aa7af42.js.map