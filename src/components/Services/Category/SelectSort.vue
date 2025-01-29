<template>
  <transition name="slide-fade">
    <div v-if="dataBaseStore.showSort" class="sort">
      <div class="col">
        <div class="col category center">
          <AppButton
            class="filter"
            :class="dataBaseStore.activeTab === 'stars' ? 'btn active-tab' : ''"
            @click="sortBy('stars')"
          >
            <span>Популярність</span>
          </AppButton>
          <AppButton
            class=""
            :class="dataBaseStore.activeTab === 'discount' ? 'btn active-tab' : ''"
            @click="sortBy('discount')"
          >
            <span>За знижкою</span>
          </AppButton>
          <AppButton
            class=""
            :class="dataBaseStore.activeTab === 'price' ? 'btn active-tab' : ''"
            @click="sortBy('price')"
          >
            <span>Спочатку дорожче</span>
          </AppButton>
          <AppButton
            class=""
            :class="dataBaseStore.activeTab === 'title' ? 'btn active-tab' : ''"
            @click="sortByName('title')"
          >
            <span>По імені</span>
          </AppButton>
          <AppButton
            class=""
            :class="dataBaseStore.activeTab === 'new' ? 'btn active-tab' : ''"
            @click="sortBy('new')"
          >
            <span>Спершу нові</span>
          </AppButton>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useDataBaseStore } from '@/stores/dataBaseStore';
import AppButton from '@/components/Button/AppButton.vue';

const dataBaseStore = useDataBaseStore();

const sortBy = (arg) => {
  dataBaseStore.showSort = false;
  dataBaseStore.sortBy(arg);
};

const sortByName = (title) => {
  dataBaseStore.showSort = false;
  dataBaseStore.sortByName(title);
};
</script>

<style lang="sass" scoped>
$primary: #FF9F0E

.slide-fade-enter-active,
.slide-fade-leave-active
  transition: all 0.5s ease

.slide-fade-enter-from,
.slide-fade-leave-to
  transform: translateY(100%)
  opacity: 0

.sort
  position: fixed
  bottom: -50px
  left: 0
  background: rgba(255, 255, 255, 100%)
  backdrop-filter: blur(10px)
  height: 50vh
  z-index: 1
  width: 100%
  height: 340px
  padding: 16px
  border-radius: 32px 32px 0 0
  border: 8px solid #FF9F0E
  border-bottom: none

.col
  display: flex
  flex-direction: column
  gap: 8px

.btn
  background: transparent
  color: $primary
  font-weight: 700

.btn span
  font-weight: 700
</style>
