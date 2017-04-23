webpackJsonp([98],{228:function(t,e,a){var s=a(2)(null,a(381),null,null);t.exports=s.exports},381:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h1",[t._v("Datetime picker")]),t._v(" "),a("blockquote",[a("p",[t._v("A datetime picker.")])]),t._v(" "),a("hr"),t._v(" "),a("h2",[t._v("Import")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Example")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("h2",[t._v("API")]),t._v(" "),t._m(10)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { DatetimePicker } "),a("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"hljs-string"},[t._v("'mint-ui'")]),t._v(";\n\nVue.component(DatetimePicker.name, DatetimePicker);\n")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The "),a("code",[t._v("value")]),t._v(" attribute is the picked date / time.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The "),a("code",[t._v("type")]),t._v(" attribute configures the type of the component, and it has three options:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("datetime")]),t._v(": datetime picker with 5 slots: year, month, date, hour and minute. In this case, "),a("code",[t._v("value")]),t._v(" is a "),a("code",[t._v("Date")]),t._v(" object")]),t._v(" "),a("li",[a("code",[t._v("date")]),t._v(": date picker with 3 slots: year, month and date. In this case, "),a("code",[t._v("value")]),t._v(" is a "),a("code",[t._v("Date")]),t._v(" object")]),t._v(" "),a("li",[a("code",[t._v("time")]),t._v(": time picker with 2 slots: hour and minute. In this case, "),a("code",[t._v("value")]),t._v(" is a string formatted as "),a("code",[t._v("HH:mm")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Sync "),a("code",[t._v("visible")]),t._v(" with one of your vue instance variables. Toggle it to switch on/off the picker.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"pickerVisible"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"time"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v(":value.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"pickerValue"')]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v(">")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("You can configure a custom template for slot options. The template should be a string containing "),a("code",[t._v("{value}")]),t._v(", and "),a("code",[t._v("{value}")]),t._v(" will be parsed to the corresponding value of the option.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"pickerVisible"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"date"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("year-format")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{value} 年"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("month-format")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{value} 月"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("date-format")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{value} 日"')]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v(">")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("When the confirm button is tapped, the "),a("code",[t._v("confirm")]),t._v(" event triggers with "),a("code",[t._v("value")]),t._v(" as its parameter.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"pickerVisible"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"time"')]),t._v("\n  "),a("span",{staticClass:"hljs-attr"},[t._v("@confirm")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleConfirm"')]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("mt-datetime-picker")]),t._v(">")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("option")]),t._v(" "),a("th",[t._v("description")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("acceptable values")]),t._v(" "),a("th",[t._v("default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("value of the picker")]),t._v(" "),a("td",[t._v("Date / String")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("visible")]),t._v(" "),a("td",[t._v("visibility of the picker")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("type of the picker")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("'datetime', 'date', 'time'")]),t._v(" "),a("td",[t._v("'datetime'")])]),t._v(" "),a("tr",[a("td",[t._v("cancelText")]),t._v(" "),a("td",[t._v("text of the cancel button")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'取消'")])]),t._v(" "),a("tr",[a("td",[t._v("confirmText")]),t._v(" "),a("td",[t._v("text of the confirm button")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'确定'")])]),t._v(" "),a("tr",[a("td",[t._v("startDate")]),t._v(" "),a("td",[t._v("minimum possible date")]),t._v(" "),a("td",[t._v("Date")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Jan. 1st a decade ago")])]),t._v(" "),a("tr",[a("td",[t._v("endDate")]),t._v(" "),a("td",[t._v("maximal possible date")]),t._v(" "),a("td",[t._v("Date")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Dec. 31st a decade after")])]),t._v(" "),a("tr",[a("td",[t._v("startHour")]),t._v(" "),a("td",[t._v("minimum possible value for hour")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("endHour")]),t._v(" "),a("td",[t._v("maximal possible value for hour")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("23")])]),t._v(" "),a("tr",[a("td",[t._v("yearFormat")]),t._v(" "),a("td",[t._v("custom template for year")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'{value}'")])]),t._v(" "),a("tr",[a("td",[t._v("monthFormat")]),t._v(" "),a("td",[t._v("custom template for month")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'{value}'")])]),t._v(" "),a("tr",[a("td",[t._v("dateFormat")]),t._v(" "),a("td",[t._v("custom template for date")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'{value}'")])]),t._v(" "),a("tr",[a("td",[t._v("hourFormat")]),t._v(" "),a("td",[t._v("custom template for hour")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'{value}'")])]),t._v(" "),a("tr",[a("td",[t._v("minuteFormat")]),t._v(" "),a("td",[t._v("custom template for minute")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'{value}'")])])])])])}]}},78:function(t,e,a){t.exports=a(228)}});
//# sourceMappingURL=98.b93aa46399be8033dd40.js.map