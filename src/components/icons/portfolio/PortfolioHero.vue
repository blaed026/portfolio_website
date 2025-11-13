<script setup>
const props = defineProps({
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="hero">
    <img :src="props.thumbnail" />
    <div class="opaque-footer">{{ props.title }}</div>
  </div>
</template>

<style scoped>
.hero {
  border: 1px solid #112336;

  border-radius: 15px;
  min-height: 200px;
  width: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;

  &:hover {
    background-color: black;
    opacity: 0.8;
  }



  .opaque-footer {
    background-color: #112336;
    padding: 16px;
    text-transform: uppercase;
    border-radius: 0 0 15px 15px;
    color: white;

    /* &:hover {
    //  color: white;
    //  background-color: #375f8a;
     } */

    }
  }
</style>
