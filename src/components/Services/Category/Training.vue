<template>
  <div class="container">
    <div class="info-product">
  <div class="title-h2 center">Товари для Тренування</div>
  <PaginationPageWithCard />
</div>
<hr class="hr"/>
 <div class="info-category">
     <!-- Доданий контент про тренування -->
     <div class="additional-info">
      <!-- Блок про базові команди -->
      <div class="info-section">
        <h2 class="title-h2 center mb-50">ТРЕНУВАННЯ</h2>
        <h3 class="info-title title-he">Базові команди для тренування</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://plus.unsplash.com/premium_photo-1686523495615-efc5c49318a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRyYWluaW5nJTIwZm9yJTIwZG9nfGVufDB8fDB8fHww" alt="Тренування собаки" />
          </div>
          <div class="info-content">
            <p class="info-text">
              Тренування собаки починається з базових команд. Ось кілька порад:
            </p>
            <ul class="info-list">
              <li><strong>Команда "Сиди":</strong> Навчіть собаку сидіти за допомогою ласощів та похвали.</li>
              <li><strong>Команда "Лежи":</strong> Використовуйте ручні жести, щоб навчити собаку лягати.</li>
              <li><strong>Команда "До мене":</strong> Навчіть собаку підходити до вас за командою.</li>
              <li><strong>Команда "Стій":</strong> Ця команда допомагає зупинити собаку в небезпечних ситуаціях.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Блок про ігри для тренування -->
      <div class="info-section">
        <h3 class="info-title title-h3">Ігри для тренування</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://images.unsplash.com/photo-1508948956644-0017e845d797?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0" alt="Ігри для собак" />
          </div>
          <div class="info-content">
            <p class="info-text">
              Ігри — це чудовий спосіб зробити тренування цікавим для собаки. Ось кілька ідей:
            </p>
            <ul class="info-list">
              <li><strong>Прятки:</strong> Ховайтеся від собаки та навчіть її знаходити вас.</li>
              <li><strong>Апорт:</strong> Навчіть собаку приносити м'яч або інші іграшки.</li>
              <li><strong>Перетягування канату:</strong> Ця гра допомагає розвинути силу та координацію.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Блок про цікаві факти -->
      <div class="info-section">
        <h3 class="info-title title-h3">Цікаві факти про тренування собак</h3>
        <div class="info-block">
          <div class="info-image">
            <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Цікаві факти про тренування" />
          </div>
          <div class="info-content">
            <ul class="info-list">
              <li>Собаки краще засвоюють команди, якщо тренування проходять у формі гри.</li>
              <li>Регулярні тренування допомагають зменшити стрес у собак.</li>
              <li>Деякі породи собак, наприклад, бордер-колі, вважаються найрозумнішими і легко піддаються тренуванню.</li>
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
