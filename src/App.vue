<template>
  <div id="app">
    <section>
      <h2>Using Component "Club" imported individually on the page.</h2>
      <div class="bordered">
        <Club />
      </div>
    </section>

    <!-- <hr /> -->

    <section>
      <h2>
        Using two components without importing them because they have been
        installed globally
      </h2>
      <div class="bordered">
        <CompA />
        <hr />
        <CompB />
      </div>
    </section>
  </div>
</template>

<script>
import { Club } from "algo-components-test";
export default {
  name: "app",
  components: { Club }
};
</script>
<style lang="sass" scoped>
#app
  font-family: sans-serif
section
  margin-bottom: 50px;
  h2
    font-size: 18px
    font-weight: bold
    margin-bottom: 15px
.bordered
  border-radius: 3px
  border: 1px solid rgba(0,0,0,0.1)
  padding: 15px
</style>
