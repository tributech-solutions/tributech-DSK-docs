(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[263],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(a),f=r,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return a?n.createElement(h,o(o({ref:t},l),{},{components:a})):n.createElement(h,o({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2382:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=["components"],u={},s="Consume data via APIs",c={unversionedId:"quickstart/data-consuming/data-via-apis",id:"quickstart/data-consuming/data-via-apis",isDocsHomePage:!1,title:"Consume data via APIs",description:"In this guide you will learn how you can consume your own Datasets and Subscriptions via the built in APIs of your DataSpace Node.",source:"@site/docs/quickstart/data-consuming/data-via-apis.md",sourceDirName:"quickstart/data-consuming",slug:"/quickstart/data-consuming/data-via-apis",permalink:"/docs/quickstart/data-consuming/data-via-apis",editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/quickstart/data-consuming/data-via-apis.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Subscribe to Dataset",permalink:"/docs/quickstart/subscribe-dataset"},next:{title:"Consume data via dashbaords",permalink:"/docs/quickstart/data-consuming/data-via-dashboards"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"General info",id:"general-info",children:[]},{value:"Retrieving values through the Data API",id:"retrieving-values-through-the-data-api",children:[]},{value:"Other endpoints",id:"other-endpoints",children:[]}],d={toc:l};function p(e){var t=e.components,u=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"consume-data-via-apis"},"Consume data via APIs"),(0,i.kt)("p",null,"In this guide you will learn how you can consume your own Datasets and Subscriptions via the built in APIs of your DataSpace Node."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The prerequisits for consuming data from a Subscription via the integrated APIs are, that a Dataset must be available at your node. ",(0,i.kt)("br",null),"\nIf you followed the Quick Start guide, then those prerequisites should be fulfilled."),(0,i.kt)("p",null,"This could be in one of two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You are ",(0,i.kt)("strong",{parentName:"li"},"Data Owner"),": You own some Datasets and have your own data on your node (Owner DB)"),(0,i.kt)("li",{parentName:"ul"},"You are ",(0,i.kt)("strong",{parentName:"li"},"Data Consumer"),": You have been granted a Subscription to a Dataset and the data is already synchronised to your node (Consumer DB)")),(0,i.kt)("h3",{id:"general-info"},"General info"),(0,i.kt)("p",null,"Navigate to the Data API / Trust API of your node and Authorize yourself by following our ",(0,i.kt)("a",{parentName:"p",href:"/docs/integration/node/swagger-ui-authorization"},"Swagger UI Authorization Guide"),"."),(0,i.kt)("p",null,"You can retrieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"valueMetadataId")," which is a unique id for a data stream by copying it in the DataSpace Admin App ",(0,i.kt)("a",{parentName:"p",href:"../create-dataset/#successful-creation-of-the-dataset"},"as described here"),"."),(0,i.kt)("h3",{id:"retrieving-values-through-the-data-api"},"Retrieving values through the Data API"),(0,i.kt)("p",null,"You can retrieve values for one of your data streams through the ",(0,i.kt)("inlineCode",{parentName:"p"},"/values/{valueMetadataId}")," endpoint."),(0,i.kt)("p",null,'Click "Try it out", paste the valueMetadataId, scroll down and click "Execute".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Retrieve values",src:a(6885).Z})),(0,i.kt)("h3",{id:"other-endpoints"},"Other endpoints"),(0,i.kt)("p",null,"You can access all other endpoints the same way. Note that for a lot of endpoints you will also need a timestamp. A ValueMetadataId and a Timestamp together uniquely identify a certain value."))}p.isMDXComponent=!0},6885:function(e,t,a){"use strict";t.Z=a.p+"assets/images/retrieve-values-7ea5930fab14eb951f67dfd2167bcde0.png"}}]);