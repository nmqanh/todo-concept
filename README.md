#  ToDo-Concept

> ToDo-Concept is a fork from a `React` version of [TodoMVC](http://todomvc.com) project. It was rebuilt to reflect the brand of Concept Patterns, a glass optimisation and software service.
> Live demo: [https://todo-concept.netlify.com](https://todo-concept.netlify.com)

## Responses for Tasks

1. Task 1 - Forked react version from [TodoMVC](http://todomvc.com): **Finished**.
2. Task 2 - Style this app to represent the Concept patterns brand: **Finished** as described in the following screenshot
![ToDo Concept brand changes](/img/todo-concept-changes.png)
3. Task 3 - Update timestamp when a Todo Item is saved: **Finished** as shown in the following screenshot
![Update timestamp when a todo item is saved](/img/todo-concept-timestamp.png)

## Development

1. Make sure your Environment is ready!
  * Install `Node 6.12.3` or above.
2. Install needed libraries

        npm install
3. Run the dev server

        npm start

Now you should be access the app on local via [http://localhost:3000](http://localhost:3000)

## Deployment

I am using Netlify - a cloud service for hosting static website to deploy.

1. Just create an account on [Netlify](https://www.netlify.com)
2. Install netlify cli tool

        npm install netlify-cli -g

3. Follow the guides of `netlify` and deploy finally in a single command

        netlify deploy
