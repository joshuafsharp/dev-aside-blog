<template>
  <div class="w-full max-w-screen-lg mx-auto p-4 lg:p-8">
    <HeroCard class="mb-8 md:mb-16" />

    <TechList class="mb-8 md:mb-16" />

    <!-- Blog posts list -->
    <h2 class="text-2xl text-gray-700 font-bold text-center mb-8">
      &#65293; Recent Posts &#65293;
    </h2>

    <BlogPostsList
      :blog-posts="posts"
      :compact-display="true"
      class="-mx-4 mb-8"
    />

    <div class="flex justify-center mb-8">
      <n-link
        to="/blog"
        class="bg-blue-400 hover:bg-blue-300 rounded px-8 py-4 text-white font-bold"
      >
        Show All
      </n-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content('blog').sortBy('date').limit(6).fetch();
    } catch (e) {
      error({ statusCode: 404, message: 'Blog Post not found' });
    }

    return {
      posts,
    };
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    };
  },
})
export default class HomePage extends Vue {}
</script>
