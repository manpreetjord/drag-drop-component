(this["webpackJsonpdrag-n-drop"]=this["webpackJsonpdrag-n-drop"]||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),i=t.n(c),s=t(4),d=t.n(s),u=(t(10),t(3));var a=function(e){var n=e.data,t=Object(c.useState)(n),i=Object(u.a)(t,2),s=i[0],d=i[1],a=Object(c.useState)(!1),o=Object(u.a)(a,2),l=o[0],g=o[1],m=Object(c.useRef)(),p=Object(c.useRef)(),j=function(e,n){console.log("Entering Drag",n);var t=m.current;e.target!==p.current&&(console.log("TARGET IS NOT THE SAME"),d((function(e){var r=JSON.parse(JSON.stringify(e));return r[n.groupIndex].items.splice(n.itemsIndex,0,r[t.groupIndex].items.splice(t.itemsIndex,1)[0]),m.current=n,r})))},x=function e(){console.log("Drag Ending.."),g(!1),p.current.removeEventListener("dragend",e),m.current=null,p.current=null},b=function(e){var n=m.current;return n.groupIndex===e.groupIndex&&n.itemsIndex===e.itemsIndex?"current dnd-item":"dnd-item"};return Object(r.jsx)("div",{className:"drag-n-drop",children:s.map((function(e,n){return Object(r.jsxs)("div",{className:"dnd-group",onDragEnter:l&&!e.items.length?function(e){return j(e,{groupIndex:n,itemsIndex:0})}:null,children:[Object(r.jsx)("div",{className:"group-title",children:e.title}),e.items.map((function(e,t){return Object(r.jsx)("div",{draggable:!0,onDragStart:function(e){!function(e,n){console.log("Drag starting..",n),m.current=n,p.current=e.target,p.current.addEventListener("dragend",x),setTimeout((function(){g(!0)}),0)}(e,{groupIndex:n,itemsIndex:t})},onDragEnter:l?function(e){j(e,{groupIndex:n,itemsIndex:t})}:null,className:l?b(n):"dnd-item",children:e},e)}))]},e.title)}))})},o=[{title:"Group 1",items:["1","2","3"]},{title:"Group 2",items:["4","5"]}];var l=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)(a,{data:o})})})};d.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.5e347c48.chunk.js.map