<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

const { error } = defineProps<{ error: NuxtError }>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <v-app>
    <v-container class="fill-height" fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <v-card elevation="2" class="pa-6 text-center">
            <v-icon size="x-large" color="error" class="mb-4"
              >mdi-alert-circle</v-icon
            >

            <h1 class="text-h3 mb-2">{{ error.statusCode }}</h1>
            <p class="text-body-1 mb-6">
              {{ error.message || 'An error occurred' }}
            </p>
            <v-btn color="primary" @click="handleError">Go back home</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
