This is a Vue.js application to test/demo the following:

- External/packaged component system with a single export file
- EventBus
- Composition API

## External/packaged component system

In the past, when we used `rorodata-components`, the setup was classical: you had to get the folder into your project and then access the components individually by mentioning their entire path.

Ex: `import ShapingRulesModal from '../../rorodata-components/components/ShapingRulesModal.vue`

Going the `npm` way had issues because there was no singular export file back then.

In order to make things simpler and more re-usable as a package, we can put the new business components being designed (along with their dependencies as far as permissible) in their own NPM Registry or Github Package Registry. This will help us immensely in importing components selectively like this:

Eg: `import { ComponentA, ComponentB } from 'github/algoshelf-components`

And they can be imported into any supported project.

Another advantage of this approach is that once you install the components globally (via `import AlgoComps from 'github/algoshelf-compoents` + `Vue.use(AlgoComps)`), there is no need to import them individually. Pages can be become as simple as this:

```vue
<template>
  <div>
    <ComponentA>
    <ComponentB>
    <ComponentC>
  </div>
</template>
```

(no script required, no import/exports etc)

## EventBus

Having store-like dependency in a component library is an anti-pattern because we'd end up coupling application-specific ideas/nomenclatures into the component system (although this is permissible given our definition of business components).

However, there are some pitfalls.

- With a store-state-dependent component, a component will auto-update when the state changes even when that is not necessarily intended.
- There will be issues if a composing application fails to import and initialize the store (as the app wont be reactive to changes in a component to propagate to others)

Using custom events is also not feasible given that we will always have to write pre-composed components when we want to put some components together and make them interactive.

A simple use-case like a page (PageA) which shows a chart (ChartA) and an editable table (TableA) is an oft-repeated piece of code. (Assume both TableA and ChartA rely on the same data resource.) The current way is to treat PageA also as a component and use custom event emitters (or props passed from PageA to ChartA) from TableA to trigger an update in ChartA.

In the interest of reducing / removing the need for PageA to have the code to connect its children, we use Vue's EventBus. It's a very simple way of triggering an update in ChartA when TableA mutates underlying data, without the need for either of them OR a parent container to do anything like emit or handle component-specific events.

**The discipline required is to define and document the events and these are specific/coupled to the components themselves.**

## Composition API

The demo relies almost entirely on Vue's Composition API (part of Vue 3.x). Through this test/demo, I want to advocate for adoption of Vue Composition API (which is a subset of Vue 3.x, but is ready to use in projects).

Besides the oft-cited logical composition benefits that the API offers, it plays very well with our component architecture to enable us to write code faster (by removing the need/overhead of starting everything as options).
