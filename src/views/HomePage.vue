<script setup>
import TakingCare from '@/components/TakingCare/TakingCare.vue'
import LessTalk from '../components/LessTalk/LessTalk.vue'
import Services from '../components/Services/Services.vue'
import Customer from '../components/Customer/Customer.vue'
import AppForma from '../components/Forma/AppForma.vue'
</script>

<template>
  <main>
    <TakingCare />
    <LessTalk />
    <Services :is-show="true"/>
    <Customer />
    <AppForma/>
  </main>
</template>
