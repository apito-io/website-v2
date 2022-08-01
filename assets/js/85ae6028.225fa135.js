"use strict";(self.webpackChunkapito_website_v_2=self.webpackChunkapito_website_v_2||[]).push([[7450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,ah:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Project User Register API",sidebar_label:"Registration API",image:"https://cdn.apito.io/media/apito_documentation/VUI8BZ2LWM_Apito_Console___Adding_A_User.png",keywords:["database model","api design","api","database normalization","nosql","nosql database design"]},i=void 0,s={unversionedId:"extensions/auth/register",id:"extensions/auth/register",title:"Project User Register API",description:"There are two ways to add an authenticated users (Registered Users) on your Project",source:"@site/docs/extensions/auth/register.mdx",sourceDirName:"extensions/auth",slug:"/extensions/auth/register",permalink:"/docs/extensions/auth/register",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/extensions/auth/register.mdx",tags:[],version:"current",frontMatter:{title:"Project User Register API",sidebar_label:"Registration API",image:"https://cdn.apito.io/media/apito_documentation/VUI8BZ2LWM_Apito_Console___Adding_A_User.png",keywords:["database model","api design","api","database normalization","nosql","nosql database design"]},sidebar:"docs",previous:{title:"Enable Auth Extension",permalink:"/docs/extensions/auth/auth-support-in-api"},next:{title:"Login API",permalink:"/docs/extensions/auth/login"}},l={},p=[{value:"Adding Users from Apito Console",id:"adding-users-from-apito-console",level:2},{value:"Adding Users via API ( User Registration )",id:"adding-users-via-api--user-registration-",level:2},{value:"GraphQL API",id:"graphql-api",level:3},{value:"RESTful API",id:"restful-api",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{property:"og:type",content:"article"})),(0,r.kt)("p",null,"There are two ways to add an authenticated users (Registered Users) on your Project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Manually - Using Apito Console"),(0,r.kt)("li",{parentName:"ol"},"From Application - Via API")),(0,r.kt)("h2",{id:"adding-users-from-apito-console"},"Adding Users from Apito Console"),(0,r.kt)("p",null,"You can manually add authenticated users that will be able to login via API on your project from Apito Console. For this, Go to ",(0,r.kt)("strong",{parentName:"p"},"Contents")," Tab from the top navigation\nbar and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," from the left side bar. Now you can click ",(0,r.kt)("inlineCode",{parentName:"p"},"+ ADD A NEW USER")," button on the right side of the page. A drawer will pop up like below"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"As you can see we previously chosen ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," as our authentication type therefore you can see in the Apito Console ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," field is marked as mandatory. Same for phone type\nauthentication as well. Alternatively you can reconfigure email based login to phone based login just by reconfiguring the authentication module again. Its that easy.")),(0,r.kt)("img",{alt:"Adding A New User",width:"auto",height:"auto",src:"https://cdn.apito.io/media/apito_documentation/VUI8BZ2LWM_Apito_Console___Adding_A_User.png"}),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"PUBLISH")," button to add an authenticated users who can login via API. The password the user will be using is the same you used during the\ncreation of that user via Apito Console"),(0,r.kt)("h2",{id:"adding-users-via-api--user-registration-"},"Adding Users via API ( User Registration )"),(0,r.kt)("p",null,"Another way to create new user is via API. Both GraphQL and RESTful API on Apito has functions that support user login and registration."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"These GraphQL Queries & Mutation (",(0,r.kt)("inlineCode",{parentName:"p"},"userLogin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"userRegistration"),") and Endpoints (",(0,r.kt)("inlineCode",{parentName:"p"},"/system/auth/login")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/system/auth/register"),") is available only after the successful\nconfiguration of ",(0,r.kt)("inlineCode",{parentName:"p"},"Authentication")," AddOns from ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings"))),(0,r.kt)("h3",{id:"graphql-api"},"GraphQL API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation ProjectUserRegistration {\n  userRegister(secret: "mysecretpassword1234", email: "newuser@gmail.com") {\n    id_token\n    refresh_token\n    id\n  }\n}\n')),(0,r.kt)("h3",{id:"restful-api"},"RESTful API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://api.apito.io/secured/rest/project-id/system/auth/register"\n-H  "accept: application/json" -H  "Authorization: Bearer API_SECRET" -H  "Content-Type: application/json"\n-d "{\\"email\\":\\"newuser@gmail.com\\",\\"secret\\":\\"mysecretpassword1234\\"}"\n')))}d.isMDXComponent=!0}}]);