# Components
## This folder is logically speaking on the same layer as lib. Where the module specific UI are builds

As you may have imagined, here we can place the components that make up our pages. Furthermore, these components are highly tied to the domain and are not supposed to be highly reusable across projects.

The business-logic side of things, such as queries, or functions that mutate data, are all imported from lib so that they can be reusable across components.

For example, the component CreateEventForm knows about the domain and uses a mutation to create an event.


rsc: https://giancarlobuomprisco.com/next/a-scalable-nextjs-project-structure