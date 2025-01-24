<template>
    <div  class="sort">
        <div class="col">
          <div class="title-h3 center">Сортування:</div>
          <div class="category center">
            <AppButton class="btn filter" :class="dataBaseStore.activeTab === 'stars' ? 'btn active-tab' : ''" @click="dataBaseStore.sortBy('stars')">
              <span>Популярність</span>
            </AppButton>
            <AppButton class="btn" :class="dataBaseStore.activeTab === 'discount' ? 'btn active-tab' : ''" @click="dataBaseStore.sortBy('discount')">
              <span>За знижкою</span>
            </AppButton>
            <AppButton class="btn" :class="dataBaseStore.activeTab === 'price' ? 'btn active-tab' : ''" @click="dataBaseStore.sortBy('price')">
              <span>Спочатку дорожче</span>
            </AppButton>
            <AppButton class="btn" :class="dataBaseStore.activeTab === 'title' ? 'btn active-tab' : ''" @click="dataBaseStore.sortByName('title')">
              <span>По імені</span>
            </AppButton>
            <AppButton class="btn" :class="dataBaseStore.activeTab === 'new' ? 'btn active-tab' : ''" @click="dataBaseStore.sortBy('new')">
              <span>Спершу нові</span>
            </AppButton>
          </div>
        </div>
      </div>

    <!-- Відображення карток -->
    <div v-if="modelStore.paginatedItems.length !== 0" class="grid">
      <Card v-for="item in modelStore.paginatedItems" :key="item.id" :item="item" />
    </div>
    <div v-else>
      <p>Немає доступних послуг.</p>
    </div>

  <!-- Пагінація -->
  <div v-if="tabIsShow" class="pagination">
      <button @click="modelStore.prevPage" :disabled="modelStore.currentPage === 1">Попередня</button>
      <button
        v-for="page in modelStore.totalPages"
        :key="page"
        @click="modelStore.goToPage(page)"
        :class="{ active: modelStore.currentPage === page }"
      >
        {{ page }}
      </button>
      <button @click="modelStore.nextPage" :disabled="modelStore.currentPage === modelStore.totalPages">Наступна</button>
  </div>
</template>

<script setup>
import { useDataBaseStore } from '/src/stores/dataBaseStore'
import { useModuleStore } from '@/stores/modulesStore';
import Card from './Card.vue'
import AppButton from '@/components/Button/AppButton.vue';

const dataBaseStore = useDataBaseStore()
const modelStore = useModuleStore()

defineProps({
  tabIsShow: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="sass" scoped>
$primary: #FF9F0E
.col
  gap: 16px

.title-h3
  color: $primary
  margin-bottom: 8px
  font-size: 22px
  font-weight: 600

.category button
  padding: 8px 16px
  margin-right: 8px
  border: 1px solid transparent
  border-radius: 4px
  cursor: pointer

.category button.active
  background-color: $primary
  color: #fff
  border-color: $primary


.grid
  position: relative
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: repeat(auto, 1fr)
  justify-items: center
  gap: 32px
  @media (max-width: 768px)
    grid-template-columns: repeat(2, 1fr)
  @media (max-width: 480px)
    grid-template-columns: repeat(1, 1fr)

.sort
  margin-bottom: 50px

.pagination
  display: flex
  justify-content: center
  margin-top: 24px

.pagination button
  padding: 8px 16px
  margin-right: 8px
  border: 1px solid #ccc
  border-radius: 4px
  background-color: #fff
  cursor: pointer

.pagination button.active
  background-color: $primary
  color: #fff
  border-color: $primary

.pagination button:disabled
  background-color: #f3f3f3
  color: #ccc
  cursor: not-allowed
</style>

