---
slug: build-free-graphql-api-for-your-next-project
title: How to build Free GraphQL Api for your Next Project
tags: [fahim]
---

If you ever need a GraphQL API for your next project or trying to explore how GraphQL API works
then Apito is a perfect place for you. You can create free GraphQL Api in Apito Easily.

![Todo GraphQL Api](https://cdn.apito.io/media/apito_documentation/3VQ28W29B7_Apito_Console___Todo_GraphQL_Api.png)

## First, Create your project

Once you logged in to `Apito Console` you will a Project Space like below. You can use this space to switch between your projects or create a new one.
Click on the `Start a new Project` button to initialize your project creation.

![Apito Console](https://cdn.apito.io/media/apito_documentation/MU3X8AXROW_Apito_Console___Empty_Project_Space.png)

### Using a Project Template (Optional)

You can jump start your project with a project template. Data and models will be prefilled on those templates based on your selection.
You can also start fresh by selecting an `EMPTY PROJECT`. But for this project we will select a project tempalte called `Todo Note`

![Apito Create a Project](https://cdn.apito.io/media/apito_documentation/DJU053J2LY_Apito_Console___New_Project_Template.png)

### Fill Up Your Project Details

In this step, Enter your `Project Name` and description and click and On Database option select `Apito Cloud` option to create your project faster.

:::info
Apito Cloud is a managed database and free of charge. If you select other options, then you have to provide your own credentials.
:::

![Create A New Project](https://cdn.apito.io/media/shikho_website_v2_8ma77/9I060CE7YK_Apito_Console___New_Todo_Project.png)

Congratulation! your project is being build. Once it’s done you can click
`Explore new project` to switch to your newly created project.

## 2. Add Models


Click on the Models Tab in the top navigation menu. Then from the left side bar, click on Add a model button.
Now, write down the name of the model, in our case it will be product. Now click on the create button.

![Database Model Creation](https://cdn.apito.io/media/apito_documentation/OUHYWT8VH4_Create_Model.png)

Next, we will add few fields to our newly created product model.

### Fields

To add fields to a model click on the Add a Field button. First, we will add a title field of
type text and we will set the attribute of the title to required. Then, a description field of type, Rich Text.
An Image field of type, Media. A Price field of type, Number. And last but not least a Rating field of type, Number.
Now let’s create another model named Category and add few fields in it. Those fields will be name, label and icons.
Apito model & field builder is very versatile you can use it to design complex and nested model structure.

### Relations

Next, we will create relations between them. For that you need to click on the
Add Field Button and then select Relations. Your relation creation between models depends on your project requirements.

![Database Relations](https://cdn.apito.io/media/apito_documentation/G7NHVB7U6I_Add_Fields.png)

For now, let’s say, Product has many categories and categories has many products. Wow, as you can see, how easy it is to create entity relations between models in apito.
Also, you can rename, delete and create fields & relations anytime you want. Now, that our database design of product and category model with relation is created,
we are ready to insert some contents.

## 3. Explore Both GraphQL & REST API

Our Application API is ready. To explore our API lets goto the `API` from the top of the navigation menu.
You will be able to see two tabs. 
* GraphiQL Explorer
* Swagger (REST)

If you are looking only for GraphQL api then dont worry. RESTapi is a bonus.
Use it only if you want to.

Go to the GraphiQL Explorer and Let’s run our first query. We will now `Find all the task with 'INPROGRESS' status`. Now click Run and as you can see its filtering the result
form the content. Now your is ready for integration.

![Todo GraphQL Api](https://cdn.apito.io/media/apito_documentation/3VQ28W29B7_Apito_Console___Todo_GraphQL_Api.png)

You can also use REST API if you project requires it. Apito Generates a Swagger Documentation which is compatible with OpenAPI.

![Todo Note Swagger Rest API](https://cdn.apito.io/media/shikho_website_v2_8ma77/6ZCJOZBIW9_Apito_Console___Todo_Note_REST_Api.png)
