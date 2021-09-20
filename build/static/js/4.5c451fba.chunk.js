(this["webpackJsonpbudget-app"]=this["webpackJsonpbudget-app"]||[]).push([[4],{75:function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"fetchBudget",(function(){return i})),n.d(r,"fetchBudgetedCategories",(function(){return s})),n.d(r,"addTransaction",(function(){return d}));var a={};n.r(a),n.d(a,"fetchAllCategories",(function(){return f}));var c=n(31),u=n.n(c),o=n(36),i=function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.next=3,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,"/budgets/").concat(n,"/?_embed=transactions"));case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.next=3,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,"/budgets/").concat(n,"/budgetCategories"));case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.budgetId,r=e.data,t.next=3,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,"/budgets/").concat(n,"/transactions"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(o.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,"/categories/?_expand=parentCategory"));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.a={budget:r,common:a}},76:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(t){var e=Number(t);return new Intl.NumberFormat("pl",{style:"currency",currency:"PLN"}).format(e)},a=function(t){var e=new Date(t);return new Intl.DateTimeFormat("pl").format(e)}},80:function(t,e,n){"use strict";n.r(e);var r,a,c,u,o=n(16),i=n(3),s=n(0),d=n.n(s),f=n(77),l=n(74),m=n(23),b=n(75),p=n(12),g=n(4),O=i.default.div(r||(r=Object(g.a)(["\n  border: 1px solid ",";\n  padding: ","px;\n  display: flex;\n  justify-content: space-between;\n"])),(function(t){return t.theme.colors.gray.dark}),(function(t){return t.theme.spacing.xs})),v=Object(i.default)(O)(a||(a=Object(g.a)(["\n  background-color: ",";\n"])),(function(t){return t.theme.colors.gray.normal})),_=Object(i.default)(O)(c||(c=Object(g.a)(["\n  background-color: ",";\n"])),(function(t){return t.theme.colors.gray.light})),j=i.default.span(u||(u=Object(g.a)(["\n  font-weight: 700;\n  color: ",";\n"])),(function(t){var e=t.theme;return t.negative?e.colors.red.normal:e.colors.green.normal})),C=n(76);var h=function(t){var e=t.name,n=t.onClick,r=t.categories,a=t.transactions,c=t.amount,u=Object(s.useMemo)((function(){if(c)return null;var t=function(){try{return r.reduce((function(t,e){return t+e.budget}),0)}catch(t){return null}}(),e=a.filter((function(t){return r.find((function(e){return e.categoryId===t.categoryId}))})).reduce((function(t,e){return t+e.amount}),0);return t?t-e:null}),[r,a,c]),o=Object(s.useMemo)((function(){return c||u}),[c,u]);return d.a.createElement(v,{onClick:n},d.a.createElement("span",null,e),d.a.createElement(j,{negative:o<0},Object(C.a)(o)))};var y=function(t){var e=t.name,n=t.item,r=t.transactions.filter((function(t){return t.categoryId===n.id})).reduce((function(t,e){return t+e.amount}),0),a=n.budget-r;return d.a.createElement(_,null,d.a.createElement("span",null,e),d.a.createElement(j,{negative:a<0},Object(C.a)(a)))},E=n(38);var S=function(){var t=Object(m.d)(["budget",{id:1}],b.a.budget.fetchBudget).data,e=Object(m.d)("allCategories",b.a.common.fetchAllCategories).data,n=Object(m.d)(["budgetedCategories",{id:1}],b.a.budget.fetchBudgetedCategories).data,r=Object(s.useContext)(E.a.store).dispatch,a=Object(s.useCallback)((function(t){return r({type:"selectParentCategoryId",payload:t})}),[r]),c=Object(l.a)().t,u=Object(s.useRef)(null),i=Object(s.useMemo)((function(){return Object(f.groupBy)(n,(function(t){return e.find((function(e){return e.id===t.categoryId})).parentCategory.name}))}),[n,e]),g=Object(s.useCallback)((function(){a(),u.current()}),[a,u]),O=Object(s.useCallback)((function(){a(null),u.current()}),[a,u]),v=Object(s.useMemo)((function(){return Object.entries(i).map((function(n){var r=Object(o.a)(n,2),c=r[0],u=r[1];return{id:c,Trigger:function(e){var n=e.onClick;return d.a.createElement(h,{name:c,onClick:function(){n(c),a(c)},categories:u,transactions:t.transactions})},children:u.map((function(n){var r=e.find((function(t){return t.id===n.categoryId})).name;return d.a.createElement(y,{key:n.id,name:r,item:n,transactions:t.transactions})}))}}))}),[e,t.transactions,i,a]),_=Object(s.useMemo)((function(){return t.transactions.reduce((function(t,e){return t+e.amount}),0)}),[t.transactions]),j=Object(s.useMemo)((function(){return t.totalAmount-_}),[t.totalAmount,_]),C=Object(s.useMemo)((function(){return n.reduce((function(e,n){var r=t.transactions.filter((function(t){return t.categoryId===n.id})).reduce((function(t,e){return t+e.amount}),0);return e+Math.max(r,n.budget)}),0)}),[t.transactions,n]),S=Object(s.useMemo)((function(){return t.transactions.filter((function(t){return!n.find((function(e){return e.id===t.categoryId}))}))}),[t.transactions,n]),A=Object(s.useMemo)((function(){return S.reduce((function(t,e){return t+e.amount}),0)}),[S]),x=Object(s.useMemo)((function(){return t.totalAmount-C-A}),[t.totalAmount,C,A]);return d.a.createElement("div",null,d.a.createElement(T,null,d.a.createElement(h,{name:t.name,amount:j,onClick:g})),d.a.createElement(p.f,{items:v,clickRef:u}),d.a.createElement(P,null,d.a.createElement(h,{name:c("Other categories"),amount:x,onClick:O})))},T=Object(i.default)("div").withConfig({displayName:"BudgetCategoryList___StyledDiv",componentId:"sc-1pu2qc7-0"})(["border-bottom:5px solid ",";"],(function(t){return t.theme.colors.gray.light})),P=Object(i.default)("div").withConfig({displayName:"BudgetCategoryList___StyledDiv2",componentId:"sc-1pu2qc7-1"})(["border-top:5px solid ",";"],(function(t){return t.theme.colors.gray.light}));n.d(e,"default",(function(){return S}))}}]);
//# sourceMappingURL=4.5c451fba.chunk.js.map