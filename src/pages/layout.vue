<template>
  <div class="flex items-start relative">
    <div class="hidden sm:block">
      <app-sidebar />
    </div>

    <div class="w-full">
      <div class="block sm:hidden">
        <app-top-bar />
      </div>

      <router-view />
    </div>
  </div>
</template>
