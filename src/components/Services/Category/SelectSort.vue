<template>
  <div class="category">
    <button
      @click="sortItems('stars', 'desc')"
      :class="{ active: activeSort === 'stars_desc' }"
    >
      Popularity
    </button>
    <button
      @click="sortItems('price', 'asc')"
      :class="{ active: activeSort === 'price_asc' }"
    >
      Cheaper first
    </button>
    <button
      @click="sortItems('discount', 'desc')"
      :class="{ active: activeSort === 'discount_desc' }"
    >
      More expensive first
    </button>
    <button
      @click="sortItems('title', 'asc')"
      :class="{ active: activeSort === 'title_asc' }"
    >
      By name
    </button>
    <button
      @click="sortItems('new', 'desc')"
      :class="{ active: activeSort === 'new_desc' }"
    >
      New ones first
    </button>
  </div>
</template>

<script setup>

</script>

<style lang="sass" scoped></style>
