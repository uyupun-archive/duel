(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{207:function(t,e,c){var content=c(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(56).default)("a3bfb530",content,!0,{sourceMap:!1})},214:function(t,e,c){"use strict";var n=c(207);c.n(n).a},215:function(t,e,c){(t.exports=c(55)(!1)).push([t.i,".section[data-v-5aac2e29]{overflow:hidden;height:100vh;position:relative}.c-rotateZ180[data-v-5aac2e29]{transform:rotate(180deg) translateY(-125%)}.c-rotateZ90[data-v-5aac2e29]{transform:rotate(90deg)}.c-playerA[data-v-5aac2e29]{top:16vh;transform:rotate(180deg) translateX(50%)}.c-playerA[data-v-5aac2e29],.c-playerB[data-v-5aac2e29]{position:absolute;left:50%}.c-playerB[data-v-5aac2e29]{bottom:16vh;transform:translateX(-50%)}.c-text[data-v-5aac2e29]{width:100%;position:absolute;top:50%;font-size:30px}.c-translateY125[data-v-5aac2e29]{transform:translateY(125%)}.c-h60[data-v-5aac2e29]{height:60vh}.c-b20[data-v-5aac2e29],.c-h20[data-v-5aac2e29]{height:20vh}.c-b20[data-v-5aac2e29]{width:100%;position:absolute;bottom:0;left:50%;transform:translateX(-50%)}",""])},222:function(t,e,c){"use strict";c.r(e);var n={data:function(){return{canMakePeaceA:!1,canMakePeaceB:!1,isSelectedA:!1,isSelectedB:!1}},methods:{makePeace:function(t){"A"===t?(this.canMakePeaceA=!0,this.isSelectedA=!0):(this.canMakePeaceB=!0,this.isSelectedB=!0),!0===this.isSelectedA&&!0===this.isSelectedB&&this.moveNextTurn()},notMakePeace:function(t){"A"===t?(this.canMakePeaceA=!1,this.isSelectedA=!0):(this.canMakePeaceB=!1,this.isSelectedB=!0),!0===this.isSelectedA&&!0===this.isSelectedB&&this.moveNextTurn()},moveNextTurn:function(){!0!==this.canMakePeaceA||!0!==this.canMakePeaceB?this.$router.push("/duel"):this.$router.push("/complete")}}},o=(c(214),c(43)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"section"},[c("div",{staticClass:"c-h20"},[c("button",{staticClass:"btn btn-danger c-rotateZ180 d-inline-block",attrs:{type:"button"},on:{click:function(e){return t.notMakePeace("A")}}},[t._v("和解しない")]),t._v(" "),c("button",{staticClass:"btn btn-primary c-rotateZ180 d-inline-block",attrs:{type:"button"},on:{click:function(e){return t.makePeace("A")}}},[t._v("和解する")])]),t._v(" "),c("div",{staticClass:"c-playerA"},[t._v("プレイヤー: "+t._s(t.$store.state.playerA))]),t._v(" "),c("p",{staticClass:"c-rotateZ90 c-text"},[t._v("和解しますか？")]),t._v(" "),c("div",{staticClass:"c-playerB"},[t._v("プレイヤー: "+t._s(t.$store.state.playerB))]),t._v(" "),c("div",{staticClass:"c-b20"},[c("button",{staticClass:"btn btn-primary c-translateY125 d-inline-block",attrs:{type:"button"},on:{click:function(e){return t.makePeace("B")}}},[t._v("和解する")]),t._v(" "),c("button",{staticClass:"btn btn-danger c-translateY125 d-inline-block",attrs:{type:"button"},on:{click:function(e){return t.notMakePeace("B")}}},[t._v("和解しない")])])])},[],!1,null,"5aac2e29",null);e.default=component.exports}}]);