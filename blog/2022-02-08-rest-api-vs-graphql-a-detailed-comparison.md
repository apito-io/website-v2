---
slug: rest-api-vs-graphql-a-detailed-comparison
title: REST API vs GraphQL | Why not Both!
tags: [fahim]
---

Recently GraphQL is becoming the buzzword in the developer community. Although building a GraphQL server was very 
difficult in the past, nowadays with overall community support and developer tools, I can say it's rather very 
easy to build one than to build an old-fashioned Rest API.

When it comes to choosing which protocol to choose for your next project, nowadays people often get confused between 
Rest API & GraphQL, I say, don't get confused and it depends. There are many aspects where using GraphQL is 
overkill and many cases where GraphQL will thrive over REST API. Let's discuss what's what throughout the post

<!-- truncate -->

---

Let's discuss what's what throughout the post

---
# On Using Both!

Apito Console generates both GraphQL & RESTful apis from the model you specify. Both rest & graphql has their own pros and cons.
there is no general rules on if you are using graphql then you cant use rest api in your application! One example here where both is
usable is the use of media. if your app has a media/file uploader then graphql is not build to handle multi-part data. In that case
you can use graphql for content and rest api for file/media upload.

Thx to Apito you have the power of both. Use accordingly.

# Working with REST APIs

The endpoint, HTTP method, header, and body make up a REST request with An endpoint includes a 
URI (Uniform Resource Identifier), which aids in online resource identification.

The type of request made to the server is described by an HTTP method. As follows:

* `GET` reads a representation of the source that is supplied.
* `POST` Creates a new resource.
* `PUT` replaces or updates all the collection's resources.
* `PATCH` changes the resource.
* `DELETE` is used to remove a resource.

A RESTful API employs HTTP methods to carry out CRUD (Create, Read, Update, and Delete) processes 
while interacting with data. In order to facilitate caching, AB testing, authentication, and other processes, 
headers offer information to clients and servers.

The body houses data that a client wishes to transmit to a server, such the request's payload.

# What is GraphQL?

Simply, A GraphQL is used to answer queries with already-existing data. 
GraphQL is an open-source data query and manipulation language for APIs. 
GraphQL is mostly maintained and developed by the GraphQL Foundation and has been used 
widely across many industries and use cases by businesses like Twitter, Expedia, Shopify, and Github,
to mention a few.

# Advantages of GraphQL APIs

Let's go through some of the fundamental benefits that make GraphQL unique.

## Data Fetching, Filtering and Queries

Overfetching and Underfetching are two of REST's most frequent default limitations. 
This occurs as a result of a client's dependence on endpoints that only deliver fixed data 
sets in order to download data. It's incredibly challenging to create an API that can 
provide users the precise data they want.

Overfetching means getting more information than you need. For example, if the endpoint holds data 
on a user employed at a company, you’d hit the `/profile` endpoint in case of a RESTApi, and instead of only 
getting the names that you’re interested in, you will get everything that endpoint has to 
offer - including age, pictures, address, and lots of personal information etc which you might now need.
With GraphQL, you’d simply need to dictate what you want in a query:

```graphql
{
  profile {
      name
      avatar {
          url
      }
  }
}
```

You would receive a predictable dataset to work with based on what you asked since your response wouldn't 
contain any more data that the endpoint might be able to offer.

# Typed Schema and Type Safety

A highly typed system is used by GraphQL to specify an API's capabilities. The GraphQL Schema Definition Language (SDL) and/or 
code-first are used to create a schema that lists all the types that are available in an API.

Now that the GraphQL API is typed, frontend teams can work with it with confidence, knowing that if the backend team 
makes any changes to the API's architecture, they will receive immediate feedback when querying it from the frontend.

The code for queries and modifications may be generated automatically from your codebase's GraphQL query files using 
well-known tools like the GraphQL Code Generator. As a result, development is sped up and production faults are avoided.

# Faster Product Development

When using REST APIs, it's usual practice organizing the endpoints into groups based on the views that are present in 
your app (for instance, `/author`, `/books`, `/orders`, etc.). This is convenient as it enables the client to obtain all necessary 
data for a certain view by only contacting the associated endpoint.

This method has the downside of not allowing for quick iterations. There is a chance that the amount of data needed will 
increase (or decrease) depending on the UI update being made.

In order to accommodate those additional data requirements, the backend must also be modified, which is counterproductive 
and slows down the product development process.

