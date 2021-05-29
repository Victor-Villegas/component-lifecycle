(this["webpackJsonplife-cycle"]=this["webpackJsonplife-cycle"]||[]).push([[0],{48:function(t,e,n){},57:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var a,r=n(0),i=n.n(r),c=n(17),o=n.n(c),l=n(10),s=n(11),h=n(13),u=n(12),d=(n(48),n(16)),j=n(75),b=n(77),O=n(39),p=n(81),m=n(76),f=n(6),v=n(2),g=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.classes;return Object(v.jsxs)(j.a,{item:!0,xs:6,sm:6,md:4,lg:4,xl:3,className:"imageCard",children:[this.props.children,Object(v.jsx)(p.a,{className:t.root,children:Object(v.jsx)(m.a,{className:t.media,image:this.props.url,title:this.props.title})})]})}}]),n}(i.a.Component),y=Object(f.a)((function(){return{root:{maxWidth:"100%",backgroundColor:"transparent"},media:{height:0,paddingTop:"56.25%"},eraseImg:{position:"absolute",right:10}}}))(g),x=[{id:0,name:"My 1st travel",url:"https://picsum.photos/v2/list?page=2&limit=10"},{id:1,name:"A real adventure",url:"https://picsum.photos/v2/list?page=5&limit=5"}],k=n(37),C=n.n(k),D=!1,w=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={data:[],currentData:[]},a}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(t,e,n){return JSON.stringify(e.currentData)!==JSON.stringify(this.state.currentData)||this.props.collectionID!==t.collectionID}},{key:"_handlerImg",value:function(t){for(var e=this.state.currentData.filter((function(e){return e.id!==t})),n=[],a=0;a<this.state.data.length;a++)a===this.props.collectionID?n.push(e):n.push(this.state.data[a]);this.setState({data:n,currentData:e})}},{key:"render",value:function(){var t=this;return Object(v.jsx)(j.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,id:"imgGrid",children:this.state.currentData.map((function(e,n){return Object(v.jsx)(y,{url:e.download_url,title:e.author,children:Object(v.jsx)(b.a,{className:"eraseImg",onClick:function(){return t._handlerImg(e.id)},children:Object(v.jsx)(C.a,{})},e.id)},"".concat(e.id,"_").concat(n))}))})}},{key:"componentWillUnmount",value:function(){a=this.state.data}},{key:"componentDidMount",value:function(){var t=this;D?this.setState({data:a,currentData:a[this.props.collectionID]}):(Promise.all([fetch(x[0].url),fetch(x[1].url)]).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(e){return t.setState({data:e,currentData:e[t.props.collectionID]})})),D=!0)}},{key:"componentDidUpdate",value:function(t,e,n){O.a.from(".imageCard",{duration:1,y:10,opacity:.1,stagger:{grid:[7,15],from:"random",amount:.5}}),this.setState({currentData:this.state.data[this.props.collectionID]})}}]),n}(i.a.Component),E=n(38),S=n.n(E),I=n(78),G=n(60),N=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={activeCollection:0,showGallery:!0,throwError:!1},a.handleOnClick=a.handleOnClick.bind(Object(d.a)(a)),a.handleShowGallery=a.handleShowGallery.bind(Object(d.a)(a)),a.handleError=a.handleError.bind(Object(d.a)(a)),a}return Object(s.a)(n,[{key:"handleOnClick",value:function(t){this.setState({activeCollection:t})}},{key:"handleShowGallery",value:function(){this.setState({showGallery:!this.state.showGallery})}},{key:"handleError",value:function(){this.setState({throwError:!0})}},{key:"render",value:function(){var t=this;if(this.state.throwError)throw new Error("Oh no! Something very bad happened :c");return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",id:"collections",children:x.map((function(e,n){return Object(v.jsx)(G.a,{onClick:function(){return t.handleOnClick(n)},children:e.name},"".concat(e.id,"_").concat(n))}))}),Object(v.jsx)(G.a,{variant:"contained",onClick:this.handleShowGallery,children:"Hide Gallery"}),Object(v.jsx)(b.a,{variant:"contained",color:"secondary",onClick:this.handleError,children:Object(v.jsx)(S.a,{})}),this.state.showGallery?Object(v.jsx)(w,{collectionID:this.state.activeCollection}):null]})}}]),n}(i.a.Component),M=n(79),F=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(M.a,{variant:"h6",align:"center",className:"media-title",color:"secondary",children:"Select a collection"}),Object(v.jsx)(N,{})]})}}]),n}(i.a.Component),_=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={hasError:!1,errorMsg:""},a.handleError=a.handleError.bind(Object(d.a)(a)),a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(t,e){console.log(t,e),this.setState({hasError:!0,errorMsg:t.toString()})}},{key:"handleError",value:function(){window.location.reload(!0)}},{key:"render",value:function(){return this.state.hasError?(console.log(5),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(M.a,{variant:"h1",align:"center",gutterBottom:!0,children:"ERROR FOUND"}),Object(v.jsx)(M.a,{variant:"h4",align:"center",gutterBottom:!0,children:this.state.errorMsg}),Object(v.jsx)(G.a,{variant:"contained",onClick:this.handleError,children:"Refresh page"})]})):this.props.children}}]),n}(r.Component),B=n(80),J=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{id:"gallery-title",children:[Object(v.jsxs)("div",{id:"bigtext",children:[Object(v.jsx)(M.a,{variant:"h3",align:"center",children:"PHOTO"}),Object(v.jsx)(M.a,{variant:"h3",align:"center",className:"media-title",color:"primary",children:"MEDIA"})]}),Object(v.jsx)(M.a,{variant:"h4",align:"center",gutterBottom:!0,children:"Your own private gallery"})]}),Object(v.jsx)(B.a,{className:"App",children:Object(v.jsx)(_,{children:Object(v.jsx)(F,{})})})]})}}]),n}(i.a.Component);n(57);o.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.d1f520d1.chunk.js.map