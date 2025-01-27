<template>
  <div class="container">
<div class="col">


<div class="info-product">
  <div class="title-h2 center">Товари для Грумінгу</div>
<PaginationPageWithCard />
  </div>
  <hr class="hr"/>

  <div class="info-category">
     <!-- Доданий контент про грумінг -->
     <div class="additional-info">
      <!-- Блок про вибір послуг грумінгу -->
      <div class="info-section">
        <h2 class="title-h2 center mb-50">ГРУМІНГ</h2>
        <h3 class="info-title">Як вибрати послуги грумінгу для собаки?</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://plus.unsplash.com/premium_photo-1678697845292-5277d0b0d63f?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Грумінг для собак" />
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
            <img src="https://plus.unsplash.com/premium_photo-1675881733564-a9fb4e223ffe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Домашній грумінг" />
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
            <img src="https://plus.unsplash.com/premium_photo-1678697845182-6dee32a1c30b?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Цікаві факти про грумінг" />
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
   <hr class="hr"/>
</div>
</div>
</template>

<script setup>
import PaginationPageWithCard from './PaginationPageWithCard.vue';
</script>

<style lang="sass" scoped>
$primary: #FF9F0E
.col
  flex-direction: column

.container
  padding-top: 50px
  padding-bottom: 50px

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
