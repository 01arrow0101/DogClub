<template>
 <div  class="sort">
        <div class="col">
          <div class="title-h3 center">Сортування:</div>
          <div class="col category center">
            <AppButton class=" filter" :class="dataBaseStore.activeTab === 'stars' ? 'btn active-tab' : ''" @click="dataBaseStore.sortBy('stars')">
              <span>Популярність</span>
            </AppButton>
            <AppButton class="" :class="dataBaseStore.activeTab === 'discount' ? 'btn active-tab' : ''" @click="dataBaseStore.sortBy('discount')">
              <span>За знижкою</span>
            </AppButton>
            <AppButton class="" :class="dataBaseStore.activeTab === 'price' ? 'btn active-tab' : ''" @click="dataBaseStore.sortBy('price')">
              <span>Спочатку дорожче</span>
            </AppButton>
            <AppButton class="" :class="dataBaseStore.activeTab === 'title' ? 'btn active-tab' : ''" @click="dataBaseStore.sortByName('title')">
              <span>По імені</span>
            </AppButton>
            <AppButton class="" :class="dataBaseStore.activeTab === 'new' ? 'btn active-tab' : ''" @click="dataBaseStore.sortBy('new')">
              <span>Спершу нові</span>
            </AppButton>
          </div>
        </div>
      </div>
</template>

<script setup>
import { useDataBaseStore } from '@/stores/dataBaseStore';
import AppButton from '@/components/Button/AppButton.vue';

const dataBaseStore = useDataBaseStore()

</script>
<style lang="sass" scoped>
.sort
  position: fixed
  bottom: 0
  left: 0
  background: #000
  height: 50vh
  z-index: 9999
  width: 100%
  padding: 16px
  &:hover
    bottom: 0
    transition: bottom 1s ease
.col
  display: flex
  flex-direction: column
  gap: 8px

</style>
