<template>
  <v-form @submit.prevent="postCoffee">
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="form.name"
            :counter="10"
            label="Name"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
        <v-text-field
            v-model="form.price"
            :counter="10"
            label="Price"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <v-text-field
            v-model="form.location"
            label="Location"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <v-textarea 
            label="Description" 
            v-model="form.description"
          >
          </v-textarea>
        </v-col>

        <v-col
          cols="12"
        >
          <input type="checkbox" v-model="form.favorite" id="favorite">
          <label class="ml-2" for="favorite">Favorite</label>
        </v-col>

        <v-col
          cols="12"

      >
        <v-btn
          color="primary"
          type="submit"
        >
          Submit
        </v-btn>
    </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  price: '',
  location: '',
  description: '',
  favorite: false
})

function postCoffee(e) {
  console.log(form.value)
}

</script>