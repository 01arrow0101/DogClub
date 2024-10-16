<script setup>
import { defineAsyncComponent } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: false,
  },
  folder:{
    type: String,
    required: true
  }
});

const icon = defineAsyncComponent(
  () => import(`${props.folder}/${props.name}.svg`),
);
</script>
<template>
  <component :class="className" :is="icon" />
</template>