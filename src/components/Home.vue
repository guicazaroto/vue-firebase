<script setup lang="ts">
import { query, collection, getDocs, DocumentData } from 'firebase/firestore'
import { ref } from 'vue';
import { useFirestore } from 'vuefire'

const coffeeCollection = ref([]) as  DocumentData
const db = useFirestore()
const q = query(collection(db, 'cafes'))
const querySnapShot = await getDocs(q)

querySnapShot.forEach((doc) => {
  coffeeCollection.value.push(doc.data())
})
 
</script>

<template>
  <v-card
    class="mx-auto my-8"
    elevation="16"
    max-width="344"
    v-for="coffee in coffeeCollection"
  >
    <v-card-item >
      <v-card-title>
        {{ coffee.name }}
      </v-card-title>

      <v-card-subtitle>
        R$ {{ coffee.price }}
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      {{  coffee.description }}
    </v-card-text>
  </v-card>
</template>

<style scoped>
</style>
