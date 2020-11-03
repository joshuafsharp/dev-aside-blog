<template>
  <div class="w-full max-w-screen-md mx-auto p-4 lg:p-8">
    <h1 class="text-3xl font-bold mb-8">Blog</h1>

    <BlogPostsList :blog-posts="posts" class="-mx-4" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content('blog').sortBy('date').fetch();
    } catch (e) {
      error({ statusCode: 404, message: 'Blog Post not found' });
    }

    return {
      posts,
    };
  },
})
export default class BlogPage extends Vue {}
</script>

<style></style>
