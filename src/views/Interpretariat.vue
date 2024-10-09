<template>
    <div class="v-interpretariat s-container">
        <img class="s-page-header" alt="Association Relier logo" src="../assets/relier_logo.png">

        <h1>Public accompagné et partenaires</h1>

        <div class="s-page_content">
            <div class="s-page_content">
                <p>Des personnes issues de la migration. Les partenaires sont principalement les institutions présentes sur le canton, Hospice Général, HUG, la ville et le canton de Genève.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EndedPageInfo from "@/components/EndedPageInfo.vue"

export default defineComponent({
    name: 'Interpretariat',
    components: {
        EndedPageInfo
    },
});
</script>

<style scoped lang="scss">

</style>
