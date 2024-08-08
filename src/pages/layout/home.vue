<template>
  <app-page>
    <app-page-header title="Home" description="This is the home page" />

    <app-page-content>
      <div class="grid lg:grid-cols-4 gap-20px">
        <var-card v-for="i in 20" :key="i">
          <div>Item</div>
        </var-card>
      </div>
    </app-page-content>

    <template #bottom-bar>
      <div class="space-x-3">
        <var-button
          type="primary"
          round
          icon-container
          :elevation="0"
        >
          <var-icon name="plus" />
        </var-button>
        <var-button
          type="info"
          round
          icon-container
          :elevation="0"
        >
          <var-icon name="information" />
        </var-button>
        <var-button
          type="success"
          round
          icon-container
          :elevation="0"
        >
          <var-icon name="check" />
        </var-button>
        <var-button
          type="warning"
          round
          icon-container
          :elevation="0"
        >
          <var-icon name="warning" />
        </var-button>
        <var-button
          type="danger"
          round
          icon-container
          :elevation="0"
        >
          <var-icon name="window-close" />
        </var-button>
      </div>
    </template>
  </app-page>
</template>
