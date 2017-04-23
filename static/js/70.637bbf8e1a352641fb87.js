webpackJsonp([70],{256:function(t,s,a){var e=a(2)(null,a(411),null,null);t.exports=e.exports},411:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("Loadmore")]),t._v(" "),a("blockquote",[a("p",[t._v("A two-direction pull-to-refresh component. Custom HTML templates supported.")])]),t._v(" "),a("hr"),t._v(" "),a("h2",[t._v("Import")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Example")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("h2",[t._v("Custom HTML templates")]),t._v(" "),a("p",[t._v("You can customize the top and bottom DOM using an HTML template")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("h2",[t._v("Configure texts in top and bottom DOM")]),t._v(" "),t._m(11),t._v(" "),a("h2",[t._v("Auto fill")]),t._v(" "),t._m(12),t._v(" "),a("h2",[t._v("API")]),t._v(" "),t._m(13),a("h2",[t._v("Slot")]),t._v(" "),t._m(14)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { Loadmore } "),a("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"hljs-string"},[t._v("'mint-ui'")]),t._v(";\n\nVue.component(Loadmore.name, Loadmore);\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-loadmore")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":top-method")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"loadTop"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":bottom-method")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"loadBottom"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":bottom-all-loaded")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"allLoaded"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("ul")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("li")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"item in list"')]),t._v(">")]),a("span",[t._v("{{")]),t._v(" item "),a("span",[t._v("}}")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("li")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("ul")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-loadmore")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Take upward direction for example: pull the component "),a("code",[t._v("topDistance")]),t._v(" pixels away from the top and then release it, the function you appointed as "),a("code",[t._v("top-method")]),t._v(" will run")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-javascript"},[t._v("loadTop(id) {\n  ..."),a("span",{staticClass:"hljs-comment"},[t._v("// load more data")]),t._v("\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$broadcast("),a("span",{staticClass:"hljs-string"},[t._v("'onTopLoaded'")]),t._v(", id);\n}\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("At the end of your "),a("code",[t._v("top-method")]),t._v(", don't forget to broadcast the "),a("code",[t._v("onTopLoaded")]),t._v(" event so that "),a("code",[t._v("mint-loadmore")]),t._v(" removes "),a("code",[t._v("topLoadingText")]),t._v(". Note that a parameter called "),a("code",[t._v("id")]),t._v(" is passed to "),a("code",[t._v("loadTop")]),t._v(" and "),a("code",[t._v("onTopLoaded")]),t._v(". This is because after the top data is loaded, some reposition work is performed inside a "),a("code",[t._v("mint-loadmore")]),t._v(" instance, and "),a("code",[t._v("id")]),t._v(" simply tells the component which instance should be repositioned. You don't need to do anything more than passing "),a("code",[t._v("id")]),t._v(" to "),a("code",[t._v("onTopLoaded")]),t._v(" just as shown above.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("For downward direction, things are similar. To invoke "),a("code",[t._v("bottom-method")]),t._v(", just pull the component "),a("code",[t._v("bottomDistance")]),t._v(" pixels away from the bottom and then release it")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-javascript"},[t._v("loadBottom(id) {\n  ..."),a("span",{staticClass:"hljs-comment"},[t._v("// load more data")]),t._v("\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".allLoaded = "),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(";"),a("span",{staticClass:"hljs-comment"},[t._v("// if all data are loaded")]),t._v("\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$broadcast("),a("span",{staticClass:"hljs-string"},[t._v("'onBottomLoaded'")]),t._v(", id);\n}\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("The only difference is that after all data are fetched, you can set "),a("code",[t._v("bottom-all-loaded")]),t._v(" to "),a("code",[t._v("true")]),t._v(" so that "),a("code",[t._v("bottom-method")]),t._v(" will not run any more.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-loadmore")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":top-method")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"loadTop"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":top-status.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"topStatus"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("ul")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("li")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"item in list"')]),t._v(">")]),a("span",[t._v("{{")]),t._v(" item "),a("span",[t._v("}}")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("li")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("ul")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"top"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"mint-loadmore-top"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-show")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"topStatus !== 'loading'\"")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"{ 'rotate': topStatus === 'drop' }\"")]),t._v(">")]),t._v("↓"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-show")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"topStatus === 'loading'\"")]),t._v(">")]),t._v("Loading..."),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-loadmore")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("For example, to customize the top DOM, you'll need to add a variable that syncs with "),a("code",[t._v("top-status")]),t._v(" on "),a("code",[t._v("loadmore")]),t._v(" tag, and then write your template with a "),a("code",[t._v("slot")]),t._v(" attribute set to "),a("code",[t._v("top")]),t._v(" and "),a("code",[t._v("class")]),t._v(" set to "),a("code",[t._v("mint-loadmore-top")]),t._v(". "),a("code",[t._v("top-status")]),t._v(" has three possible values that indicates which status the component is at")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("pull")]),t._v(": if the component is being pulled yet not ready to drop (top distance is within the distance threshold defined by "),a("code",[t._v("topDistance")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("drop")]),t._v(": if the component is ready to drop")]),t._v(" "),a("li",[a("code",[t._v("loading")]),t._v(": if "),a("code",[t._v("topMethod")]),t._v(" is running")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("If you decide not to customize HTML templates, you can configure the texts that comes with "),a("code",[t._v("loadmore")]),t._v(". Take the top DOM for example, corresponding to the three "),a("code",[t._v("top-status")]),t._v(" states, configurable options are: "),a("code",[t._v("topPullText")]),t._v(", "),a("code",[t._v("topDropText")]),t._v(" and "),a("code",[t._v("topLoadingText")]),t._v(". And "),a("code",[t._v("bottomPullText")]),t._v(", "),a("code",[t._v("bottomDropText")]),t._v(" and "),a("code",[t._v("bottomLoadingText")]),t._v(" are for the bottom DOM.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Upon loaded, "),a("code",[t._v("loadmore")]),t._v(" will automatically check if it is tall enough to fill its container. If not, "),a("code",[t._v("bottom-method")]),t._v(" will run until its container is filled. Turn off "),a("code",[t._v("auto-fill")]),t._v(" if you'd rather handle this manually.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("option")]),t._v(" "),a("th",[t._v("description")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("acceptable values")]),t._v(" "),a("th",[t._v("default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("autoFill")]),t._v(" "),a("td",[t._v("if "),a("code",[t._v("true")]),t._v(", "),a("code",[t._v("loadmore")]),t._v(" will check and fill its container")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("topPullText")]),t._v(" "),a("td",[t._v("top text when the component is being pulled down")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'下拉刷新'")])]),t._v(" "),a("tr",[a("td",[t._v("topDropText")]),t._v(" "),a("td",[t._v("top text when the component is ready to drop")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'释放更新'")])]),t._v(" "),a("tr",[a("td",[t._v("topLoadingText")]),t._v(" "),a("td",[t._v("top text while "),a("code",[t._v("topMethod")]),t._v(" is running")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'加载中...'")])]),t._v(" "),a("tr",[a("td",[t._v("topDistance")]),t._v(" "),a("td",[t._v("distance threshold that triggers "),a("code",[t._v("topMethod")]),t._v("(in pixel)")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("70")])]),t._v(" "),a("tr",[a("td",[t._v("topMethod")]),t._v(" "),a("td",[t._v("upward load-more function")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("bottomPullText")]),t._v(" "),a("td",[t._v("bottom text when the component is being pulled up")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'上拉刷新'")])]),t._v(" "),a("tr",[a("td",[t._v("bottomDropText")]),t._v(" "),a("td",[t._v("bottom text when the component is ready to drop")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'释放更新'")])]),t._v(" "),a("tr",[a("td",[t._v("bottomLoadingText")]),t._v(" "),a("td",[t._v("bottom text while "),a("code",[t._v("bottomMethod")]),t._v(" is running")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'加载中...'")])]),t._v(" "),a("tr",[a("td",[t._v("bottomDistance")]),t._v(" "),a("td",[t._v("distance threshold that triggers "),a("code",[t._v("bottomMethod")]),t._v("(in pixel)")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("70")])]),t._v(" "),a("tr",[a("td",[t._v("bottomMethod")]),t._v(" "),a("td",[t._v("downward load-more function")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("bottomAllLoaded")]),t._v(" "),a("td",[t._v("if "),a("code",[t._v("true")]),t._v(", "),a("code",[t._v("bottomMethod")]),t._v(" can no longer be triggered")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("false")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("data list")])]),t._v(" "),a("tr",[a("td",[t._v("top")]),t._v(" "),a("td",[t._v("custom top HTML template")])]),t._v(" "),a("tr",[a("td",[t._v("bottom")]),t._v(" "),a("td",[t._v("custom bottom HTML template")])])])])])}]}},85:function(t,s,a){t.exports=a(256)}});
//# sourceMappingURL=70.637bbf8e1a352641fb87.js.map