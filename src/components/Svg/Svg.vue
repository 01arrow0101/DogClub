<script setup>
import { computed } from "vue";

// Завантажуємо всі SVG-файли з папки "assets/icons"
const icons = import.meta.glob("@/assets/img/**/*.svg", { eager: true });

const props = defineProps({
  name: { type: String, required: true },
  className: { type: String, required: false },
  folder: { type: String, required: true }
});

// Формуємо коректний шлях до SVG
const icon = computed(() => {
  const path = `${props.folder}/${props.name}.svg`;
  console.log("Шлях до іконки:", path); // Дебаг-лог

  return icons[path]?.default || null;
});
</script>

<template>
  <component v-if="icon" :is="icon" :class="className" />
  <span v-else class="icon-error">⚠️ Іконка не знайдена</span>
</template>
