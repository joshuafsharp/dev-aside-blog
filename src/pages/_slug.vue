<template>
  <div>
    <img
      :src="post.featureImage"
      class="mx-auto max-w-screen-lg rounded-b shadow"
    />
    <div class="w-full max-w-screen-md mx-auto p-4 lg:p-8">
      <h1 class="text-3xl font-bold mb-8">{{ post.title }}</h1>
      <p class="text-gray-700 mb-4">{{ datePosted }}</p>
      <Nuxt-Content :document="post" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DateTime } from 'luxon';

@Component({
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content('blog', params.slug).fetch();
    } catch (e) {
      error({ statusCode: 404, message: 'Blog Post not found' });
    }

    return {
      post,
    };
  },
})
export default class BlogPost extends Vue {
  post: any;

  get datePosted(): string {
    if (!this.post) {
      return '';
    }

    return DateTime.fromISO(this.post.date).toLocaleString();
  }
}
</script>

<style lang="postcss">
.nuxt-content h1 {
  @apply text-3xl font-bold my-8;
}

.nuxt-content h2 {
  @apply text-2xl font-bold my-4;
}

.nuxt-content p {
  @apply mb-4;
}
</style>
