(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[901],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return g},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=i,f=d["".concat(u,".").concat(p)]||d[p]||l[p]||o;return n?r.createElement(f,a(a({ref:t},g),{},{components:n})):r.createElement(f,a({ref:t},g))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8531:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return g},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],c={title:"Edge Integration",sidebar_position:2},u="DSK Agent Edge Integration",s={unversionedId:"integration/agent/edge/integration",id:"integration/agent/edge/integration",isDocsHomePage:!1,title:"Edge Integration",description:"Integration",source:"@site/docs/integration/agent/edge/integration.md",sourceDirName:"integration/agent/edge",slug:"/integration/agent/edge/integration",permalink:"/docs/integration/agent/edge/integration",editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/integration/agent/edge/integration.md",version:"current",sidebarPosition:2,frontMatter:{title:"Edge Integration",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Edge Configuration",permalink:"/docs/integration/agent/edge/configuration"}},g=[{value:"Integration",id:"integration",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],l={toc:g};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dsk-agent-edge-integration"},"DSK Agent Edge Integration"),(0,o.kt)("h2",{id:"integration"},"Integration"),(0,o.kt)("p",null,"Integration of the DSK Agent Edge is simple since you can use your default exisiting connectors.\nThis is due to the fact, that the agent is integrated at the level of the message bus. ",(0,o.kt)("br",null),"\nMQTT is supported by standard, hence the Agent is compatible with all major message brokers & IoT Runtime solutions. It is e.g. tested and deployed in production with Mosquitto and RabbitMQ.",(0,o.kt)("br",null),"\nConclusively, you can use your exisiting connectors, all you have to do is adapt the configuration / routing."),(0,o.kt)("p",null,"Configuration Options for the DSK Agent Edge can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/integration/agent/edge/configuration"},"here"),"."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read about ",(0,o.kt)("a",{parentName:"li",href:"/docs/integration/node/overview"},"DSK Node integration"))))}d.isMDXComponent=!0}}]);