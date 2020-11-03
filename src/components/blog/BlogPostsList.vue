<template>
  <ul class="flex flex-wrap">
    <li
      v-for="(post, index) in blogPosts"
      :key="index"
      :class="{ 'w-full md:w-1/2 lg:w-1/3': compactDisplay }"
      class="w-full p-4"
    >
      <n-link :to="post.slug" class="block bg-gray-100 rounded shadow">
        <img :src="post.featureImage" class="mb-4 rounded-t" />
        <div class="px-4 pb-4">
          <h3 class="text-lg font-bold mb-2">{{ post.title }}</h3>
          <div class="text-gray-700 text-sm mb-4">
            {{ getDatePosted(post.date) }}
          </div>
          <p>{{ post.teaser }}</p>
        </div>
      </n-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DateTime } from 'luxon';

@Component
export default class BlogPostsList extends Vue {
  @Prop({ type: Array, required: true })
  blogPosts!: any[];

  @Prop({ type: Boolean, default: false })
  compactDisplay!: boolean;

  getDatePosted(date: string): string {
    return DateTime.fromISO(date).toLocaleString();
  }
}
</script>

<style></style>
