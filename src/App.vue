<template>
  <div id="app">
    <div class="container">
      <steps></steps>
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
