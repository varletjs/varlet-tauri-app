<script setup lang="ts">
import { useDark } from '@/composables'
import { config } from '@/config'

const { toggleDark } = useDark()

function handleAccountChange(value: string) {
  if (value === 'sign-out') {
    Snackbar('WIP')
  }

  if (value === 'switch-theme') {
    toggleDark()
  }
}
</script>

<template>
  <div
    class="sticky flex flex-col top-0 py-2 justify-between items-center px-2 w-22 h-screen bg-surface-container"
  >
    <div class="flex flex-col items-center space-y-2 w-full overflow-auto">
      <app-sidebar-item
        v-for="item in config.sidebar.items"
        :key="item.path"
        :path="item.path"
        :label="item.label"
        :icon-name="item.iconName"
        :icon-namespace="item.iconNamespace"
      />
    </div>

    <div class="w-full">
      <app-sidebar-account @change="handleAccountChange" />
    </div>
  </div>
</template>
