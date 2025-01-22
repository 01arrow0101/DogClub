<template>
  <div class="container">
    <div class="col mb">
      <div class="title-h2 center">Товари для Купання</div>
      <div v-if="tabIsShow" class="sort">
        <div class="col">
          <div class="title-h3 center">Сортування:</div>
          <div class="category center">
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

    <!-- Доданий контент про купання -->
    <div class="additional-info">
      <!-- Блок про купання -->
      <div class="info-section">
        <h2 class="title-h2 center mb-50">КУПАННЯ</h2>
        <h3 class="info-title">Як правильно купати собаку?</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Купання собаки" />
          </div>
          <div class="info-content">
            <p class="info-text">
              Купання собаки — це важлива частина догляду за вашим улюбленцем. Ось кілька порад:
            </p>
            <ul class="info-list">
              <li><strong>Частота купання:</strong> Купайте собаку 1 раз на 1-2 місяці. Частіше купання може змивати природний жировий шар шкіри.</li>
              <li><strong>Температура води:</strong> Використовуйте теплу воду (близько 37°C). Перевірте температуру рукою — вона має бути комфортною для вас.</li>
              <li><strong>Шампунь:</strong> Використовуйте спеціальний шампунь для собак. Наприклад, для собак з чутливою шкірою або для певного типу шерсті.</li>
              <li><strong>Техніка купання:</strong>
                <ul>
                  <li>Змочіть шерсть собаки водою, уникаючи потрапляння води у вуха.</li>
                  <li>Нанесіть шампунь, розподіліть його по всій шерсті, масажуючи шкіру. Це допоможе зняти бруд і поліпшити кровообіг.</li>
                  <li>Ретельно змийте шампунь, щоб уникнути залишків, які можуть викликати свербіж.</li>
                </ul>
              </li>
              <li><strong>Сушка:</strong> Використовуйте м'яке рушник або фен на низькій температурі. Не забудьте висушити шерсть між пальцями лап.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Блок про вибір шампуню -->
      <div class="info-section">
        <h3 class="info-title">Як вибрати шампунь для собаки?</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Шампунь для собак" />
          </div>
          <div class="info-content">
            <p class="info-text">
              Вибір шампуню для собаки — це важливий крок для здоров'я шкіри та шерсті. Ось кілька порад:
            </p>
            <ul class="info-list">
              <li><strong>Тип шерсті:</strong> Вибирайте шампуні, які підходять для типу шерсті вашої собаки (коротка, довга, кучерява).</li>
              <li><strong>Чутлива шкіра:</strong> Якщо у вашої собаки чутлива шкіра, використовуйте гіпоалергенні шампуні.</li>
              <li><strong>Проти бліх та кліщів:</strong> Використовуйте спеціальні шампуні для захисту від паразитів.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Блок про сушку -->
      <div class="info-section">
        <h3 class="info-title">Як правильно сушити собаку?</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Сушка собаки" />
          </div>
          <div class="info-content">
            <p class="info-text">
              Правильна сушка собаки після купання допомагає уникнути грибкових інфекцій та інших проблем зі шкірою. Ось кілька порад:
            </p>
            <ul class="info-list">
              <li><strong>М'яке рушник:</strong> Використовуйте м'яке рушник, щоб висушити шерсть.</li>
              <li><strong>Фен на низькій температурі:</strong> Якщо використовуєте фен, встановіть низьку температуру, щоб уникнути опіків.</li>
              <li><strong>Вичісування:</strong> Після сушки вичесайте шерсть, щоб запобігти сплутуванню.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Блок про цікаві факти -->
      <div class="info-section">
        <h3 class="info-title">Цікаві факти про купання собак</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Цікаві факти про купання" />
          </div>
          <div class="info-content">
            <ul class="info-list">
              <li>Деякі породи собак, наприклад, лабрадори, обожнюють воду і купання!</li>
              <li>Собаки з густою шерстю, як хаскі, потребують особливого догляду під час купання.</li>
              <li>Правильне купання може допомогти зменшити випадання шерсті.</li>
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
