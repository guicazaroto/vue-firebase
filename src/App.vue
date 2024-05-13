<template>
  <v-layout>
      <v-btn variant="plain">
        <RouterLink to="/">Home</RouterLink>
      </v-btn>

      <v-btn variant="plain">
        <RouterLink to="/add">Add</RouterLink>
      </v-btn>
  </v-layout>
  <main>
    <RouterView :key="$route.path" />
  </main>
</template>

