(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),r=t(4),a=t.n(r),s=(t(13),t(3)),l=t(5),u=t(6),i=t(8),b=t(7),d=(t(14),t(15),t(0)),j=function(e){var n=e.counter,t=e.onIncrease,c=e.onDecrease,o=e.onDelete;console.log("counter - render");var r=n.value?"btn-primary":"btn-warning";return Object(d.jsxs)("div",{className:"row m-3",children:[Object(d.jsx)("button",{className:"btn ".concat(r," btn-sm col-1 m-2"),children:n.value}),Object(d.jsx)("button",{onClick:function(){return t(n)},className:"btn btn-outline-success btn-sm col-1 m-2",children:"Increase"}),Object(d.jsx)("button",{disabled:!n.value,onClick:function(){return c(n)},className:"btn btn-outline-info btn-sm col-1 m-2",children:"Decrease"}),Object(d.jsx)("button",{onClick:function(){return o(n.id)},className:"btn btn-outline-danger btn-sm col-1 m-2",children:"Delete"})]})},h=(t(17),function(e){var n=e.counters,t=e.onIncrease,c=e.onDecrease,o=e.onReset,r=e.onDelete;return console.log("Counters - render"),Object(d.jsxs)("div",{className:"container main",children:[Object(d.jsx)("button",{className:"btn btn-secondary btn-md",onClick:o,children:"Reset"}),n.map((function(e){return Object(d.jsx)(j,{counter:e,onDelete:r,onIncrease:t,onDecrease:c},e.id)}))]})}),m=function(e){var n=e.noOfCounter;return console.log("Navbar - render"),Object(d.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(d.jsxs)("a",{href:"https://getbootstrap.com",className:"navbar-brand",children:["Navbar ",Object(d.jsx)("span",{className:"badge rounded-pill bg-primary",children:n})]})})},v=function(e){Object(i.a)(t,e);var n=Object(b.a)(t);function t(){var e;return Object(l.a)(this,t),(e=n.call(this)).state={counters:[{id:1,value:2},{id:2,value:0},{id:3,value:0},{id:4,value:4}]},e.handleDelete=function(n){var t=e.state.counters.filter((function(e){return e.id!==n}));e.setState({counters:t})},e.handleIncrease=function(n){var t=Object(s.a)(e.state.counters),c=t.indexOf(n);t[c].value++,e.setState({counters:t})},e.handleDecrease=function(n){var t=Object(s.a)(e.state.counters),c=t.indexOf(n);t[c].value--,e.setState({counters:t})},e.handleReset=function(){var n=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:n})},console.log("App - constructor"),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("App - mount")}},{key:"componentDidUpdate",value:function(e,n){console.log("App - updated"),console.log("prevProps",e),console.log("prevState",n)}},{key:"componentWillUnmount",value:function(){console.log("App - unmount")}},{key:"render",value:function(){console.log("App - render");var e=this.state.counters;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{noOfCounter:e.filter((function(e){return e.value>0})).length}),Object(d.jsx)("main",{className:"container",children:Object(d.jsx)(h,{onIncrease:this.handleIncrease,onDecrease:this.handleDecrease,onDelete:this.handleDelete,onReset:this.handleReset,counters:e})})]})}}]),t}(c.Component),f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),r(e),a(e)}))};t(18);a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),f()}},[[19,1,2]]]);
//# sourceMappingURL=main.3e807787.chunk.js.map