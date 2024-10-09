<template>
  <div class="v-home s-container">
      <img class="s-page-header" alt="Association Relier logo" src="../assets/relier_logo.png">

    <h1>
      Nous
    </h1>

    <div class="s-page_content">
        <h2>L'association Relier, qu'est-ce que c'est?</h2>
        <p>L’association Relier a pour mission d’une part de favoriser l'insertion des personnes qu'elles</p>
        <p>accompagnent en encourageant leur autonomie au quotidien et dans leur environnement.</p>
        <p>Et d’autre part, elle contribue à l’observation des fonctionnements institutionnels en agissant comme facilitatrice dans la coordination du réseau qui entoure les personnes, et assure une veille sur les dispositifs d'insertion sociale existants.</p>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EndedPageInfo from "@/components/EndedPageInfo.vue"

export default defineComponent({
  name: 'Home',
  components: {
    EndedPageInfo
  },
});
</script>

<style scoped lang="scss">

</style>
