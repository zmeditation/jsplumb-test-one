(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports={header:"style_header__SSOrA",title:"style_title__2NeZU"}},125:function(e,t,a){e.exports={"scenario-config":"style_scenario-config__ndBYG",sider:"style_sider__1bE46","btn-section":"style_btn-section__2ol7K"}},183:function(e,t,a){e.exports=a(415)},201:function(e,t,a){},308:function(e,t,a){},402:function(e,t,a){},411:function(e,t,a){e.exports={"jtk-bootstrap":"css_jtk-bootstrap__24-y4","jtk-page-container":"css_jtk-page-container__3so0A","jtk-container":"css_jtk-container__2Sf07","jtk-bootstrap-wide":"css_jtk-bootstrap-wide__KsWFH","jtk-demo-main":"css_jtk-demo-main__3HsNB",description:"css_description__BW-vZ","jtk-demo-canvas":"css_jtk-demo-canvas__2J0yx","canvas-wide":"css_canvas-wide__2X9hD",miniview:"css_miniview__2pgbL","jtk-demo-dataset":"css_jtk-demo-dataset__l8mRQ","demo-title":"css_demo-title__GnsxL",controls:"css_controls__3gd9A",sidebar:"css_sidebar__1VfU_","jtk-connector":"css_jtk-connector__E-WJ8","jtk-endpoint":"css_jtk-endpoint__2S7_f","jtk-overlay":"css_jtk-overlay__2w8Jx","jtk-hover":"css_jtk-hover__aXrUM",delete:"css_delete__3T3eS",add:"css_add__249OV",edit:"css_edit__23k9l","selected-mode":"css_selected-mode__3LHhZ",connect:"css_connect__S_kNL","demo-links":"css_demo-links__1ZSy1","jtk-demo":"css_jtk-demo__3dzRR",workplace:"css_workplace__3_rcE","chart-item":"css_chart-item__2yq0o","workplace-chart":"css_workplace-chart__1BO78","box-card":"css_box-card__3vR0Z",header:"css_header__557c1","card-body":"css_card-body__JuApt",item:"css_item__2gN8Z","ui-draggable-dragging":"css_ui-draggable-dragging__2paWW",circle:"css_circle__QpTkP",diamond:"css_diamond__2qV76",ellipse:"css_ellipse__3tIWg",rectangle:"css_rectangle__25DdF","el-main":"css_el-main__wus7h",start:"css_start__1mxdV","btn-clear":"css_btn-clear__15pt0",ep:"css_ep__1FnV1",del:"css_del__i0IhV",dragHover:"css_dragHover__KwNsZ",app:"css_app__1fI_S","el-header":"css_el-header__3DCXO","el-footer":"css_el-footer__1D0JN","el-aside":"css_el-aside__1Cdhx",container:"css_container__11zMc",main:"css_main__2Pjbs","template-box":"css_template-box__lhDb8","template-list":"css_template-list__1cdei",active:"css_active__3xhYh","btn-save":"css_btn-save__34S1I","btn-save-img":"css_btn-save-img__2pqGb","chart-dot":"css_chart-dot__2-RjW","chart-dot-hover":"css_chart-dot-hover__2UKsp"}},413:function(e,t,a){},415:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),o=a.n(c),i=a(63),s=a(64),l=a(167),d=a(168),u=a(61),m=Object(u.fromJS)({showLoading:!1}),h=Object(u.fromJS)({tasks:[]}),p=Object(d.combineReducers)({page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return"show_loading"===t.type?e.set("showLoading",!0):"hide_loading"===t.type?e.set("showLoading",!1):e},scenario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"scenario/save_task":return e.set("tasks",t.data);default:return e}}}),_=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):s.c)(Object(s.a)(l.a)),b=Object(s.d)(p,_),f=(a(130),a(90)),k=(a(54),a(26)),v=a(11),g=a(12),y=a(15),j=a(13),O=a(14),E=a(420),N=(a(201),a(169)),w=a(122),S=a.n(w),C=k.a.Header,x=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(C,Object(N.a)({className:"header"},"className",S.a.header),r.a.createElement("div",{className:"logo"}),r.a.createElement("h1",{className:S.a.title},"\u540e\u53f0\u7ba1\u7406"))}}]),t}(r.a.Component),I=(a(142),a(8)),T=(a(417),a(52)),D=a(418),P=a(422),L=[{key:"sub1",title:"\u5206\u573a\u666f\u6570\u636e\u6d41",icon:"user",children:[{key:"/",title:"\u573a\u666f\u5217\u8868"},{key:"/scenarioConfig",title:"\u573a\u666f\u914d\u7f6e"}]},{key:"sub2",title:"subnav 2",icon:"laptop",children:[{key:"/5",title:"option5"},{key:"/6",title:"option6"},{key:"/7",title:"option7"}]}],J=k.a.Sider,M=T.a.SubMenu,H=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.history.location.pathname,t=L.find(function(t){return t.children.find(function(t){return t.key===e})});return r.a.createElement(J,{width:200,style:{background:"#545c64"}},r.a.createElement(T.a,{mode:"inline",theme:"light",defaultSelectedKeys:[e],defaultOpenKeys:[t.key],style:{height:"100%",borderRight:0}},L.map(function(e){return r.a.createElement(M,{key:e.key,title:r.a.createElement("span",null,r.a.createElement(I.a,{type:e.icon}),e.title)},e.children.map(function(e){return r.a.createElement(T.a.Item,{key:e.key},r.a.createElement(D.a,{to:e.key},e.title))}))})))}}]),t}(r.a.Component),R=Object(P.a)(H),W=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"123")}}]),t}(r.a.Component),B=(Object(P.a)(W),a(421)),F=a(419),V=(a(416),a(180)),z=(a(280),a(126)),A=a(18),K=a(124),U=a.n(K),X=a(175),Z=a(65),q=a.n(Z),G=(a(150),a(92)),Q=function(e){G.a.error({title:"\u63d0\u793a",content:e})};q.a.defaults={timeout:3e4,withCredentials:!0};q.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),q.a.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)});var Y={get:function(e,t){return new Promise(function(a,n){b.dispatch({type:"show_loading"}),q.a.get(e,{params:t}).then(function(e){b.dispatch({type:"hide_loading"}),200===e.status?a(e.data):(Q(e.statusText),n(e))}).catch(function(e){b.dispatch({type:"hide_loading"}),Q(e.response.statusText),n(e)})})}};Y.post=function(){var e=Object(X.a)(U.a.mark(function e(t,a){var n;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://localhost:3000",t&&"http://localhost:3000"+t,e.next=5,q.a.post(t,JSON.stringify(a));case 5:return n=(n=e.sent).data,e.abrupt("return",new Promise(function(e,t){0===n.code?e(n):t(n)}));case 10:e.prev=10,e.t0=e.catch(0),alert("\u670d\u52a1\u5668\u51fa\u9519"),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t,a){return e.apply(this,arguments)}}();var $=Y,ee=a(176),te=a(62),ae=a.n(te),ne=function(e){return{type:"scenario/save_task",data:e}},re=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).state={tasks:[]},a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"box-card"},r.a.createElement("div",{className:"header"},"\u4efb\u52a1\u5217\u8868"),r.a.createElement("div",{className:"card-body"},this.renderItem())))}},{key:"componentDidMount",value:function(){this.getTaskList()}},{key:"getTaskList",value:function(){var e=this;this.props.tasks.length?this.makeItemDraggable():$.get("/data/taskList.json").then(function(t){e.props.saveTask(t),e.makeItemDraggable()})}},{key:"renderItem",value:function(){return this.props.tasks.map(function(e,t){return r.a.createElement("div",{className:"item",key:t,"data-icon":e.icon,"data-text":e.name,"data-busitype":e.busiType},r.a.createElement("i",{style:{backgroundImage:"url("+e.icon+")"}}),r.a.createElement("span",{className:"text"},e.name))})}},{key:"makeItemDraggable",value:function(){ae()(".box-card .item").draggable({scope:"plant",helper:"clone",containment:ae()("#"+this.props.containerId)})}}]),t}(n.Component);re.defaultProps={containerId:"body"};var ce=Object(i.b)(function(e){return{tasks:e.getIn(["scenario","tasks"])}},function(e){return{getTask:function(){var t=function(e){$.get("/data/taskList.json").then(function(t){var a=ne(t);e(a)})};e(t)},saveTask:function(t){var a=ne(t);e(a)}}})(re),oe=(a(305),a(181)),ie=(a(308),function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).handleNodeDbclick=a.handleNodeDbclick.bind(Object(A.a)(Object(A.a)(a))),a.removeNode=a.removeNode.bind(Object(A.a)(Object(A.a)(a))),a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.nodeStyle,n=e.icon,c=e.text;this.props.removeNode;return r.a.createElement("div",{className:"workplace-chart",id:t,style:a,onDoubleClick:this.handleNodeDbclick,"data-item":JSON.stringify(this.props.item)},r.a.createElement("i",{style:{backgroundImage:"url("+n+")"}}),r.a.createElement("span",null,c),r.a.createElement("div",{className:"del",onClick:this.removeNode},"x"),r.a.createElement("div",{className:"ep"}))}},{key:"handleNodeDbclick",value:function(){}},{key:"removeNode",value:function(){this.props.removeNode(this.props.item.id)}}]),t}(n.Component));ie.defaultProps={item:{}};var se=ie,le=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).state={chartData:{nodes:[],connections:[]}},a.removeNode=a.removeNode.bind(Object(A.a)(Object(A.a)(a))),a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"workplace",id:"workplace"},this.renderChartNode()))}},{key:"renderChartNode",value:function(){var e=this;return this.state.chartData.nodes.map(function(t,a){return r.a.createElement(se,{key:a,item:t,removeNode:e.removeNode})})}},{key:"componentDidMount",value:function(){this.jsPlumbPrepare()}},{key:"jsPlumbPrepare",value:function(){var e=this;console.log("jsPlumbPrepare");var t=this,a=window.jsPlumb;a.ready(function(){var n=a.getInstance({Endpoint:["Blank",{cssClass:"chart-dot",hoverClass:"chart-dot-hover",radius:5}],Connector:"Straight",HoverPaintStyle:{stroke:"#1e8151",strokeWidth:2},ConnectionOverlays:[["Arrow",{location:1,visible:!0,width:11,height:11,id:"Arrow"}]],Container:"workplace"});e.jsp=n;document.getElementById("workplace");n.bind("click",function(t){e.jsp.deleteConnection(t)}),n.bind("connection",function(e){}),n.bind("beforeDrop",function(e){var a=!0;return t.getConnections().forEach(function(t){(t.targetId===e.targetId&&t.sourceId===e.sourceId||t.targetId===e.sourceId&&t.sourceId===e.targetId)&&(a=!1)}),a||oe.a.warning("\u4e0d\u5141\u8bb8\u91cd\u590d\u8fde\u63a5\uff01"),a}),ae()("#workplace").droppable({scope:"plant",drop:function(e,a){console.log(1);var n=a.helper,r=window.jsPlumbUtil.uuid(),c={id:r,icon:n.attr("data-icon"),busiType:n.attr("data-busitype"),text:n.attr("data-text"),nodeStyle:{top:a.position.top+"px",left:a.position.left-180-20+"px"},props:{}};t.chartDataPushNode(c),t.initNode(r)}})})}},{key:"chartDataPushNode",value:function(e){var t=this;console.log(this.state.chartData.nodes),this.setState(function(){var a=JSON.parse(JSON.stringify(t.state.chartData));return a.nodes.push(e),{chartData:a}},function(){console.log(t.state.chartData.nodes)})}},{key:"initNode",value:function(e){this.jsp.draggable(e,{containment:!0,start:function(e){},drag:function(e){},stop:function(e){}}),this.jsp.makeSource(e,{filter:".ep",anchor:["Perimeter",{shape:"Rectangle"}],connectorStyle:{stroke:"#5c96bc",strokeWidth:2,outlineStroke:"transparent",outlineWidth:4},extract:{action:"the-action"},maxConnections:-1,onMaxConnections:function(e,t){alert("Maximum connections ("+e.maxConnections+") reached")}}),this.jsp.makeTarget(e,{dropOptions:{hoverClass:"dragHover"},anchor:["Perimeter",{shape:"Rectangle"}],allowLoopback:!1})}},{key:"removeNode",value:function(e){this.jsp.remove(e)}},{key:"getNodes",value:function(){var e=Object.values(this.jsp.getManagedElements()),t=[];return e.forEach(function(e){var a=JSON.parse(e.el.dataset.item),n=a.id,r=a.icon,c=a.busiType,o=a.text,i=a.nodeStyle;t.push({id:n,icon:r,busiType:c,text:o,nodeStyle:i,props:{}})}),t}},{key:"getConnections",value:function(){var e=this.jsp.getAllConnections(),t=[];return e.forEach(function(e){t.push({sourceId:e.sourceId,targetId:e.targetId})}),t}}]),t}(n.Component),de=a(125),ue=a.n(de),me=k.a.Sider,he=k.a.Content,pe=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).handleOk=function(e){a.setState({visible:!1})},a.handleCancel=function(e){a.setState({visible:!1})},a.state={visible:!1},a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(G.a,{title:"Basic Modal",maskClosable:!1,width:"80%",style:{top:"10%",minHeight:"80%",height:"1px"},visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,wrapClassName:"chartdailog"},r.a.createElement(k.a,{className:ue.a["scenario-config"],id:"dialog-container"},r.a.createElement(me,{className:ue.a.sider,theme:"light"},r.a.createElement(ce,{containerId:"dialog-container"})),r.a.createElement(he,null,r.a.createElement(le,{ref:function(t){e.panel=t}})))))}}]),t}(n.Component),_e=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).state={dataSource:[{id:"001",scenarioName:"\u573a\u666f1",creator:"\u521b\u5efa\u4eba1",createTime:"1546672373748"},{id:"002",scenarioName:"\u573a\u666f2",creator:"\u521b\u5efa\u4eba2",createTime:"1546672373748"},{id:"003",scenarioName:"\u573a\u666f3",creator:"\u521b\u5efa\u4eba3",createTime:"1546672373748"},{id:"004",scenarioName:"\u573a\u666f4",creator:"\u521b\u5efa\u4eba4",createTime:"1546672373748"},{id:"005",scenarioName:"\u573a\u666f5",creator:"\u521b\u5efa\u4eba5",createTime:"1546672373748"},{id:"006",scenarioName:"\u573a\u666f6",creator:"\u521b\u5efa\u4eba6",createTime:"1546672373748"},{id:"007",scenarioName:"\u573a\u666f7",creator:"\u521b\u5efa\u4eba7",createTime:"1546672373748"},{id:"008",scenarioName:"\u573a\u666f8",creator:"\u521b\u5efa\u4eba8",createTime:"1546672373748"},{id:"009",scenarioName:"\u573a\u666f9",creator:"\u521b\u5efa\u4eba9",createTime:"1546672373748"},{id:"010",scenarioName:"\u573a\u666f10",creator:"\u521b\u5efa\u4eba10",createTime:"1546672373748"},{id:"011",scenarioName:"\u573a\u666f11",creator:"\u521b\u5efa\u4eba11",createTime:"1546672373748"},{id:"012",scenarioName:"\u573a\u666f12",creator:"\u521b\u5efa\u4eba12",createTime:"1546672373748"},{id:"013",scenarioName:"\u573a\u666f13",creator:"\u521b\u5efa\u4eba13",createTime:"1546672373748"},{id:"014",scenarioName:"\u573a\u666f14",creator:"\u521b\u5efa\u4eba14",createTime:"1546672373748"}],columns:[{title:"\u573a\u666f\u540d\u79f0",dataIndex:"scenarioName",key:"scenarioName"},{title:"\u521b\u5efa\u4eba",dataIndex:"creator",key:"creator"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createTime",key:"createTime",render:function(e){var t=new Date(parseInt(e));return Object(ee.a)(t,"yyyy-MM-dd hh:mm:ss")}},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return r.a.createElement("span",null,r.a.createElement(I.a,{type:"eye",theme:"twoTone",style:{fontSize:"16px"},onClick:a.viewScenario.bind(Object(A.a)(Object(A.a)(a)),t)}),r.a.createElement(z.a,{type:"vertical"}),r.a.createElement(I.a,{type:"edit",theme:"twoTone",style:{fontSize:"16px"},onClick:a.editScenario.bind(Object(A.a)(Object(A.a)(a)),t)}),r.a.createElement(z.a,{type:"vertical"}),r.a.createElement(I.a,{type:"delete",theme:"twoTone",style:{fontSize:"16px"},onClick:a.deleteScenario.bind(Object(A.a)(Object(A.a)(a)),t)}))}}],action:""},a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(V.a,{dataSource:this.state.dataSource,columns:this.state.columns,rowKey:function(e){return e.id},pagination:{pageSize:7,total:this.state.dataSource.length},onChange:this.handleChange.bind(this)}),r.a.createElement(pe,{ref:function(t){e.chartDailog=t}}))}},{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){console.log(e.current)}},{key:"viewScenario",value:function(){this.chartDailog.setState(function(){return{visible:!0}})}},{key:"editScenario",value:function(){this.setState(function(){return{action:"edit"}})}},{key:"deleteScenario",value:function(){}}]),t}(n.Component),be=(a(77),a(33)),fe=a(93),ke=a.n(fe),ve=k.a.Sider,ge=k.a.Content,ye=[{path:"/",component:_e,breadName:"Home"},{path:"/scenarioConfig",component:function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(A.a)(Object(A.a)(a))),a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(k.a,{className:ke.a["scenario-config"],id:"work-container"},r.a.createElement(ve,{className:ke.a.sider,theme:"light"},r.a.createElement(ce,{containerId:"work-container"})),r.a.createElement(ge,null,r.a.createElement(le,{ref:function(t){e.panel=t}}),r.a.createElement("div",{className:ke.a["btn-section"]},r.a.createElement(be.a,{type:"primary",onClick:this.handleSubmit},"\u63d0\u4ea4"))))}},{key:"handleSubmit",value:function(){var e={};e.connections=this.panel.getConnections(),e.nodes=this.panel.getNodes(),console.log(JSON.stringify(e))}}]),t}(r.a.Component)},{component:function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,"404")}}]),t}(r.a.Component)}],je=k.a.Content,Oe=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(je,{style:{background:"#fff",margin:0,minHeight:280}},r.a.createElement(B.a,null,ye.map(function(e,t){return r.a.createElement(F.a,{key:t,exact:!0,path:e.path,component:e.component})})))}}]),t}(r.a.Component),Ee=function(e){function t(e){return Object(v.a)(this,t),Object(y.a)(this,Object(j.a)(t).call(this,e))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(k.a,null,r.a.createElement(x,null),r.a.createElement(k.a,null,r.a.createElement(R,null),r.a.createElement(k.a,{style:{padding:"0 24px 0"}},r.a.createElement(Oe,null))),r.a.createElement("div",{className:"spinning-wrapper",style:{display:this.props.showLoading?"block":"none"}},r.a.createElement(f.a,{spinning:!0,tip:"Loading...",size:"large"}))))}}]),t}(n.Component),Ne=Object(i.b)(function(e){return{showLoading:e.getIn(["page","showLoading"])}},function(e){return{}})(Ee),we=(a(402),a(405),a(406),a(408),a(409),a(411),a(413),r.a.createElement(i.a,{store:b},r.a.createElement(Ne,null)));o.a.render(we,document.getElementById("root"))},93:function(e,t,a){e.exports={"scenario-config":"style_scenario-config__3h0wE",sider:"style_sider__30aSL","btn-section":"style_btn-section__1qobG"}}},[[183,2,1]]]);
//# sourceMappingURL=main.f7d5a76a.chunk.js.map