With GraphQL's flexibility without requiring additional server effort. Clients may declare their specific data needs, 
thus there is no need to modify the backend when the design or data requirements on the frontend change.

# Schema Stitching

The capability of stitching schemas is a significant differentiator. To make numerous schemas accessible to the client, 
GraphQL may merge them into a single schema. For instance, combining the Burgers API and Nutrition API schemas by 
combining the information from several sources about a certain menu item's nutrition information.

```graphql
{
  books(
      where: { name: "harry"}
  )
  # from Menu endpoint
  title 
  description 
  price 
  # from Recommendation endpoint
  similar {
      books {
          id
          title
      }
  }
  # from Order endpoint
  inStock
}
```

# GraphQL vs. REST

The primary distinction between GraphQL and REST APIs is that the former is an architectural framework for network-based applications, 
while the latter is a query language standard.

Strongly typed GraphQL is ideal for reducing development time since it interacts with code generation tools, 
is self-documenting based on schema types and descriptions, and is strongly typed.

In very basic terms, the ordering of hamburgers can help us understand one of the most well-known distinctions: the 
variations in expected answers to inquiry. Although the GraphQL burger meme has been around for a while, the explanation it 
offers still makes the fundamentals easy to understand.

```
https://api.com/cheeseburger/
```

You may "have it your way" using GraphQL by expressing how you want that cheeseburger to be made. You may now order a cheeseburger 
(reaction) without a bottom bun, with a bun on top, a patty, pickle, onion, and cheese (unless you're vegan).

```graphql
query getCheeseburger ($vegan: Boolean) {
  cheeseburger {
    bun
    patty
    pickle
    onion
    cheese @skip(if: $vegan)
  }
}
```

Your GraphQL answer is formatted and scaled precisely as you specify. Nothing more, nothing less, and nothing different about your 
response from what you asked for or desired.

# Conclusion

For network-based applications, a REST API is a "architectural notion." On the other side, GraphQL is a query language and 
collection of tools that work with just one endpoint. Additionally, during the past several years, REST has been utilized to 
create new APIs, whereas GraphQL has been primarily focused on performance and flexibility optimization.

You would most likely receive whole "datasets" as a response while utilizing REST. You would need to make `x` REST API queries 
in order to get information from `x` objects. Your inquiries may take the following form if you're looking for product details 
for a menu website:

Request menu for burger names, descriptions, ingredients, etc. in one request in another Request prices for prices pertaining to 
that menu and in another request images for menu shots from another dataset... and so on

In contrast, if you wanted to gather data from a particular endpoint, you couldn't restrict the fields that the REST API returned 
since, when used without further parameters, it always overfetches the whole data set.

The request may be tailored to exactly what you need, from many objects down to individual fields inside each entity, 
using GraphQL's query language. GraphQL would require the x endpoint, and it can do a lot with that data, but you must first 
specify your goals for it.

The request would be limited to getting the same endpoint's menuItem, menuIngredients, menuImage, and menuPrice in a single 
request, using the same example. The database's other material wouldn't be returned

Similar to the earlier burger analogy, GraphQL allows you to customize the cheeseburger you receive through REST to include 
exactly the amount of your choice of toppings.

Choosing GraphQL over REST or in conjunction with it is a very individualized choice that is greatly impacted by the use-case. 
It's crucial to remember that GraphQL is neither a substitute for REST nor an alternative. Here are some crucial distinctions 
to assist make that choice easier:


| GraphQL      | REST |
| ----------- | ----------- |
| A query language for solving common problems when integrating APIs      | An architectural style largely viewed as a conventional standard for designing APIs       |
| Deployed over HTTP using a single endpoint that provides the full capabilities of the exposed service   | Deployed over a set of URLs where each of them exposes a single resource |
| Client-driven architecture   | Server-driven architecture        |
| Uses caching automatically   | Lacks in-built caching mechanism        |
| Better API versioning System   | Complicated API version Support        |
| Response supports only JSON   | XML, JSON, and YAML        |
| Offers type-safety and auto-generated documentation   | Doesn't offer type-safety or auto-generated documentation        |
| Allows for schema stitching and remote data fetching   | Simplifying work with multiple endpoints requires expensive custom middleware        |
| Build in Validation based on Schema   | No Build In Validation        |
| Single Endpoint   | Multiple Endpoints        |
