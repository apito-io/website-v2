"use strict";(self.webpackChunkapito_website_v_2=self.webpackChunkapito_website_v_2||[]).push([[3628],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,ah:()=>s,kt:()=>h});var n=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(o),h=l,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return o?n.createElement(m,r(r({ref:t},u),{},{components:o})):n.createElement(m,r({ref:t},u))}));function h(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,r=new Array(a);r[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<a;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},62860:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=o(87462),l=(o(67294),o(3905));const a={id:"vuejs-integration-with-graphql",title:"Integrate VueJS with Apito",sidebar_label:"VueJS",image:"https://vuejs.org/images/logo.png",keywords:["database model","api design","api","database normalization","nosql","nosql database design"]},r=void 0,i={unversionedId:"frameworks/vuejs-integration-with-graphql",id:"frameworks/vuejs-integration-with-graphql",title:"Integrate VueJS with Apito",description:"According to the offical doc Vue (pronounced /vju\u02d0/, like view) is a progressive framework for building user interfaces.",source:"@site/docs/frameworks/vuejs.mdx",sourceDirName:"frameworks",slug:"/frameworks/vuejs-integration-with-graphql",permalink:"/docs/frameworks/vuejs-integration-with-graphql",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frameworks/vuejs.mdx",tags:[],version:"current",frontMatter:{id:"vuejs-integration-with-graphql",title:"Integrate VueJS with Apito",sidebar_label:"VueJS",image:"https://vuejs.org/images/logo.png",keywords:["database model","api design","api","database normalization","nosql","nosql database design"]},sidebar:"docs",previous:{title:"Gatsby",permalink:"/docs/frameworks/gatsby-cms-with-graphql"},next:{title:"NuxtJS",permalink:"/docs/frameworks/nuxtjs-integration-with-graphql"}},p={},s=[{value:"1. Apollo Client",id:"1-apollo-client",level:2},{value:"Apollo Boost",id:"apollo-boost",level:3},{value:"Apollo client full configuration",id:"apollo-client-full-configuration",level:4},{value:"2. Install the plugin into Vue",id:"2-install-the-plugin-into-vue",level:2},{value:"3. Apollo provider",id:"3-apollo-provider",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:2},{value:"Webstorm",id:"webstorm",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{property:"og:type",content:"article"})),(0,l.kt)("p",null,"According to the offical doc Vue (pronounced /vju\u02d0/, like view) is a progressive framework for building user interfaces."),(0,l.kt)("p",null,"Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only,\nand is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated\nSingle-Page Applications when used in combination with modern tooling and supporting libraries."),(0,l.kt)("p",null,"This doc is transformed from the vuejs official installation page ",(0,l.kt)("a",{parentName:"p",href:"https://apollo.vuejs.org/guide/installation.html#installation"},"here")),(0,l.kt)("p",null,"In your vue-cli 3 project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vue add apollo\n")),(0,l.kt)("h1",{id:"manual-installation"},"Manual installation"),(0,l.kt)("h2",{id:"1-apollo-client"},"1. Apollo Client"),(0,l.kt)("p",null,"You can either use Apollo Boost or Apollo Client directly (more configuration work)."),(0,l.kt)("h3",{id:"apollo-boost"},"Apollo Boost"),(0,l.kt)("p",null,"Apollo Boost is a zero-config way to start using Apollo Client. It includes some sensible defaults, such as our recommended InMemoryCache and HttpLink,\nwhich come configured for you with our recommended settings and it's perfect for starting to develop fast."),(0,l.kt)("p",null,"Install it alongside vue-apollo and graphql:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install --save vue-apollo graphql apollo-boost\n")),(0,l.kt)("p",null,"Or:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn add vue-apollo graphql apollo-boost\n")),(0,l.kt)("p",null,"In your app, create an ApolloClient instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import ApolloClient from 'apollo-boost'\n\nconst apolloClient = new ApolloClient({\n    // You should use an absolute URL here\n    uri: 'https://api.apito.io/secured/graphql',\n    headers: {\n        Authorization: `Bearer API_SECRET`,\n    },\n})\n")),(0,l.kt)("h4",{id:"apollo-client-full-configuration"},"Apollo client full configuration"),(0,l.kt)("p",null,"If you want some more fine grained control install these packages instead of apollo-boost:"),(0,l.kt)("p",null,"npm install --save vue-apollo graphql apollo-client apollo-link apollo-link-http apollo-cache-inmemory graphql-tag\nOr:"),(0,l.kt)("p",null,"yarn add vue-apollo graphql apollo-client apollo-link apollo-link-http apollo-cache-inmemory graphql-tag\nIn your app, create an ApolloClient instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ApolloClient } from 'apollo-client'\nimport { createHttpLink } from 'apollo-link-http'\nimport { InMemoryCache } from 'apollo-cache-inmemory'\n\n// HTTP connection to the API\nconst httpLink = createHttpLink({\n  // You should use an absolute URL here\n  uri: 'http://localhost:3020/graphql',\n})\n\n// Cache implementation\nconst cache = new InMemoryCache()\n\n// Create the apollo client\nconst apolloClient = new ApolloClient({\n  link: httpLink,\n  cache,\n})\n")),(0,l.kt)("h2",{id:"2-install-the-plugin-into-vue"},"2. Install the plugin into Vue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import Vue from 'vue'\nimport VueApollo from 'vue-apollo'\n\nVue.use(VueApollo)\n")),(0,l.kt)("h2",{id:"3-apollo-provider"},"3. Apollo provider"),(0,l.kt)("p",null,"The provider holds the Apollo client instances that can then be used by all the child components."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const apolloProvider = new VueApollo({\n    defaultClient: apolloClient,\n})\n")),(0,l.kt)("p",null,"Add it to your app with the apolloProvider option:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"new Vue({\n  el: '#app',\n  // inject apolloProvider here like vue-router or vuex\n  apolloProvider,\n  render: h => h(App),\n})\n")),(0,l.kt)("p",null,"You are now ready to use Apollo in your components!"),(0,l.kt)("h1",{id:"ide-integration"},"IDE integration"),(0,l.kt)("h2",{id:"visual-studio-code"},"Visual Studio Code"),(0,l.kt)("p",null,"If you are using VS Code, it's recommended to install the Apollo GraphQL extension (opens new window)."),(0,l.kt)("p",null,"Then configure it by creating a apollo.config.js file in the root folder of the Vue project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='apollo.config.js'",title:"'apollo.config.js'"},"module.exports = {\n  client: {\n    service: {\n      name: 'my-app',\n      // URL to the GraphQL API\n      url: 'http://localhost:3000/graphql',\n    },\n    // Files processed by the extension\n    includes: [\n      'src/**/*.vue',\n      'src/**/*.js',\n    ],\n  },\n}\n")),(0,l.kt)("h2",{id:"webstorm"},"Webstorm"),(0,l.kt)("p",null,"If you are using Webstorm, it's recommended to install the JS GraphQL extension (opens new window)."),(0,l.kt)("p",null,"Then configure it by creating a .graphqlconfig file in the root folder of the Vue project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Untitled GraphQL Schema",\n  "schemaPath": "./path/to/schema.graphql",\n  "extensions": {\n    "endpoints": {\n      "Default GraphQL Endpoint": {\n        "url": "http://url/to/the/graphql/api",\n        "headers": {\n          "user-agent": "JS GraphQL"\n        },\n        "introspect": false\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);