<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="">
    <!-- Rating state start -->

    How did we do?

    Please let us know how we did with your support request. All feedback is appreciated
    to help us improve our offering!

    1 2 3 4 5

    Submit

    <!-- Rating state end -->

    <!-- Thank you state start -->

    You selected <!-- Add rating here --> out of 5

    Thank you!

    We appreciate you taking the time to give a rating. If you ever need more support,
    don’t hesitate to get in touch!

    <!-- Thank you state end -->


    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Your Name Here</a>.
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
