(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a;}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){Object.defineProperty(exports,
"__esModule",{value:true});exports.DesktopApi=void 0;const Viewport_1=require("../ui/viewport/Viewport");class DesktopApi{static getInstance(){if(!this.instance)this.instance=new DesktopApi;return this.instance}start(root){Viewport_1.Viewport.getInstance(root)}}exports.DesktopApi=DesktopApi},{"../ui/viewport/Viewport":9}],2:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});const DesktopApi_1=require("./api/DesktopApi");window.DesktopApi=DesktopApi_1.DesktopApi.getInstance()},
{"./api/DesktopApi":1}],3:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxObject=void 0;class QxObject{constructor(widget){this.widget=widget;this.initialize()}initialize(){}}exports.QxObject=QxObject},{}],4:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxElement=void 0;const QxNode_1=require("./QxNode");class QxElement extends QxNode_1.QxNode{constructor(widget){super(widget)}setStyle(key,value){this.widget.setStyle(key,
value)}}exports.QxElement=QxElement},{"./QxNode":5}],5:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxNode=void 0;const QxObject_1=require("../core/QxObject");class QxNode extends QxObject_1.QxObject{constructor(widget){super(widget)}}exports.QxNode=QxNode},{"../core/QxObject":3}],6:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxComposite=void 0;const QxWidget_1=require("../core/QxWidget");
class QxComposite extends QxWidget_1.QxWidget{constructor(){const widget=new window.qx.ui.container.Composite;super(widget)}}exports.QxComposite=QxComposite},{"../core/QxWidget":8}],7:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxLayoutItem=void 0;const QxObject_1=require("../../core/QxObject");class QxLayoutItem extends QxObject_1.QxObject{constructor(widget){super(widget)}}exports.QxLayoutItem=QxLayoutItem},{"../../core/QxObject":3}],8:[function(require,
module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxWidget=void 0;const QxElement_1=require("../../html/QxElement");const QxLayoutItem_1=require("./QxLayoutItem");class QxWidget extends QxLayoutItem_1.QxLayoutItem{constructor(widget){super(widget);this.contentElement=undefined}getContentElement(){if(this.contentElement===undefined)this.contentElement=new QxElement_1.QxElement(this.widget.getContentElement());return this.contentElement}setStyle(key,value){this.getContentElement().setStyle(key,
value)}}exports.QxWidget=QxWidget},{"../../html/QxElement":4,"./QxLayoutItem":7}],9:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.Viewport=void 0;const QxComposite_1=require("../../qx/ui/container/QxComposite");class Viewport extends QxComposite_1.QxComposite{static getInstance(root=null){if(this.instance===undefined)this.instance=new Viewport(root);console.log("Viewport getInstance",root,this.instance);return this.instance}constructor(root){super();
root.add(this.widget,{top:0,right:0,bottom:0,left:0});window.X=this}initialize(){super.initialize();this.setStyle("backgroundColor","blue")}}exports.Viewport=Viewport},{"../../qx/ui/container/QxComposite":6}]},{},[2]);
