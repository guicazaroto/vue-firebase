<script setup>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import { useFirebaseAuth } from 'vuefire';
const auth = useFirebaseAuth()

const form = ref({
  email: '',
  password: ''
})

function login(e) {
  signInWithEmailAndPassword(auth, form.value.email, form.value.password)
    .then((userCredential) => {
      const user = userCredential.user  
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })
}

</script>

<template>
  <v-form @submit.prevent="login">
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >

          <v-text-field
            v-model="form.email"
            :counter="10"
            label="Email"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
        >

          <v-text-field
            v-model="form.password"
            :counter="10"
            label="Password"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <v-btn
            type="submit"
            color="primary"
          >
          
            Login
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
