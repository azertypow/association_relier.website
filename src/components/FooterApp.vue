<template>
  <div class="v-footer-app">
      <ended-page-info/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EndedPageInfo from "@/components/EndedPageInfo.vue";

export default defineComponent({
  name: 'FooterApp',
  components: {
      EndedPageInfo
  },
});
</script>

<style lang="scss" scoped>
@import "../style/main";

.v-footer-app {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: var(--site-color) 0 0 20px 10px;
  background: var(--site-color);
}

.v-footer-app__logo {
  width: 60px;
  display: block;
  padding-left:   var(--gutter);
  padding-top:    calc( var(--gutter) / 2 );
  padding-bottom: calc( var(--gutter) / 2 );
}
</style>
