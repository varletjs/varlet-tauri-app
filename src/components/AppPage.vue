<template>
  <div
    class="relative min-h-screen"
    :class="{ 'pb-[var(--app-bar-height)]': $slots['bottom-bar'] }"
  >
    <slot />

    <app-page-bottom-bar v-if="$slots['bottom-bar']">
      <slot name="bottom-bar" />
    </app-page-bottom-bar>
  </div>
</template>
