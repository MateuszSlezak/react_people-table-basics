(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(23),n=c(7),s=(c(33),c(34),c(24)),r=c.n(s),j=c(2),i=c(21),l=c(4),o=c(0),h=(c(35),c(3)),b=function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})};function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=function(){var e=Object(j.q)().personSlug,t=Object(o.useState)(!0),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(o.useState)([]),O=Object(l.a)(r,2),x=O[0],m=O[1],p=Object(o.useState)(!1),u=Object(l.a)(p,2),f=u[0],g=u[1],N=!f&&x.length>0&&!a,v=!f&&0===x.length&&!a;return Object(o.useEffect)((function(){d().then((function(e){var t=e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),a=e.find((function(e){return e.name===t.fatherName}));return Object(i.a)(Object(i.a)({},t),{},{mother:c,father:a})}));m(t)})).catch((function(){g(!0)})).finally((function(){s(!1)}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"box table-container",children:[a&&Object(h.jsx)(b,{}),!a&&f&&Object(h.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),v&&Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),N&&Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Sex"}),Object(h.jsx)("th",{children:"Born"}),Object(h.jsx)("th",{children:"Died"}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:x.map((function(t){return Object(h.jsxs)("tr",{"data-cy":"person",className:t.slug===e?"has-background-warning":"",children:[Object(h.jsx)("td",{children:Object(h.jsx)(n.b,{to:"/people/".concat(t.slug),className:"f"===t.sex?"has-text-danger":"",children:t.name})}),Object(h.jsx)("td",{children:t.sex}),Object(h.jsx)("td",{children:t.born}),Object(h.jsx)("td",{children:t.died}),t.mother?Object(h.jsx)("td",{children:Object(h.jsx)(n.b,{to:"/people/".concat(t.mother.slug),className:"has-text-danger",children:t.motherName})}):Object(h.jsx)("td",{children:t.motherName?t.motherName:"-"}),t.father?Object(h.jsx)("td",{children:Object(h.jsx)(n.b,{to:"/people/".concat(t.father.slug),children:t.fatherName})}):Object(h.jsx)("td",{children:t.fatherName?t.fatherName:"-"})]})}))})]})]})})]})},x=(c(37),function(){var e=function(e){var t=e.isActive;return r()("navbar-item",{"has-background-grey-lighter":t})};return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(n.b,{className:e,to:"/",children:"Home"}),Object(h.jsx)(n.b,{className:e,to:"/people",children:"People"})]})})}),Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{path:"/",element:Object(h.jsx)("h1",{className:"title",children:"Home Page"})}),Object(h.jsx)(j.b,{path:"/people",element:Object(h.jsx)(O,{})}),Object(h.jsx)(j.b,{path:"/people/:personSlug",element:Object(h.jsx)(O,{})}),Object(h.jsx)(j.b,{path:"/home",element:Object(h.jsx)(j.a,{to:"/"})}),Object(h.jsx)(j.b,{path:"*",element:Object(h.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})});Object(a.createRoot)(document.getElementById("root")).render(Object(h.jsx)(n.a,{children:Object(h.jsx)(x,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.68e161b7.chunk.js.map