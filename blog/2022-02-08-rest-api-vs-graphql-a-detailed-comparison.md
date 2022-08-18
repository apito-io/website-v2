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

---

Let's discuss what's what throughout the post

---

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