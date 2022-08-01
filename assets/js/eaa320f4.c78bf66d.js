"use strict";(self.webpackChunkapito_website_v_2=self.webpackChunkapito_website_v_2||[]).push([[5874],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,ah:()=>d,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(o),m=n,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return o?a.createElement(g,i(i({ref:t},p),{},{components:o})):a.createElement(g,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},48488:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=o(87462),n=(o(67294),o(3905));const r={id:"how-to-design-database-for-your-project",title:"Designing Databases of a Project",sidebar_label:"Database Design",image:"https://cdn.apito.io/media/apito_documentation/5IZDKXLO9K_Create_A_Model.png",keywords:["database model","api design","api","database normalization","nosql","nosql database design"]},i=void 0,l={unversionedId:"console/how-to-design-database-for-your-project",id:"console/how-to-design-database-for-your-project",title:"Designing Databases of a Project",description:"Database modeling is the most crucial part of your project. Model is the base of what your api will look like.",source:"@site/docs/console/database-design.mdx",sourceDirName:"console",slug:"/console/how-to-design-database-for-your-project",permalink:"/docs/console/how-to-design-database-for-your-project",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/console/database-design.mdx",tags:[],version:"current",frontMatter:{id:"how-to-design-database-for-your-project",title:"Designing Databases of a Project",sidebar_label:"Database Design",image:"https://cdn.apito.io/media/apito_documentation/5IZDKXLO9K_Create_A_Model.png",keywords:["database model","api design","api","database normalization","nosql","nosql database design"]},sidebar:"docs",previous:{title:"Apito Console Howto",permalink:"/docs/category/apito-console-howto"},next:{title:"API Explorer",permalink:"/docs/console/usages-of-swagger-and-graphql-explorer"}},s={},d=[{value:"Creating a Model Entity",id:"creating-a-model-entity",level:2},{value:"Creating Fields Inside Models",id:"creating-fields-inside-models",level:2},{value:"Creating Relations Between Models",id:"creating-relations-between-models",level:2}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{property:"og:type",content:"article"})),(0,n.kt)("p",null,"Database modeling is the most crucial part of your project. Model is the base of what your api will look like.\nA model represents an entity of your business logic. For example if you are making an e-commerce website your model name could be, ",(0,n.kt)("inlineCode",{parentName:"p"},"Product"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"User"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Order"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Report"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Shop")," etc."),(0,n.kt)("h2",{id:"creating-a-model-entity"},"Creating a Model Entity"),(0,n.kt)("p",null,"In order to create model ",(0,n.kt)("strong",{parentName:"p"},"Model")," first click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Models")," from the top navigation bar and click on the button on left side called ",(0,n.kt)("inlineCode",{parentName:"p"},"CREATE A MODEL"),".\nYou will see a page like below. Enter your model name and click ",(0,n.kt)("inlineCode",{parentName:"p"},"CREATE MODEL"),". You will see a success message afterwards"),(0,n.kt)("img",{alt:"Creating Model",title:"Creating Model",width:"auto",height:"auto",src:"https://cdn.apito.io/media/apito_documentation/5IZDKXLO9K_Create_A_Model.png"}),(0,n.kt)("h2",{id:"creating-fields-inside-models"},"Creating Fields Inside Models"),(0,n.kt)("p",null,"Click on the model from the left side menu in-order to add fields to a model. You will see a button appear in the body of the page called ",(0,n.kt)("inlineCode",{parentName:"p"},"ADD A FIELD / RELATION"),". Click on that button\nto add fields to your model. Choose your relevant field type ( ",(0,n.kt)("inlineCode",{parentName:"p"},"Text"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Number"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Dynamic List")," etc) and fill up the necessary fields and click create."),(0,n.kt)("h2",{id:"creating-relations-between-models"},"Creating Relations Between Models"),(0,n.kt)("p",null,"In order to add relations between models click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"ADD A FIELD")," button or choose ",(0,n.kt)("inlineCode",{parentName:"p"},"Relation")," from the left side of the side panel. You will see options like the picture below."),(0,n.kt)("p",null,"In order to a relationship betweend models you have to configure ",(0,n.kt)("inlineCode",{parentName:"p"},"Forward")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Backward")," relationship. For example, If you are creating a relations between a products and category,\nForward Relationship for that particular case could be ",(0,n.kt)("strong",{parentName:"p"},"Products Has Many Categories")," and Backward Relationship could be ",(0,n.kt)("strong",{parentName:"p"},"Categories Has Many Products")," This is also known as Many-to-Many Relationship"),(0,n.kt)("p",null,"Known As (Optional) field is there if you ever need to overwrite a relationship name in the api. For example if you have two relationship with the same model, lets say,\nFor a project management application a project model could have multiple relationship with user model. One could be an assignee and other could be a reporter.\nYou can use this field to assign different name to your relation. Or else you cant have two different relationship with the same model."),(0,n.kt)("img",{alt:"Modeling Relationship",width:"auto",height:"auto",src:"https://cdn.apito.io/media/apito_documentation/C40KXDXNBH_Apito_Console___Creating_Relations.png"}))}c.isMDXComponent=!0}}]);