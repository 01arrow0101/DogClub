<template>
  <div class="container">
    <GoToBack/>
<div class="info-product">
  <div class="title-h2 center">Товари для Купання </div>
  <PaginationPageWithCard />
</div>
<hr class="hr"/>
<div class="info-category">
  <div class="additional-info">
      <!-- Блок про купання -->
      <div class="info-section">
        <h2 class="title-h2 center mb-50">КУПАННЯ</h2>
        <h3 class="info-title">Як правильно купати собаку?</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://plus.unsplash.com/premium_photo-1664303025616-a8f3b7114e10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Купання собаки" />
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
            <img src="https://images.unsplash.com/photo-1647002380358-fc70ed2f04e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Шампунь для собак" />
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
            <img src="https://images.unsplash.com/photo-1686928124138-a69b398dd657?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Сушка собаки" />
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
            <img src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Цікаві факти про купання" />
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
    <!-- Доданий контент про купання -->
<hr class="hr"/>
  </div>
</template>

<script setup>
import PaginationPageWithCard from './PaginationPageWithCard.vue';
import GoToBack from '@/components/Button/GoToBack.vue';
</script>

<style lang="sass" scoped>
$primary: #FF9F0E
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
