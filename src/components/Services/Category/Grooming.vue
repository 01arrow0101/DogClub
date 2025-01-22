<template>
  <div class="container">
    <div class="col mb">
      <div class="title-h2 center">Товари для Грумінгу</div>
      <div v-if="tabIsShow" class="sort">
        <div class="col">
          <div class="title-h3 center">Сортування:</div>
          <div class="category center col">
            <AppButton class="btn filter" :class="dataBaseStore.activeTab === 'stars' ? 'btn active-tab' : ''" @click="dataBaseStore.sortBy('stars')">
              <span>Популярність</span>
            </AppButton>
            <AppButton class="btn" :class="dataBaseStore.activeTab === 'discount' ? 'btn active-tab' : ''" @click="dataBaseStore.sortBy('discount')">
              <span>Спочатку дешевше</span>
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
    <div v-if="dataBaseStore.filterCards.length !== 0" class="grid">
      <Card v-for="item in dataBaseStore.filterCards" :key="item.id" :item="item" />
    </div>
    <div v-else>
      <p>Немає доступних послуг.</p>
    </div>
    <div v-if="tabIsShow" class="pagination">
      <button>Попередня</button>
      <button>1</button>
      <button>Наступна</button>
    </div>

    <!-- Доданий контент про грумінг -->
    <div class="additional-info">
      <!-- Блок про вибір послуг грумінгу -->
      <div class="info-section">
        <h2 class="title-h2 center mb-50">ГРУМІНГ</h2>
        <h3 class="info-title">Як вибрати послуги грумінгу для собаки?</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Грумінг для собак" />
          </div>
          <div class="info-content">
            <p class="info-text">
              Грумінг — це важлива частина догляду за собакою. Ось кілька порад:
            </p>
            <ul class="info-list">
              <li><strong>Тип шерсті:</strong> Вибирайте послуги, які відповідають типу шерсті вашої собаки (коротка, довга, кучерява).</li>
              <li><strong>Частота:</strong> Регулярний грумінг допомагає підтримувати здоров'я шерсті та шкіри.</li>
              <li><strong>Професіоналізм:</strong> Оберіть кваліфікованого грумера, який має досвід роботи з вашою породою.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Блок про домашній грумінг -->
      <div class="info-section">
        <h3 class="info-title">Домашній грумінг для собак</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Домашній грумінг" />
          </div>
          <div class="info-content">
            <p class="info-text">
              Домашній грумінг — це зручний спосіб догляду за собакою. Ось кілька порад:
            </p>
            <ul class="info-list">
              <li><strong>Чистка шерсті:</strong> Використовуйте спеціальні щітки для видалення мертвої шерсті.</li>
              <li><strong>Купання:</strong> Використовуйте шампуні, які підходять для типу шерсті вашої собаки.</li>
              <li><strong>Стрижка кігтів:</strong> Регулярно підрізайте кігті, щоб уникнути проблем з ходьбою.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Блок про цікаві факти -->
      <div class="info-section">
        <h3 class="info-title">Цікаві факти про грумінг собак</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Цікаві факти про грумінг" />
          </div>
          <div class="info-content">
            <ul class="info-list">
              <li>Регулярний грумінг допомагає зменшити кількість шерсті в домі.</li>
              <li>Деякі породи собак потребують професійного грумінгу кожні 4-6 тижнів.</li>
              <li>Грумінг також включає чистку вух та зубів, що важливо для здоров'я собаки.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataBaseStore } from '/src/stores/dataBaseStore'
import Card from './Card.vue'
import AppButton from '@/components/Button/AppButton.vue';

const dataBaseStore = useDataBaseStore()

defineProps({
  tabIsShow: {
    type: Boolean,
    default: true
  }
})
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
