import TypedTerminalComponent from "../components/typed-terminal";
import React from "react";

export const HomePageData = {
    header: {
        title: "Build, Scale & Ship APIs Faster",
        images: [
            "https://cdn.apito.io/media/shikho_website_v2_8ma77/30RCY24Q15_Apito_Console___Model.png",
            "https://cdn.apito.io/media/shikho_website_v2_8ma77/1ZGH5QE8U5_Apito_Console___Content.png",
            "https://cdn.apito.io/media/shikho_website_v2_8ma77/IN1TXKJPX5_Apito_Console___API.png",
        ],
        description:
            "An API builder with Serverless Functions to Empower your API Development Cycle to Ship Software Faster",
        button: {
            label: "Install Apito CLI",
            link: "/docs/build-api-quick-start-guide",
        },
    },
    features1: {
        slogan: "None",
        title: "None",
        data: [
            {
                component: <TypedTerminalComponent/>,
                description: {
                    markdown:
                        "Create, Mange and Deploy projects in your localhost using apito cli from your local environment to the cloud.",
                },
                header: "DEVELOP IN LOCALHOST",
                icon: "icon-park:terminal",
                link: "/docs/model/database-design",
                link_text: "Learn How",
                title: "Localhost to Cloud in Minutes",
            },
            {
                cover: {
                    url: "https://cdn.apito.io/media/apito_website/FX9FK3SLJ5_database_model.png",
                },
                description: {
                    markdown:
                        "Content Modeling has never been easier. Model your database with fields & relations",
                },
                header: "DATABASE",
                icon: "flat-color-icons:accept-database",
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
                icon: "logos:graphql",
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
                icon: "flat-color-icons:document",
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
                icon: "icon-park:permissions",
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
                        "Stop worrying about hosting your media files elsewhere. Apito also comes with Upload API Support",
                },
                header: "FILE STORAGE",
                icon: "flat-color-icons:gallery",
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
                icon: "openmoji:persons-hugging",
                link: "/docs/extensions/auth/auth-support-in-api",
                link_text: "See How its Done",
                title: "Teams & Collaboration",
            },
        ],
    },

    testimonials: [
        {
            data: {
                avatar: {
                    path: "/img/testimonial/shahir-chowdhury.jpeg"
                },
                name: "Shahir Chowdhury",
                role: "Founder of Shikho",
                quote: {
                    text: "Shikho needed a quick solution to host its content quickly and we looked into so many headless cms and none was as simple to use as apito."
                },
                rating: 5,
                title: "Exactly What We Needed",
                twitter_id: "@shahir__c"
            },
            id: 1
        },
        {
            data: {
                avatar: {
                    path: "/img/testimonial/tareq-redq.jpeg"
                },
                name: "Tareq Jobayere",
                role: 'Founder of RedQ.io',
                quote: {
                    text: "Each and Every theme and templates we build we need some place to host our content and Apito was the perfect and easy choice for us."
                },
                rating: 4,
                title: "The Missing Headless CMS in the Market",
                twitter_id: "@tareqjobayere"
            },
            id: 2
        },
        {
            data: {
                avatar: {
                    path: "/img/testimonial/naseef-fatemi-deliveryhobe.jpeg"
                },
                name: "Naseef Fatemi",
                role: "Entrepreneur",
                quote: {
                    text: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer."
                },
                rating: 4,
                title: "WYSIWYG Api Builder for me",
                twitter_id: "@NFatemi"
            },
            id: 3
        },
        {
            data: {
                avatar: {
                    path: "/img/testimonial/tarek-apu-shohoz.png"
                },
                name: "Tarek Mahmud Apu",
                role: "Solution Architect",
                quote: {
                    text: "Apito is a great tool for building APIs. It's easy to use and the documentation is very helpful. I would recommend it to anyone looking to build APIs quickly and easily."
                },
                rating: 4,
                title: "Great Tool for Building APIs",
                twitter_id: "@null"
            },
            id: 4
        },
        {
            data: {
                avatar: {
                    path: "/img/testimonial/kaushik-ambani.png"
                },
                name: "Koushik Ambani",
                role: "App Developer",
                quote: {
                    text: "Our team was looking for a api builder that could be extensible. Apito was the perfect choice because it supports aws lambda functions to write logic."
                },
                rating: 5,
                title: "Able to Launch My App In Time",
                twitter_id: "@rikoushik"
            },
            id: 5,
        },
        {
            data: {
                avatar: {
                    path: "/img/testimonial/raiku.png"
                },
                name: "Koushik Ambani",
                role: "App Developer",
                quote: {
                    text: "Tried many headless cms but none of them supports logic handling like aws lambda. Apito is the best api builder for frontend developers"
                },
                rating: 5,
                title: "Best API Builder For Frontend Developers",
                twitter_id: "@rikoushik"
            },
            id: 6,
        },
    ]
};
