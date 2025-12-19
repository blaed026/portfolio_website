<script setup>
const props = defineProps({
  thumbnail: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="hero">
    <img :src="'../src/assets/' + props.thumbnail" />
    <div class="opaque-footer">
      <div class="title">{{ props.title }}</div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  border: 1px solid #112336;
  border-radius: 15px;
  overflow: hidden;
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
    font-size: 20px;
    color: white;
    display: flex;
    justify-content: space-between;

    a {
      color: white;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
}
</style>
