<template>
  <div class="v-contact s-container">
    <img class="s-page-header" alt="Association Relier logo" src="../assets/relier_logo.png">

    <h1>
      Contact
    </h1>

    <div class="s-page_content">
        <h2>
            <a href="mailto:contact@relier.ch" target="_blank">contact@relier.ch</a>
            <br>www.relier.ch
        </h2>

        <p>
            <br>c/o Maison Kultura
            <br>17 Rue des Savoises
            <br>1205 Genève
        </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EndedPageInfo from "@/components/EndedPageInfo.vue"

export default defineComponent({
  name: 'Contact',
  components: {
    EndedPageInfo
  },
});
</script>

<style lang="scss" scoped>
.v-contact {

}
</style>
