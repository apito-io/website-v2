import anguler from "../icons/png/logo_angular.png";
import arangoDB from "../icons/png/logo_arangoDB.png";
import casandra from "../icons/png/logo_casandra.png";
import couchbase from "../icons/png/logo_couchbase.png";
import couchDB from "../icons/png/logo_couchDB.png";
import dynamoDB from "../icons/png/logo_dynamoDB.png";
import firestore from "../icons/png/logo_firestore.png";
import gatsby from "../icons/png/logo_gatsby.png";
import hugo from "../icons/png/logo_hugo.png";
import mariaDB from "../icons/png/logo_mariaDB.png";
import mongoDB from "../icons/png/logo_mongoDB.png";
import mySQL from "../icons/png/logo_mySQL.png";
import nextjs from "../icons/png/logo_nextjs.png";
import nuxt from "../icons/png/logo_nuxt.png";
import oracle from "../icons/png/logo_oracle.png";
import postgresSQL from "../icons/png/logo_postgresSQL.png";
import reactjs from "../icons/png/logo_react.png";
import sapper from "../icons/png/logo_sapper.png";
import SQLServer from "../icons/png/logo_SQLServer.png";
import svelte from "../icons/png/logo_svelte.png";
import vue from "../icons/png/logo_vue.png";

export const HomePageData = {
  header: {
    title: "Powerful & Extensible Headless CMS",
    images: [
      "https://cdn.apito.io/media/shikho_website_v2_8ma77/30RCY24Q15_Apito_Console___Model.png",
      "https://cdn.apito.io/media/shikho_website_v2_8ma77/1ZGH5QE8U5_Apito_Console___Content.png",
      "https://cdn.apito.io/media/shikho_website_v2_8ma77/IN1TXKJPX5_Apito_Console___API.png",
    ],
    description:
      "The Most Powerful Headless CMS for Your Content with CDN, Webhooks, Team Collaborations, Content Revision, Cloud Functions and Much more",
    button: {
      label: "Explore Full Features",
      link: "/headless-cms",
    },
  },
  features1: {
    slogan: "None",
    title: "None",
    data: [
      {
        cover: {
          url: "https://cdn.apito.io/media/apito_website/FX9FK3SLJ5_database_model.png",
        },
        description: {
          markdown:
            "Content Modeling has never been easier. Model your database with fields & relations",
        },
        header: "DATABASE",
        icon: {
          url: "https://cdn.apito.io/media/apito_website/TX9PNRYAVX_webhooks.svg",
        },
        link: "/docs/model/database-design",
        link_text: "Learn How",
        title: "Content Modeling tools",
      },

      {
        cover: {
          url: "https://cdn.apito.io/media/apito_website/homepagev2/TM3F0KHCMN_dual_engine_api.png",
        },
        description: {
          markdown:
            "Instantly connectable GraphQL & REST API with Complex Filter",
        },
        header: "INSTANT API",
        icon: {
          url: "https://cdn.apito.io/media/apito_website/8XRYHC4LBQ_auth_module.svg",
        },
        link: "/docs/build-api-quick-start-guide",
        link_text: "See In Action",
        title: "Build API in both GraphQL & REST API",
      },
    ],
  },
  exampleQueries: {
    //slogan: "QUERY PATTERNS",
    //title: "Develop API with complex Queries and Search",
    data: [
      {
        id: 1,
        title: "Content Get",
        description: "Get Website Homepage Data",
        codes: {
          rest: `curl https://api.apito.io/secured/rest/homepage`,
          graphql: `query GetHomePage {
  homepage {
    id
    data {
      title
      description {
        markdown
      }
      cover {
        url
      }
      testimonial {
        link
        title
        description {
          markdown
        }
        avatar {
          url
        }
      }
      features {
        title
        link
        description {
          markdown
        }
      }
    }
  }
}`,
        },
      },
      {
        id: 2,
        title: "Filtering and Sorting",
        description:
          "Query : Filtering Products by Ratting and Sorting by Price",
        codes: {
          rest: `curl https://api.apito.io/secured/rest/ecom/products?rating:gte=4&sort=-price`,
          graphql: `query FilterProductByPriceAndRating {
  products(
    sort: { 
      price: DESC 
    }, 
    where: { 
      rating: { 
        gte: 4 
      }
    }) {
    data {
      price
      name
      description {
        markdown
      }
      rating
      gallery {
        _id
        url
      }
      specifications {
        title
        link
        description {
          markdown
        }
      }
    }
  }
}`,
        },
      },
      {
        id: 3,
        title: "Complex Filtering",
        description: "Searching for Shirts with prices greater than 100",
        codes: {
          rest: `curl https://api.apito.io/secured/rest/ecom/products?price:lt=100
curl https://api.apito.io/secured/rest/ecom/category?name:contains="shirt"`,
          graphql: `query NestedPricedProductSearchByCategory {
  categories(
    where: { 
      name: { 
        contains: "shirt" 
      }
    }) {
    products(
      where: { 
        price: { 
          lt: 100 
        }
      }
    ) {
      data {
        price
        name
        description {
          markdown
        }
        rating
        gallery {
          _id
          url
        }
      }
    }
  }
}`,
        },
      },
      /*      {
                    id: 4,
                    title: "Geo Location Search",
                    codes: {
                      rest: `curl https://api.apito.io/secured/rest/ecom/store?location:geo_within=2KM`,
                      graphql: `query SearchAStoreWithin2KiloMeter {
              stores(where: { location: { geo_within: { km_radius: 2 }}}) {
                id
                data {
                  name
                  location {
                    lon
                    lat
                  }
                  description {
                    markdown
                  }
                }
              }
            }`,
                    },
                  },*/
      {
        id: 4,
        title: "Pagination",
        description: "Fetch 10 User Records of the Second Page",
        codes: {
          rest: `curl https://api.apito.io/secured/rest/ecom/user?limit=10&page=2`,
          graphql: `query GetUsersWithPagination {
  users(
    limit: 10, 
    page: 2
  ) {
    id
    data {
      first_name
      phone
      email
      dob
      gender
      avatar {
        url
      }
      hobbies {
        title
        description {
          markdown
        }
      }
    }
  }
}`,
        },
      },
      /*      {
                    id: 6,
                    title: "Project User Login",
                    restMethod: "post",
                    codes: {
                      rest: `curl -X POST "https://api.apito.io/secured/rest/quantum_ecommerce_ddlj4/system/auth/login"
            -H  "accept: application/json" -H  "Content-Type: application/json"
            -d "{\\"email\\":\\"string\\",\\"secret\\":\\"string\\"}"`,
                      graphql: `query ProjectUserLogin {
              userLogin(secret: "*****", email: "john@apito.io") {
                id_token
                refresh_token
              }
            }`,
                    },
                  },*/
      /*      {
                    id: 7,
                    title: "User Registration",
                    restMethod: "post",
                    codes: {
                      rest: `curl -X POST "https://api.apito.io/secured/rest/quantum_ecommerce_ddlj4/system/auth/register"
            -H  "accept: application/json" -H  "Content-Type: application/json"
            -d "{\\"email\\":\\"string\\",\\"secret\\":\\"string\\"}"
                  `,
                      graphql: `mutation ProjectUserRegistration {
              userRegister(secret: "*****", email: "john@apito.io") {
                id_token
                refresh_token
              }
            }`,
                    },
                  },*/
      /*      {
                    id: 8,
                    title: "Custom Function Calling",
                    restMethod: "post",
                    codes: {
                      rest: `curl -X POST "https://api.apito.io/secured/rest/ecom/system/function/processOrders"
            -H  "accept: application/json" -H  "Content-Type: application/json"
            -d "{\\"status\\":\\"string\\"}"`,
                      graphql: `mutation CustomFunction {
              processOrder(payload: {status: "ACCEPTED"}) {
                order {
                  id
                  products {
                    data {
                      price
                    }
                    ...
                  }
                }
              }
            }`,
                    },
                  },*/
      {
        id: 5,
        title: "Insert Content",
        restMethod: "post",
        description: "Create a Portfolio",
        codes: {
          rest: `curl -X POST "https://api.apito.io/secured/rest/ecom/system/function/processOrders"
-H  "accept: application/json" -H  "Content-Type: application/json" 
-d "{\\"status\\":\\"string\\"}"`,
          graphql: `mutation InsertPortfolio {
  createPortfolio(
    payload: {
      name: "John Doe",
      dob: "1994-02-24"
      active: true,
      address_home : "24/78 Baker Street, London"
    }
  ) {
    data {
      id
      name
      dob
      avatar {
        url
      }
      status
      address {
        home
        office
      }
    }
  }
}`,
        },
      },
      {
        id: 6,
        title: "Update Content",
        restMethod: "post",
        description: "Update Home Address of a Portfolio",
        codes: {
          rest: `curl -X POST "https://api.apito.io/secured/rest/ecom/system/function/processOrders"
-H  "accept: application/json" -H  "Content-Type: application/json" 
-d "{\\"status\\":\\"string\\"}"`,
          graphql: `mutation InsertPortfolio {
  createPortfolio(
    _id : "9c872118-7c86-4e0e-833b-f2c517502adb",
    payload: {
      address_home : "24/78 Baker Street, London"
    }
  ) {
    data {
      id
      name
      dob
      avatar {
        url
      }
      status
      address {
        home
        office
      }
    }
  }
}`,
        },
      },
      {
        id: 6,
        title: "Publish Draft Content",
        restMethod: "post",
        description: "Update status of a content from draft to publish",
        codes: {
          rest: `curl -X POST "https://api.apito.io/secured/rest/ecom/system/function/processOrders"
-H  "accept: application/json" -H  "Content-Type: application/json" 
-d "{\\"status\\":\\"string\\"}"`,
          graphql: `mutation InsertPortfolio {
  createPortfolio(
    _id : "9c872118-7c86-4e0e-833b-f2c517502adb",
    payload: {
      address_home : "24/78 Baker Street, London"
    },
	status : PUBLISHED,
  ) {
    data {
      id
      name
      dob
      avatar {
        url
      }
      status
      address {
        home
        office
      }
    }
  }
}`,
        },
      },
      {
        id: 7,
        title: "Delete Content",
        description: "Deletes a testimonial",
        restMethod: "post",
        codes: {
          rest: `curl -X POST "https://api.apito.io/secured/rest/ecom/system/function/processOrders"
-H  "accept: application/json" -H  "Content-Type: application/json" 
-d "{\\"status\\":\\"string\\"}"`,
          graphql: `mutation DeletePortfolio {
  deletePortfolio(
    _id : "9c872118-7c86-4e0e-833b-f2c517502adb"
  ) {
    data {
      id
      name
      dob
      avatar {
        url
      }
      status
      address {
        home
        office
      }
    }
  }
}`,
        },
      },
    ],
  },
  features2: {
    slogan: "Powerful & Flexible",
    title: "Apito Console helps accelerates your API Development",
    data: [
      {
        cover: {
          url: "https://cdn.apito.io/media/apito_website/0YEWAUG2NN_content_management.png",
        },
        description: {
          markdown:
            "Insert, Delete, Update, Draft & Publish your content easily with multilingual support",
        },
        header: "CMS",
        icon: {
          url: "https://cdn.apito.io/media/apito_website/8XRYHC4LBQ_auth_module.svg",
        },
        link: "/docs/build-api-quick-start-guide#3-insert-your-content",
        link_text: "Explore",
        title: "Content Management System",
      },

      {
        cover: {
          url: "https://cdn.apito.io/media/apito_website/YJC8HDWKFU_roles_permissions.png",
        },
        description: {
          markdown:
            "Ability to manage api access and content moderation via custom roles & permissions",
        },
        header: "ROLES & PERMISSIONS",
        icon: {
          url: "https://cdn.apito.io/media/apito_website/TX9PNRYAVX_webhooks.svg",
        },
        link: "/docs/console/adding-rbac-role-based-permissions-support-to-your-api",
        link_text: "Learn How",
        title: "Roles & Permission",
      },
    ],
  },
  features3: {
    slogan: "None",
    title: "None",
    data: [
      {
        cover: {
          url: "https://cdn.apito.io/media/apito_website/Q1P2JTKSCZ_file_storage.png",
        },
        description: {
          markdown:
            "Stop worrying about hosting your media files elsewhere. Graphqli also comes with Upload API Support",
        },
        header: "FILE STORAGE",
        icon: {
          url: "https://cdn.apito.io/media/apito_website/8XRYHC4LBQ_auth_module.svg",
        },
        link: "/docs/build-api-quick-start-guide",
        link_text: "Host Your Files",
        title: "Media & File Storage",
      },
      /*            {
                      "cover": {
                          "url": "https://cdn.apito.io/media/apito_website/2544KY1LXF_auth_module.png"
                      },
                      "description": {
                          "markdown": "Enable One click JWT based authentication support to your API"
                      },
                      "header": "API AUTHENTICATION",
                      "icon": {
                          "url": "https://cdn.apito.io/media/apito_website/8XRYHC4LBQ_auth_module.svg"
                      },
                      "link": "/docs/extensions/auth/auth-support-in-api",
                      "link_text": "See How its Done",
                      "title": "Add Authentication Support to your API"
                  },*/
      {
        cover: {
          url: "https://cdn.apito.io/media/shikho_website_v2_8ma77/D6730XFK62_add_team_member.png",
        },
        description: {
          markdown:
            "Invite your Team members and Collaborate on your content publishing with different access roles & permissions",
        },
        header: "TEAMS",
        icon: {
          url: "https://cdn.apito.io/media/apito_website/8XRYHC4LBQ_auth_module.svg",
        },
        link: "/docs/extensions/auth/auth-support-in-api",
        link_text: "See How its Done",
        title: "Teams & Collaboration",
      },
    ],
  },
  databases: {
    header: "CONNECT EASILY",
    title: "Connect with Most Popular Databases",
    data: [
      { id: 1, title: "PostgresSQL", logo: postgresSQL },
      { id: 2, title: "SQL Server", logo: SQLServer },
      { id: 3, title: "MySQL", logo: mySQL },
      { id: 4, title: "MariaDB", logo: mariaDB },
      { id: 5, title: "ArangoDB", logo: arangoDB },
      { id: 6, title: "MongoDB", logo: mongoDB },
      { id: 7, title: "Firestore", logo: firestore },
      { id: 8, title: "DynamoDB", logo: dynamoDB },
      { id: 9, title: "Couchbase", logo: couchbase },
      { id: 10, title: "Casandra", logo: casandra },
      { id: 11, title: "CouchDB", logo: couchDB },
      { id: 12, title: "Oracle", logo: oracle },
    ],
  },
};
