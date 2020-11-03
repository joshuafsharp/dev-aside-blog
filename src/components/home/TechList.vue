<template>
  <div>
    <!-- <p class="text-center mb-4">Starting template uses the following tech:</p> -->

    <h2 class="text-2xl text-gray-700 font-bold text-center mb-8">
      &#65293; Technology &#65293;
    </h2>

    <ul class="flex flex-wrap justify-center -mx-4">
      <li
        v-for="(tech, index) in techStack"
        :key="index"
        class="p-4 w-full md:w-1/2 lg:w-1/3"
      >
        <a
          :href="tech.href"
          target="_blank"
          class="flex items-center bg-gray-200 hover:bg-gray-300 rounded-lg shadow-inner p-4 transition-colors duration-200"
        >
          <div
            class="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-8 shadow-inner"
          >
            <img :src="tech.iconSrc" class="h-8 w-auto" />
          </div>
          <span class="text-lg text-gray-600 font-bold">{{ tech.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TechList extends Vue {
  get techStack() {
    return [
      {
        href: 'https://nuxtjs.org',
        name: 'Nuxt.js',
        iconSrc: require('~/assets/images/nuxt.png'),
      },
      {
        href: 'https://content.nuxtjs.org/',
        name: 'Nuxt Content',
        iconSrc: require('~/assets/images/nuxt-content.svg'),
      },
      {
        href: 'https://www.netlifycms.org/',
        name: 'Netlify CMS',
        iconSrc: require('~/assets/images/netlify-cms.png'),
      },
      {
        href: 'https://www.netlify.com/',
        name: 'Netlify',
        iconSrc: require('~/assets/images/netlify.svg'),
      },
      {
        href: 'https://tailwindcss.com/',
        name: 'TailwindCSS',
        iconSrc: require('~/assets/images/tailwind.svg'),
      },
    ];
  }
}
</script>

<style></style>
