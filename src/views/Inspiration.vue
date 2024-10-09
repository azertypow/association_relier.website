<template>
    <div class="v-inspiration s-container">

        <img class="s-page-header" alt="Association Relier logo" src="../assets/relier_logo.png">

        <h1>Inspiration d'accompagnement</h1>

        <div class="s-page_content">
            <p>À travers des démarches de mise en relation et de collaboration, l’association Relier poursuit les buts suivants:</p>
            <ul>
                <li>Offrir un accompagnement individualisé et flexible</li>
                <li>Faciliter l’intégration sociale et culturelle</li>
                <li>Promouvoir l’autonomie et l’inclusion</li>
                <li>Réduire l’isolement</li>
                <li>Renforcer le lien social</li>
                <li>Créer des sociétés plus inclusives, diversifiées et solidaires</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EndedPageInfo from "@/components/EndedPageInfo.vue"

export default defineComponent({
    name: 'Inspiration',
    components: {
        EndedPageInfo
    },
});
</script>

<style scoped lang="scss">

</style>
