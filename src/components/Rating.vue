<template>
  <div class="w-[345px] py-10 px-8 m-auto bg-my-dark-blue/50 rounded-xl" >

    <!-- Rating state -->
    <div v-if="!submit.state">
      <div>
        <img src="../../images/icon-star.svg" alt="svg image of a star" class="bg-my-medium-gray/10 rounded-full p-3 mb-5">
      </div>
      <h2 class="py-2 text-2xl text-my-white">How did we do?</h2>

      <p class="text-sm">Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!</p>

      <ul class="w-full flex flex-row justify-between py-6">
        <li @click="selectFeedback(1)" class="bg-my-medium-gray/10 hover:bg-my-medium-gray" :class="{'bg-my-orange hover:bg-my-orange/80 text-white' : faq_items[1]}">1</li>
        <li @click="selectFeedback(2)" class="bg-my-medium-gray/10 hover:bg-my-medium-gray" :class="{'bg-my-orange hover:bg-my-orange/80 text-white' : faq_items[2]}">2</li>
        <li @click="selectFeedback(3)" class="bg-my-medium-gray/10 hover:bg-my-medium-gray" :class="{'bg-my-orange hover:bg-my-orange/80 text-white' : faq_items[3]}">3</li>
        <li @click="selectFeedback(4)" class="bg-my-medium-gray/10 hover:bg-my-medium-gray" :class="{'bg-my-orange hover:bg-my-orange/80 text-white' : faq_items[4]}">4</li>
        <li @click="selectFeedback(5)" class="bg-my-medium-gray/10 hover:bg-my-medium-gray" :class="{'bg-my-orange hover:bg-my-orange/80 text-white' : faq_items[5]}">5</li>
      </ul>

      <button class="w-full bg-my-orange hover:bg-my-white text-my-white hover:text-my-orange rounded-full py-3.5 text-sm " @click="submitFeedback">S U B M I T</button>
    </div>

    <!-- Thank you state -->
    <div v-if="submit.state === true" class="text-center">
      <img src="../../images/illustration-thank-you.svg" alt=""  class="mx-auto mt-4"/>
      <span class="bg-my-medium-gray/10 rounded-full px-3 py-2 text-sm text-my-orange mt-8 inline-block">You selected
        <span v-for="(item, key) in faq_items">
          <span v-if="item === true">
            {{ key }}
          </span>
        </span>
      out of 5</span>
      <h2 class="text-2xl text-white mt-6">Thank you!</h2>
      <p class="mt-4 text-sm">We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>
    </div>
  </div>

</template>

<script setup lang="ts">
import {reactive} from "vue";
  let faq_items = reactive([false, false, false, false, false])


  // register click and call selectFeedback
  function selectFeedback(value: number) {

    for (let x:number = 0; x < Object.keys(faq_items).length; x++){
      // check if faq item is set to true
      if (faq_items[x] === true) {
        faq_items[x] = false
      }
    }
    // set clicked feedback value to true
    faq_items[value] = true
  }

  let submit = reactive({
    state: false
  })

  function submitFeedback(){
    for (let x = 0; x < Object.keys(faq_items).length; x++){
      // check if faq item is set to true
      if (faq_items[x] === true) {
        submit.state = true
      }
    }
  }
</script>

<style scoped>
  div {
    @apply text-my-light-gray
  }
  li {
    @apply px-5 py-3 cursor-pointer text-sm rounded-full
  }
</style>