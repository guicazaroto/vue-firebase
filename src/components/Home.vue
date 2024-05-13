<template>
  <v-container>
    <v-row>
      <v-col
        v-if="coffeeCollection.length"
        v-for="coffee in coffeeCollection"      
        :key="coffee.id"
        cols="12"
        sm="4"
      >
      <v-card
        class="mx-auto my-8"
        elevation="16"
      >
        <v-card-item>
          <v-card-title>
            {{ coffee.name }}
          </v-card-title>

              <v-img
              height="200px"
              src="https://picsum.photos/200"
              cover
            ></v-img>

          <v-card-subtitle>
            {{ convertToBrlCurrency(coffee.price) }}
          </v-card-subtitle>
        </v-card-item>
        <v-card-text>
          {{  coffee.description }}
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {  collection,  DocumentData } from 'firebase/firestore'
import { useCollection, useFirestore } from 'vuefire'

const db = useFirestore()
const coffeeCollection = useCollection(collection(db, 'cafes')) as  DocumentData

// original firebase code

//const coffeeCollection = ref([]) as  DocumentData
// const q = query(collection(db, 'cafes'))
// const querySnapShot = await getDocs(q)

// onSnapshot(q, (snapshot) => {
//   coffeeCollection.value = []
//   snapshot.forEach((doc) => {
//     coffeeCollection.value.push(doc.data())
//   })
// })

// querySnapShot.forEach((doc) => {
//   coffeeCollection.value.push(doc.data())
// })


function convertToBrlCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
</script>

