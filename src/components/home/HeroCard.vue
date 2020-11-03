<template>
  <div class="px-8 md:px-0">
    <div class="bg-gray-200 rounded-lg p-8 shadow-lg">
      <h1
        class="text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-gray-700 text-center"
      >
        Nuxt Blog: Static Site Using Modern Tech
      </h1>

      <div class="flex flex-col md:flex-row justify-around items-center mb-8">
        <div class="text-lg text-center mb-4">
          <p class="mb-4">Jump into creating your personalised blog.</p>
          <p>Initial configuration handled for you.</p>
        </div>
        <div class="mx-auto md:mx-0">
          <a
            href="https://github.com/joshuafsharp/nuxt-static-blog"
            target="_blank"
            class="github-fork-btn flex items-center px-4 py-2 rounded"
          >
            <img src="~/assets/images/github.svg" class="h-6" />
            <span class="font-bold ml-2">Fork the repo</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HeroCard extends Vue {}
</script>

<style>
.github-fork-btn {
  border: 1px solid #d5d5d5;
  background-color: #eee;
  background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);
}

.github-fork-btn:hover {
  background: #ddd;
}
</style>
