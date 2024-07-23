<script setup>
import { defineProps } from 'vue';
import PayPalForm from './PayPalForm.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String,
    required: true
  }, description: {
    type: String,
    required: true
  }, payPalFormProps: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div style="border-radius: 3vh; padding: 3vh 3vh 3vh 0; margin: 0; background-color: #444; display: flex; flex-direction: row; justify-content: space-between;">
      
    <img :src="imgSrc" :alt="imgAlt" style="border-radius: 1vh; width: auto; height: 50vh; margin: 3vh 0vh 3vh 3vh;" />
      <div style="width: 40vw;">
          <p style="font-size: 1.45em; margin: 2vh 0 0 3vh;" >{{ title }}</p>
          <p style="margin: 0 0 0 3vh">{{ price }}</p>
          <p style="margin: 0 0 0 3vh">{{ description }}</p>
      </div>
      <payPalForm style="align-self: center;" v-bind="payPalFormProps"/>
  </div>
</template>