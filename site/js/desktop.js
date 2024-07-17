(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a;}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){Object.defineProperty(exports,
"__esModule",{value:true});exports.DesktopApi=void 0;const Viewport_1=require("../ui/viewport/Viewport");class DesktopApi{static getInstance(){if(!this.instance)this.instance=new DesktopApi;return this.instance}start(root){Viewport_1.Viewport.getInstance(root)}}exports.DesktopApi=DesktopApi},{"../ui/viewport/Viewport":16}],2:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.ColorConstants=void 0;class ColorConstants{}exports.ColorConstants=ColorConstants;
ColorConstants.NavBarBackground="#aaa";ColorConstants.ViewportBackground="#ccc"},{}],3:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.SizeConstants=void 0;class SizeConstants{}exports.SizeConstants=SizeConstants;SizeConstants.NavBarHeight=35},{}],4:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.StyleConstants=void 0;class StyleConstants{}exports.StyleConstants=StyleConstants;StyleConstants.BackgroundColor=
"backgroundColor"},{}],5:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});const DesktopApi_1=require("./api/DesktopApi");window.DesktopApi=DesktopApi_1.DesktopApi.getInstance()},{"./api/DesktopApi":1}],6:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxObject=void 0;class QxObject{constructor(widget){this.widget=widget;this.initialize()}initialize(){}}exports.QxObject=QxObject},{}],7:[function(require,module,
exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxFactory=void 0;class QxFactory{static compositeContainer(){return new window.qx.ui.container.Composite}static dockLayout(){return new window.qx.ui.layout.Dock}static toolbar(){return new window.qx.ui.toolbar.ToolBar}}exports.QxFactory=QxFactory},{}],8:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxElement=void 0;const QxNode_1=require("./QxNode");class QxElement extends QxNode_1.QxNode{constructor(widget){super(widget)}setStyle(key,
value){this.widget.setStyle(key,value)}}exports.QxElement=QxElement},{"./QxNode":9}],9:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxNode=void 0;const QxObject_1=require("../core/QxObject");class QxNode extends QxObject_1.QxObject{constructor(widget){super(widget)}}exports.QxNode=QxNode},{"../core/QxObject":6}],10:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxComposite=void 0;const QxFactory_1=
require("../../factory/QxFactory");const QxWidget_1=require("../core/QxWidget");const QxDockLayout_1=require("../layout/QxDockLayout");class QxComposite extends QxWidget_1.QxWidget{constructor(){super(QxFactory_1.QxFactory.compositeContainer())}initialize(){super.initialize();this.setLayout(this.defaultLayout())}addCenter(child){this.widget.add(child.widget,{edge:"center"})}addEast(child){this.widget.add(child.widget,{edge:"east"})}addNorth(child){this.widget.add(child.widget,{edge:"north"})}addSouth(child){this.widget.add(child.widget,
{edge:"south"})}addWest(child){this.widget.add(child.widget,{edge:"west"})}defaultLayout(){return new QxDockLayout_1.QxDockLayout}setLayout(layout){console.log("setLayout",layout);window.X=[this,layout];this.widget.setLayout(layout.widget)}}exports.QxComposite=QxComposite},{"../../factory/QxFactory":7,"../core/QxWidget":12,"../layout/QxDockLayout":14}],11:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxLayoutItem=void 0;const QxObject_1=require("../../core/QxObject");
class QxLayoutItem extends QxObject_1.QxObject{constructor(widget){super(widget)}}exports.QxLayoutItem=QxLayoutItem},{"../../core/QxObject":6}],12:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxWidget=void 0;const QxElement_1=require("../../html/QxElement");const QxLayoutItem_1=require("./QxLayoutItem");const StyleConstants_1=require("../../../constants/StyleConstants");class QxWidget extends QxLayoutItem_1.QxLayoutItem{constructor(widget){super(widget);
this.contentElement=undefined}getContentElement(){if(this.contentElement===undefined)this.contentElement=new QxElement_1.QxElement(this.widget.getContentElement());return this.contentElement}setBackgroundColor(color){this.setStyle(StyleConstants_1.StyleConstants.BackgroundColor,color)}setHeight(height){this.widget.setHeight(height)}setStyle(key,value){this.getContentElement().setStyle(key,value)}setWidth(width){this.widget.setWidget(width)}}exports.QxWidget=QxWidget},{"../../../constants/StyleConstants":4,
"../../html/QxElement":8,"./QxLayoutItem":11}],13:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxAbstractLayout=void 0;const QxObject_1=require("../../core/QxObject");class QxAbstractLayout extends QxObject_1.QxObject{constructor(widget){super(widget)}}exports.QxAbstractLayout=QxAbstractLayout},{"../../core/QxObject":6}],14:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxDockLayout=void 0;const QxAbstractLayout_1=
require("./QxAbstractLayout");const QxFactory_1=require("../../factory/QxFactory");class QxDockLayout extends QxAbstractLayout_1.QxAbstractLayout{constructor(){super(QxFactory_1.QxFactory.dockLayout())}}exports.QxDockLayout=QxDockLayout},{"../../factory/QxFactory":7,"./QxAbstractLayout":13}],15:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.QxToolBar=void 0;const QxFactory_1=require("../../factory/QxFactory");const QxWidget_1=require("../core/QxWidget");
class QxToolBar extends QxWidget_1.QxWidget{constructor(){super(QxFactory_1.QxFactory.toolbar())}}exports.QxToolBar=QxToolBar},{"../../factory/QxFactory":7,"../core/QxWidget":12}],16:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.Viewport=void 0;const ColorConstants_1=require("../../constants/ColorConstants");const QxComposite_1=require("../../qx/ui/container/QxComposite");const NavBar_1=require("./widgets/NavBar");class Viewport extends QxComposite_1.QxComposite{static getInstance(root=
null){if(this.instance===undefined)this.instance=new Viewport(root);return this.instance}constructor(root){super();this.navBar=undefined;root.add(this.widget,{top:0,right:0,bottom:0,left:0})}initialize(){super.initialize();this.setBackgroundColor(ColorConstants_1.ColorConstants.ViewportBackground);this.navBar=new NavBar_1.NavBar;this.addNorth(this.navBar)}}exports.Viewport=Viewport},{"../../constants/ColorConstants":2,"../../qx/ui/container/QxComposite":10,"./widgets/NavBar":17}],17:[function(require,
module,exports){Object.defineProperty(exports,"__esModule",{value:true});exports.NavBar=void 0;const ColorConstants_1=require("../../../constants/ColorConstants");const SizeConstants_1=require("../../../constants/SizeConstants");const QxToolBar_1=require("../../../qx/ui/toolbar/QxToolBar");class NavBar extends QxToolBar_1.QxToolBar{initialize(){super.initialize();this.setBackgroundColor(ColorConstants_1.ColorConstants.NavBarBackground);this.setHeight(SizeConstants_1.SizeConstants.NavBarHeight)}}exports.NavBar=
NavBar},{"../../../constants/ColorConstants":2,"../../../constants/SizeConstants":3,"../../../qx/ui/toolbar/QxToolBar":15}]},{},[5]);
