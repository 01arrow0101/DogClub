<template>
  <div class="container">

    <!-- Доданий контент про харчування -->
    <div class="additional-info">
      <!-- Блок про вибір корму -->
      <div class="info-section">
        <h2 class="title-h2 center mb-50">ХАРЧУВАННЯ</h2>
        <h3 class="info-title">Як вибрати корм для собаки?</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://plus.unsplash.com/premium_photo-1726761692986-6bcde87fc2b8?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Корм для собак" />
          </div>
          <div class="info-content">
            <p class="info-text">
              Вибір корму для собаки — це важливий крок для її здоров'я. Ось кілька порад:
            </p>
            <ul class="info-list">
              <li><strong>Вік собаки:</strong> Вибирайте корм, який відповідає віку вашої собаки (цуценя, доросла, літня).</li>
              <li><strong>Розмір собаки:</strong> Великі та малі породи потребують різного корму.</li>
              <li><strong>Активність:</strong> Якщо ваша собака дуже активна, оберіть корм з високим вмістом білків.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Блок про натуральне харчування -->
      <div class="info-section">
        <h3 class="info-title">Натуральне харчування для собак</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://plus.unsplash.com/premium_photo-1683141107194-61e40e327e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Натуральне харчування" />
          </div>
          <div class="info-content">
            <p class="info-text">
              Натуральне харчування — це чудовий спосіб забезпечити собаці всі необхідні поживні речовини. Ось кілька порад:
            </p>
            <ul class="info-list">
              <li><strong>М'ясо:</strong> Використовуйте якісне м'ясо, наприклад, курку, яловичину або індичку.</li>
              <li><strong>Овочі:</strong> Додавайте до раціону моркву, кабачки та інші овочі.</li>
              <li><strong>Крупи:</strong> Використовуйте рис або гречку як джерело вуглеводів.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Блок про цікаві факти -->
      <div class="info-section">
        <h3 class="info-title">Цікаві факти про харчування собак</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://plus.unsplash.com/premium_photo-1693265319299-357de02f0a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Цікаві факти про харчування" />
          </div>
          <div class="info-content">
            <ul class="info-list">
              <li>Собаки можуть їсти деякі фрукти та овочі, наприклад, яблука та моркву.</li>
              <li>Шоколад є токсичним для собак, тому його слід уникати.</li>
              <li>Деякі породи собак потребують спеціального дієтичного харчування через схильність до алергій.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col mb">
      <div class="title-h2 center">Товари для Харчування
        {{  }}
      </div>
      <div v-if="tabIsShow" class="sort">
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
    </div>

    <!-- Відображення карток -->
    <div v-if="paginatedItems.length !== 0" class="grid">
      <Card v-for="item in paginatedItems" :key="item.id" :item="item" />
    </div>
    <div v-else>
      <p>Немає доступних послуг.</p>
    </div>

  <!-- Пагінація -->
  <div v-if="tabIsShow" class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Попередня</button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Наступна</button>
  </div>

  </div>
</template>

<script setup>
import { useDataBaseStore } from '/src/stores/dataBaseStore'
import Card from './Card.vue'
import AppButton from '@/components/Button/AppButton.vue';
import { ref, computed } from 'vue';

const dataBaseStore = useDataBaseStore()

const currentPage = ref(1)
const itemsPerPage = 8

defineProps({
  tabIsShow: {
    type: Boolean,
    default: true
  }
})

// Обчислювана властивість для відображення об'єктів на поточній сторінці
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return dataBaseStore.filterCards.slice(start, end);
});

// Обчислювана властивість для загальної кількості сторінок
const totalPages = computed(() => {
  return Math.ceil(dataBaseStore.filterCards.length / itemsPerPage);
});

// Перехід на попередню сторінку
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Перехід на наступну сторінку
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Перехід на конкретну сторінку
const goToPage = (page) => {
  currentPage.value = page;
};

</script>


<style lang="sass" scoped>
$primary: #FF9F0E
/* Ваші стилі залишаються незмінними */
.container
  padding-top: 72px
  padding-bottom: 88px

.col
  gap: 16px

.row
  justify-content: space-between
  align-items: center

.container .row.mb
  @media (max-width: 768px)
    flex-direction: column
    justify-content: flex-start

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

.mb
  margin-bottom: 72px

.title-h2,
.title-h3
  color: $primary
  margin: 0

.title-h2
  @media (max-width: 768px)
    margin-bottom: 16px
    font-size: 2rem
    line-height: 40px
    text-align: start

.title-h3
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

/* Стилі для додаткового контенту */
.additional-info
  margin-top: 48px

.info-section
  margin-bottom: 48px

.info-title
  color: $primary
  font-size: 24px
  margin-bottom: 16px

.info-text
  font-size: 16px
  line-height: 1.6
  margin-bottom: 16px

.info-list
  list-style-type: disc
  padding-left: 24px
  margin-bottom: 24px

.info-list li
  font-size: 16px
  line-height: 1.6
  margin-bottom: 8px

.info-list li strong
  color: $primary

.info-block
  display: flex
  gap: 24px
  align-items: center
  @media (max-width: 768px)
    flex-direction: column

.info-image
  flex: 1
  max-width: 400px
  img
    width: 100%
    border-radius: 8px
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)

.info-content
  flex: 2
</style>

