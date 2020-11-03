<template>
  <div class="border-b">
    <div class="flex justify-between items-center p-4">
      <div class="text-gray-600 text-lg font-bold">Blogging in Nuxt.js!</div>
      <nav>
        <n-link to="/" class="text-blue-600 hover:text-blue-500 mr-4">
          Home
        </n-link>
        <n-link to="/blog" class="text-blue-600 hover:text-blue-500">
          Blog
        </n-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {}
</script>

<style></style>
