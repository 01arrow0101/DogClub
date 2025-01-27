<template>
  <div class="container">
<div class="info-product">
  <div class="title-h2 center">Товари для Харчування</div>
  <PaginationPageWithCard />
</div>
<hr class="hr"/>

<div class="info-category">
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
</div>
<hr class="hr"/>
  </div>
</template>

<script setup>
import PaginationPageWithCard from './PaginationPageWithCard.vue';
</script>

<style lang="sass" scoped>
$primary: #FF9F0E
.container
  position: relative
  padding-top: 72px
  padding-bottom: 88px

.additional-info
  margin-top: 48px

.info-section
  margin-bottom: 48px
.title-h2
  color: $primary
  @media (max-width: 768px)
    margin-bottom: 16px
    font-size: 2rem
    line-height: 40px
    text-align: start
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
  font-weight: 700
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

