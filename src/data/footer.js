import gatsby from "../icons/png/logo_gatsby.png";
import vue from "../icons/png/logo_vue.png";
import nuxt from "../icons/png/logo_nuxt.png";
import nextjs from "../icons/png/logo_nextjs.png";
import reactjs from "../icons/png/logo_react.png";
import anguler from "../icons/png/logo_angular.png";
import postgresSQL from "../icons/png/logo_postgresSQL.png";
import SQLServer from "../icons/png/logo_SQLServer.png";
import mySQL from "../icons/png/logo_mySQL.png";
import mariaDB from "../icons/png/logo_mariaDB.png";
import arangoDB from "../icons/png/logo_arangoDB.png";
import mongoDB from "../icons/png/logo_mongoDB.png";
import firestore from "../icons/png/logo_firestore.png";
import dynamoDB from "../icons/png/logo_dynamoDB.png";
import couchbase from "../icons/png/logo_couchbase.png";
import casandra from "../icons/png/logo_casandra.png";
import couchDB from "../icons/png/logo_couchDB.png";
import oracle from "../icons/png/logo_oracle.png";

export const FooterData = {
    sdk: {
        header: "SDK & Stacks",
        title: "Easy Integration with all your favourite Frameworks",
        data: [
            {
                id: 1,
                data: {
                    logo: gatsby,
                    title: "Gatsby",
                    description:
                        "Gatsby is a blazing fast modern site generator for React.",
                    link: "/docs/frameworks/gatsby-cms-with-graphql"
                },
            },
            {
                id: 2,
                data: {
                    logo: vue,
                    title: "Vue",
                    description:
                        "Vue.js is an open-source Model-View-Viewmodel Javascript framework.",
                    link: "/docs/frameworks/vuejs-integration-with-graphql"
                },
            },
            {
                id: 3,
                data: {
                    logo: nuxt,
                    title: "Nuxt.js",
                    link: "/docs/frameworks/nuxtjs-integration-with-graphql",
                    description:
                        "Nuxt.js is a free and open-source web application framework based on Vue.js, Node.js, Webpack.",
                },
            },
            {
                id: 4,
                data: {
                    logo: nextjs,
                    title: "Next.js",
                    link: "/docs/frameworks/nextjs-integration-with-graphql",
                    description:
                        "Next.js is a minimalistic framework for server-rendered React applications as well as statically.",
                },
            },
            {
                id: 5,
                data: {
                    logo: reactjs,
                    title: "React",
                    link: "/docs/frameworks/reactjs-integration-with-graphql",
                    description:
                        "React is a javascript library for building user interfaces. It is maintained by Facebook and a big community",
                },
            },
            {
                id: 6,
                data: {
                    logo: anguler,
                    title: "Angular",
                    link: "/docs/frameworks/angularjs-integration-with-graphql",
                    description:
                        "Angular is a platform for building mobile and desktop web applications.",
                },
            },
            /*      {
                    id: 7,
                    data: {
                      logo: svelte,
                      title: "Svelte",
                      description:
                        "Svelte is a radical new approach to building user interfaces as it writes code that surgically...",
                    },
                  },
                  {
                    id: 8,
                    data: {
                      logo: sapper,
                      title: "Sapper",
                      description:
                        "Sapper is a framework for building web applications of all sizes, with a beautiful development experience...",
                    },
                  },
                  {
                    id: 9,
                    data: {
                      logo: hugo,
                      title: "Hugo",
                      description:
                        "Hugo is one of the most popular open-source static site generators. With its amazing...",
                    },
                  },*/
        ],
    },
    communications: [
        {
            data: {
                description: {
                    markdown:
                        "We share Projects, Codes & Documentation for Apito Projects at our [**Github Account**](https://github.com/apito-io/). Do check it out.",
                },
                icon: {
                    url: "https://cdn.apito.io/media/apito_website/communication/4GBODHTPFH_github.png",
                },
                title: "Github Access",
            },
            id: "74ab7f03-fdcd-4736-969f-b20929099602",
        },
        {
            data: {
                description: {
                    markdown:
                        "Our Team is always active on our [**Discord Channel**](https://discord.gg/fwHgF8pUpt). Ask your Questions, Join the discussions, and much more",
                },
                icon: {
                    url: "https://cdn.apito.io/media/apito_website/communication/0S3BQ3M873_discord.png",
                },
                title: "Join our Discord",
            },
            id: "82366ef1-2615-4250-a088-03368d8c874c",
        },
        {
            data: {
                description: {
                    markdown:
                        "If you have any further queries aobut our platform, please leave a message at the messanger (bottom right)",
                },
                icon: {
                    url: "https://cdn.apito.io/media/apito_website/communication/V0G5IGG8FC_chat.png",
                },
                title: "Instant Chat",
            },
            id: "3e53ed96-e190-4d6b-95f3-ef76c0d6567b",
        },
    ],
}