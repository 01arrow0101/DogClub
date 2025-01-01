<template>
  <div class="container">
    <div class="row mb">
      <div class="title-h2">Nutrition</div>
      <div class="sort">
        <div class="row">
          <div class="title-h3">Sorting:</div>
          <div class="category">
            <button 
              @click="sortItems('stars', 'desc')" 
              :class="{ active: activeSort === 'stars_desc' }"
            >
              Popularity
            </button>
            <button 
              @click="sortItems('price', 'asc')" 
              :class="{ active: activeSort === 'price_asc' }"
            >
              Cheaper first
            </button>
            <button 
              @click="sortItems('discount', 'desc')" 
              :class="{ active: activeSort === 'discount_desc' }"
            >
              More expensive first
            </button>
            <button 
              @click="sortItems('title', 'asc')" 
              :class="{ active: activeSort === 'title_asc' }"
            >
              By name
            </button>
            <button 
              @click="sortItems('new', 'desc')" 
              :class="{ active: activeSort === 'new_desc' }"
            >
              New ones first
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading" class="loading">
      <div class="loader"></div>
    </div>
    <div v-else-if="items.length" class="grid">
      <Card v-for="item in items" :key="item.id" :item="item" />
    </div>
    <div v-else>
      <p>No items found.</p>
    </div>
    <div v-if="totalPages >= 1" class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button 
        v-for="page in visiblePages" 
        :key="page" 
        @click="goToPage(page)" 
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { db } from '../firebase'
import { query, collection, getDocs, orderBy, startAfter, limit } from 'firebase/firestore'
import Card from './Card.vue'

const items = ref([])
const loading = ref(true)
const activeSort = ref('stars_desc')
const currentPage = ref(1)
const itemsPerPage = 8
const lastVisible = ref(null)
const totalPages = ref(1)

async function fetchItems(field, direction, startAfterDoc = null) {
  try {
    loading.value = true
    const q = query(
      collection(db, 'Nutrition'),
      orderBy(field, direction),
      startAfter(startAfterDoc),
      limit(itemsPerPage)
    )
    const querySnap = await getDocs(q)
    items.value = querySnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    lastVisible.value = querySnap.docs[querySnap.docs.length - 1]
    totalPages.value = Math.ceil(querySnap.size / itemsPerPage)
    console.log('Fetched items:', items.value)
  } catch (error) {
    console.error("Error fetching items: ", error)
  } finally {
    loading.value = false
  }
}

async function getItemProduct(field) {
  await fetchItems(field)
}

async function sortItems(field, direction = 'asc') {
  try {
    loading.value = true
    const q = query(
      collection(db, 'Nutrition'),
      orderBy(field, direction),
      limit(itemsPerPage)
    )
    const querySnap = await getDocs(q)
    items.value = querySnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    lastVisible.value = querySnap.docs[querySnap.docs.length - 1]
    totalPages.value = Math.ceil(querySnap.size / itemsPerPage)
    activeSort.value = `${field}_${direction}`
    currentPage.value = 1
    console.log('Sorted items:', items.value)
  } catch (error) {
    console.error("Error sorting items: ", error)
  } finally {
    loading.value = false
  }
}

async function nextPage() {
  if (currentPage.value >= totalPages.value) return
  try {
    loading.value = true
    const [field, direction] = activeSort.value.split('_')
    const q = query(
      collection(db, 'Nutrition'),
      orderBy(field, direction),
      startAfter(lastVisible.value),
      limit(itemsPerPage)
    )
    const querySnap = await getDocs(q)
    items.value = querySnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    lastVisible.value = querySnap.docs[querySnap.docs.length - 1]
    currentPage.value++
    console.log('Next page items:', items.value)
  } catch (error) {
    console.error("Error fetching next page: ", error)
  } finally {
    loading.value = false
  }
}

async function prevPage() {
  if (currentPage.value <= 1) return
  try {
    loading.value = true
    const [field, direction] = activeSort.value.split('_')
    const q = query(
      collection(db, 'Nutrition'),
      orderBy(field, direction),
      limit(itemsPerPage)
    )
    const querySnap = await getDocs(q)
    items.value = querySnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    lastVisible.value = querySnap.docs[querySnap.docs.length - 1]
    currentPage.value--
    console.log('Previous page items:', items.value)
  } catch (error) {
    console.error("Error fetching previous page: ", error)
  } finally {
    loading.value = false
  }
}

async function goToPage(page) {
  if (page === currentPage.value) return
  try {
    loading.value = true
    const [field, direction] = activeSort.value.split('_')
    const q = query(
      collection(db, 'Nutrition'),
      orderBy(field, direction),
      limit(itemsPerPage)
    )
    const querySnap = await getDocs(q)
    items.value = querySnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    lastVisible.value = querySnap.docs[querySnap.docs.length - 1]
    currentPage.value = page
    console.log('Go to page items:', items.value)
  } catch (error) {
    console.error("Error fetching page: ", error)
  } finally {
    loading.value = false
  }
}

const visiblePages = computed(() => {
  const pages = []
  const maxVisiblePages = 5
  const startPage = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2))
  const endPage = Math.min(totalPages.value, startPage + maxVisiblePages - 1)
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  return pages
})

onMounted(() => {
  getItemProduct('stars')
})
</script>

<style lang="sass" scoped>
$primary: #FF9F0E

.container
  padding-top: 72px
  padding-bottom: 88px

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
  @media (max-width:768px)
    margin-bottom: 16px
    font-size: 2rem
    line-height: 40px
    text-align: start
.title-h3
  margin-right: 16px

.loading
  display: flex
  justify-content: center
  align-items: center
  height: 200px

.loader
  border: 16px solid #f3f3f3
  border-top: 16px solid #FF9F0E
  border-radius: 50%
  width: 120px
  height: 120px
  animation: spin 2s linear infinite

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

.category button
  padding: 8px 16px
  margin-right: 8px
  border: 1px solid #ccc
  border-radius: 4px
  background-color: #fff
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
</style>
