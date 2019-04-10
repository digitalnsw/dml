<template>
  <div id="app">
    <div class="container">
      <steps></steps>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Steps from "./views/Steps.vue"

export default {
  name: "app",
  components: {
    Steps
  },
  data() {
    return {
    }
  }
}
</script>
