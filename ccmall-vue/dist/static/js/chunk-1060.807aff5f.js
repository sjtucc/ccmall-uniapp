(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1060"],{"2gau":function(t,e,n){},AqHc:function(t,e,n){},M2xu:function(t,e,n){"use strict";var i=n("AqHc");n.n(i).a},eT7v:function(t,e,n){"use strict";var i=n("2gau");n.n(i).a},ntYl:function(t,e,n){"use strict";n.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-left"},[e("div",{staticClass:"login-time"},[this._v("\n        欢迎使用\n      ")]),this._v(" "),e("img",{staticClass:"img",attrs:{src:n("EZUY"),alt:""}}),this._v(" "),e("p",{staticClass:"title"},[this._v("ccmall 开源商城后台登录")])])}],o=n("fe1z"),s={name:"Login",data:function(){return{loginForm:{username:"guest",password:"123456",verifyCode:"666666"},loginRules:{username:[{required:!0,trigger:"blur",validator:function t(e,n,i){null==t?i(new Error("请输入正确的管理员用户名")):i()}}],password:[{required:!0,trigger:"blur",validator:function(t,e,n){e.length<6?n(new Error("管理员密码长度应大于6")):n()}}],verifyCode:[{required:!0,trigger:"blur",message:"验证码不能为空"}]},passwordType:"password",loading:!1,verifyLoading:!1,show:!0,count:"",timer:null}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){},destroyed:function(){},methods:{sendShortMsg:function(){var t=this;if(this.show){if(null==this.loginForm.username||""===this.loginForm.username||null==this.loginForm.password||""===this.loginForm.password)return this.$notify.error({title:"失败",message:"请先填写用户名和密码"}),!1;this.verifyLoading=!0,Object(o.d)(this.loginForm).then(function(e){t.verifyLoading=!1,t.$notify.success({title:"成功",message:"信息发送成功"});t.timer||(t.count=60,t.show=!1,t.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3))}).catch(function(e){t.verifyLoading=!1,t.$notify.error({title:"失败",message:e.data.errmsg}),t.verifyLoading=!1})}else this.$notify.error({title:"失败",message:"请等待60s后重试"})},showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(e){if(!e||t.loading)return!1;t.loading=!0,t.$store.dispatch("LoginByUsername",t.loginForm).then(function(){t.loading=!1,t.$router.push({path:t.redirect||"/"})}).catch(function(e){t.$notify.error({title:"失败",message:e.data.errmsg}),t.loading=!1})})}}},r=(n("eT7v"),n("M2xu"),n("ZrdR")),a=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container",nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleLogin(e):null}}},[n("div",{staticClass:"login-weaper animated bounceInDown"},[t._m(0),t._v(" "),n("div",{staticClass:"login-border"},[n("div",{staticClass:"login-main"},[n("h4",{staticClass:"login-title"},[t._v("\n          登录 ccmall\n        ")]),t._v(" "),n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{rules:t.loginRules,model:t.loginForm,"status-icon":"","label-width":"0"}},[n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{placeholder:"请输入用户名",size:"small","auto-complete":"off"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleLogin(e):null}},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}},[n("i",{staticClass:"icon-yonghu",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:t.passwordType,placeholder:"请输入密码",size:"small","auto-complete":"off"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleLogin(e):null}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}},[n("i",{staticClass:"el-icon-view el-input__icon",attrs:{slot:"suffix"},on:{click:t.showPwd},slot:"suffix"}),t._v(" "),n("i",{staticClass:"icon-mima",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),n("el-form-item",{attrs:{prop:"code"}},[n("el-input",{attrs:{placeholder:"输入验证码",size:"small","auto-complete":"off"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleLogin(e):null}},model:{value:t.loginForm.verifyCode,callback:function(e){t.$set(t.loginForm,"verifyCode",e)},expression:"loginForm.verifyCode"}},[n("i",{staticClass:"icon-yanzhengma",staticStyle:{"margin-top":"6px"},attrs:{slot:"prefix"},slot:"prefix"}),t._v(" "),n("template",{slot:"append"},[n("span",{staticClass:"msg-text",class:[{display:!t.show}],on:{click:t.sendShortMsg}},[t._v(t._s(t.show?"验证码":t.count))])])],2)],1),t._v(" "),n("el-form-item",[n("el-button",{staticClass:"login-submit",attrs:{type:"primary",size:"small"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登录")])],1)],1)],1)])])])},i,!1,null,null,null);a.options.__file="index.vue";e.default=a.exports}}]);