(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{393:function(t,s,n){"use strict";n.r(s);var a=n(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"해시-lv2-위장-자바스크립트"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#해시-lv2-위장-자바스크립트"}},[t._v("#")]),t._v(" [해시][Lv2] 위장 - 자바스크립트")]),t._v(" "),n("h2",{attrs:{id:"프로그래머스-문제"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#프로그래머스-문제"}},[t._v("#")]),t._v(" 프로그래머스 문제")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://programmers.co.kr/learn/courses/30/lessons/42578",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://programmers.co.kr/learn/courses/30/lessons/42578"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"시도-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#시도-1"}},[t._v("#")]),t._v(" 시도 1.")]),t._v(" "),n("p",[t._v("이전 문제에서 해시의 개념을 알았으니 술술 풀릴거라생각했으나...")]),t._v(" "),n("p",[t._v("일단 "),n("code",[t._v("clothes")]),t._v(" 배열을 {key,value} ⇒ {의상 종류 명, 의상의 개수}의 map형식으로 바꿨다.")]),t._v(" "),n("p",[t._v("다만.. 뭔가 노가다로 구하는 게 아니라 조합공식을 써야 할 것 같았는데 수학을 놓은지 오래 되어서 계속 헤맸다. 의상 개수를 모두 곱해도 안나오고.. 뭔가 놓치고 있는 것 같았음..")]),t._v(" "),n("p",[t._v("결국 질문하기 게시판을 보니, "),n("code",[t._v("의상개수+1")]),t._v(" 을 해서 곱하라는 말이 있었다.")]),t._v(" "),n("p",[t._v("그 이유는 ✨"),n("strong",[t._v("해당 의상을 선택하지 않는 경우")]),t._v("✨를 고려하기 위함이었다.ㅠㅠ")]),t._v(" "),n("p",[t._v("저 포인트만 빨리 찾았어도 풀렸을텐데 사실 이문제는 프로그래밍적 난이도보단 수학문제 푸는 느낌이었다...")]),t._v(" "),n("p",[t._v("테스트케이스1의 경우 무조건 조합공식을 써야 통과한다고 함.. "),n("a",{attrs:{href:"https://programmers.co.kr/questions/16227",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("결론 : "),n("code",[t._v("모든 의상을 (개수 +1) 해서 곱한 후, -1(아무것도 안입는 경우를 제외)")])]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("clothes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" answer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hashMap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 의상 종류를 키로 가지고 해당 종류 의상 개수를 value로")]),t._v("\n    clothes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" clothesCnt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hashMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" clothesCnt "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" hashMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clothesCnt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" hashMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    answer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("hashMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("acc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" acc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이 부분을 계속 acc*cur로 두고 고민했었다..ㅠㅠ...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("answer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[t._v("정확성  테스트\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.09")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.11")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.12")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("29.9")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.09")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.11")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.11")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("29.9")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.13")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.2")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.12")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.10")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.3")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.11")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.13")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.2")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.08")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.13")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.10")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.2")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.10")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.07")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.08")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("29.8")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.08")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.11")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.4")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.10")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.10")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("29.7")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.10")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.12")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.2")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.12")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.11")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.13")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.11")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n테스트 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v(" 〉\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("통과")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.15")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.1")]),t._v("MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);