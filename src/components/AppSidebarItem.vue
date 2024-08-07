<script setup lang="ts">
defineProps<{
  label: string
  path: string
  iconName: string
  iconNamespace?: string
}>()

const route = useRoute()
</script>

<template>
  <router-link class="w-full block" :to="path">
    <var-button
      class="rounded-2! h-17! w-full"
      :class="{ 'text-primary! bg-hsl-primary/25!': route.path === path }"
      text
    >
      <div class="flex flex-col space-y-2">
        <var-icon
          class="text-5xl!"
          :namespace="iconNamespace"
          :name="iconName"
        />
        <span class="text-md">{{ label }}</span>
      </div>
    </var-button>
  </router-link>
</template>
