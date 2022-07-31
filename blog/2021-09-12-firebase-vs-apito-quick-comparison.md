---
slug: firebase-vs-apito-quick-comparison
title: Firebase vs Apito a Quick Comparison
tags: [fahim]
---
Internet is filled with tons of articles and tutorials that talk about building production-ready and scalable apps 
for both web and mobile. Developers often time get caught up trying to apply the same principle or guide but often time 
they ended up "re-inventing the wheel" Apito and Firebase both come with Backend as a Service (BaaS) APIs that help 
you develop your application faster. A key component of any BaaS is instant APIs over a database 

- once you define your database schema, you should get data APIs instantly.
  
## Comparing Apples to Applesauce

Apito and Firebase both offer APIs over a database while both of them provide this solution on top of a proprietary 
database. We use nn optimized version of RocksDB. Soon Apito will be able to connect to several popular choices of 
databases including PostgreSQL, MySQL, Mariadb, Mongodb & ArangoDB. That is a topic of another discussion.

Firebase was originally designed exclusively as a realtime database. If your project does not need a real-time database 
then using it is exteamly difficult for modern application development. 

Let me tell you why, 

Querying & Filtering your data is very difficult with Firebase, wherewith Apito you can execute bulk queries with complex 
filters ( even geospatial queries ) Also, Once an application is in production, you will need to write complex queries, 
especially for the purpose of Analytics or Business Intelligence. With Firebase, you are restricted to basic CRUD queries.
This is okay for rapid prototyping but does not lend itself to a production app.

### Database Design, Migration & Content Management

This is probably one of the biggest gripes power users have with Firebase. On Firebase, you can only change data from
the client-side. This means you have to write a script to perform a schema evolution (which is error-prone and 
risky if not performed in a transaction, or in sets of transactions) or handle the schema evolution in the app code 
itself! 

But on the other hand, On Apito, Migration happens instantly once you modify your model and publish it. This is similar
to the natural developer workflow of taking changes in dev and then applying them in staging/production environments.

### Data modeling

Thanks to Apito's Versatile Model Builder, it supports various fields to model and structures your project, 
for example, Single Line Text Field, Date Field, Number Field, Fields within Fields ( Array of Object) and 
the Most important feature is the relation between models ( One-to-One, One-to-Many, Many-to-Many )
It is harder to model relationships between independent data models with Firebase's proprietary database 
(originally a realtime database). If you made a mistake early on in your modelling, migrating and changing 
to a new data model is hard.

### Role based Permissions

Firebase permissions can only capture rules based on the data within the current 'path' (node). 

On Apito, you can specify granular permissions based on roles. That can be attatched to any API endpoints & models. 
[Read more here.](/docs/console/adding-rbac-role-based-permissions-support-to-your-api)

### A Back-end for SaaS Apps

Firebase is a well-known backend-as-a-service. It has a ton of useful features that can all be tuned and tweaked to power
the back-end of a SaaS application. That said, they've made a much larger effort to be the cloud back-end for mobile apps.
As a developer building SaaS, you can configure Firebase services to suit your requirements, but it's always going to 
be extra work. With Apito, that's pretty different. 8base designed its platform to best accommodate SaaS apps from day
one; with a GraphQL API for any web-client, or mobile, to consume. This naturally makes it ideal for developers 
looking for a backend-as-a-service on any SaaS project. Why? Because things like authorization, multi-tenancy, 
user administration, and a relational schema builder are all native to the platform.

## To summarize our points, Apito has many advantages including

* Easy Learning Curve
* Versatile Database Modeling
* Robust Content Management System
* Complex Query & Filtering
* Role based Permissions
* Build In Support for Multilingual Content
* Instant GraphQL & REST API Endpoints
* Webhooks
* Authentication Module
* Cloud Functions
  
![Apito vs Firebase Comparison](https://cdn.apito.io/media/apito_documentation/XJUZG5CEW9_Apito_Vs_Firebase.png)

### GraphQL or RESTful API? Why not Both?

Today, almost all apps are data-driven. Making sure a developer has access to the data they need when they need it, and 
as they need it, is super important. For the past decade, REST has been the API standard. While the world has benefited 
hugely from REST, it has some limitations. GraphQL, on the other hand, comes with some huge advantages when compared 
to REST. A single endpoint can support any query or mutation (a.k.a. update). 

Queries get defined on the client-side, meaning no more endpoint updates done by backend developers.
Queries only return data that the developer wants.
Out of the box, Firebase lets users build REST endpoints. You can set up a GraphQL engine on Firebase, but it takes a lot of time and a lot of know-how.

### Role-Based Security

Meanwhile, as everyone is out there building the sleekest, and most straightforward user interface that enchants
the pants off users, app security is too often being overlooked. That's why Firebase and Apito have security built 
directly into their products. Firebase offers the ability to set up role-based security using custom functions that 
get stored as rules. Every rule is then validated against each API requests. 

The developer can define all their custom authentication logic. Apito built role-based security directly into its 
platform, and expose that to developers through a configurable interface. It makes adding permissions and roles for 
specific actions on specific tables and fields super straight forward. It also supports role-based scoping of records 
using custom filters. Pretty much, if developers follow either platform's documentation around how to set up 
authorization, they won't have to worry about security. It's just up to them how long they want to take to get there.

### Conclusion

There are millions of developers in the world, each with their nuanced preferences to specific stacks and tools. 
In the greater software ecosystem, 1000s of tools and services exist to help support developers in building amazing 
apps. Of all the tools, services, frameworks, platforms, and specifications, only a few stand out. 

Apito gives developers a back-end they need when building modern apps, the way that they would have wanted to build it themselves.
By configuring dozens of clutch back-end resources and offering them as a production-ready platform, you can easily write
your project-specific business logic with cloud function Knowing the whole time that security, scalability, database management, 
and the like are future proof.

A developer is going to come across both Apito and Firebase when researching backend-as-a-service platforms. Both
platforms are going to offer them similar features that are backed by different implementations. That said, the experience
that the developer has when using either platform is the real acid test.