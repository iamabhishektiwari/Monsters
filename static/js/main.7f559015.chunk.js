(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),o=n(3),a=n.n(o),i=(n(13),n(4)),h=n(5),u=n(7),l=n(6),d=(n(14),n(15),function(e){return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set5&size=180x180")}),Object(r.jsx)("h2",{children:e.monster.name}),Object(r.jsx)("h4",{children:e.monster.email})]})}),j=(n(16),function(e){return Object(r.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(r.jsx)(d,{monster:e},e.id)}))})}),m=function(e){var t=e.placeholder,n=e.handleSearch;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"search",placeholder:t,onChange:n})})},b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Monsters Master"}),Object(r.jsx)(m,{placeholder:"Search Monsters",handleSearch:function(t){return e.setState({searchField:t.target.value})}}),Object(r.jsx)(j,{monsters:c})]})}}]),n}(s.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),f()}],[[17,1,2]]]);
//# sourceMappingURL=main.7f559015.chunk.js.map