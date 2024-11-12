<template>
  <div class="v-ended-page-info">
    <a href="mailto:contact@relier.ch" target="_blank">contact@relier.ch</a>
    <div style="font-size: .75rem">Salômé Guillemin & studio guez</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EndedPageInfo',
  components: {
  },
});
</script>

<style lang="scss" scoped>
.v-ended-page-info {
  line-height: 1em;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
