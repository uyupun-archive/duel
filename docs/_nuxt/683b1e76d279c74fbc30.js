(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{208:function(t,e,o){var content=o(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(56).default)("24d39997",content,!0,{sourceMap:!1})},216:function(t,e,o){t.exports=o.p+"img/dd7fb6d.png"},217:function(t,e,o){"use strict";var r=o(208);o.n(r).a},218:function(t,e,o){(t.exports=o(55)(!1)).push([t.i,".c-h1[data-v-60ccc17a]{margin-bottom:30px;font-size:50px}.c-h1[data-v-60ccc17a]:first-letter{color:#c00000;font-size:60px}.c-logo[data-v-60ccc17a]{width:50%;max-width:150px;margin-top:30px;margin-bottom:30px;transform:rotate(0);-webkit-animation:logo-data-v-60ccc17a 5s linear infinite;animation:logo-data-v-60ccc17a 5s linear infinite}@-webkit-keyframes logo-data-v-60ccc17a{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes logo-data-v-60ccc17a{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},220:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{fightName:"",playerA:"",playerB:""}},methods:{validateForm:function(){return this.fightName.length<5||this.fightName.length>20||this.playerA.length<1||this.playerA.length>15||this.playerB.length<1||this.playerB.length>15},standby:function(){this.$store.commit("setFightName",this.fightName),this.$store.commit("setPlayerA",this.playerA),this.$store.commit("setPlayerB",this.playerB),this.$router.push("/duel")}}},n=(o(217),o(43)),component=Object(n.a)(r,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticClass:"c-logo",attrs:{src:o(216),alt:"ロゴ"}}),t._v(" "),r("h1",{staticClass:"c-h1"},[t._v("Duel")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fightName,expression:"fightName"}],staticClass:"form-control mb-4",attrs:{type:"text",placeholder:"争いの種"},domProps:{value:t.fightName},on:{input:function(e){e.target.composing||(t.fightName=e.target.value)}}}),t._v(" "),r("div",{staticClass:"row mb-5"},[r("div",{staticClass:"col pr-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.playerA,expression:"playerA"}],staticClass:"form-control",attrs:{type:"text",placeholder:"プレイヤーA"},domProps:{value:t.playerA},on:{input:function(e){e.target.composing||(t.playerA=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col pl-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.playerB,expression:"playerB"}],staticClass:"form-control",attrs:{type:"text",placeholder:"プレイヤーB"},domProps:{value:t.playerB},on:{input:function(e){e.target.composing||(t.playerB=e.target.value)}}})])]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.validateForm()},on:{click:function(e){return t.standby()}}},[t._v("スタンバイ")])])},[],!1,null,"60ccc17a",null);e.default=component.exports}}]);