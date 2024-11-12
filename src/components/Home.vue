<template>
  <div class="v-home s-container">
      <img class="s-page-header" alt="Association Relier logo" src="../assets/relier_logo.png">
    <div class="app-section-box">
      <section class="app-section-box__section" id="association">
        <h1>
          L'association
        </h1>

        <div class="s-page_content">

          <p>L’association RELIER a pour mission est de créer du lien, de renforcer la solidarité et de favoriser l'inclusion sociale des personnes issus de la migration présente sur le canton de Genève.</p>
          <p>À travers nos actions, nous nous efforçons de tisser un réseau de solidarité où chacun peut trouver un soutien adapté à ses besoins. Qu'il s'agisse de soutien psychologique, d'accompagnement social, d'accès à des ressources essentielles ou de la mise en place d'activités collectives pour briser l'isolement, notre objectif est de renforcer les liens humains, promouvoir le vivre-ensemble et bâtir un avenir plus solidaire et inclusif.</p>
          <p>L’association RELIER est née au printemps 2024 pour proposer un accompagnement novateur et agile pour favoriser l’insertion et s’inscrire dans un monde robuste. Les modèles d’accompagnement s’inspirent de « l’Aller Vers » et partage les valeurs de l’éducation populaire.</p>

          <div>
            <blockquote>
              <p>"L'éducation populaire n'est pas seulement une pédagogie, mais une démarche militante qui va à la rencontre des gens pour co-construire du savoir et de la citoyenneté."</p>
            </blockquote>
            <p>— Pépin Maryvonne. <cite>"L’éducation populaire : Histoire et postérité d’une utopie d’émancipation."</cite></p>
          </div>


        </div>
      </section>
      <section class="app-section-box__section" id="inspiration">
        <h1>Prestations</h1>
        <div class="s-page_content">
          <h2>Pour répondre à ses missions, l’association RELIER développe des prestations a destination du public cible et de la société civile.</h2>

          <h3>L’accompagnement de transition :</h3>

          <p>
            l’association Relier propose des accompagnements atypiques et novateurs en s’appuyant sur la mobilisation de
            la personne accompagnée, comme axe central de la démarche.
            Notre approche se distingue par son caractère individualisé et flexible pour créer des espaces de rencontre
            et d’apprentissage en dehors des cadres institutionnels.
          </p>

          <p>
            L’accompagnement est orienté sur le quotidien et l’environnement de la personne favorisent l’échange
            d’expérience, renforcent des compétences sociales et professionnelles, ainsi que l’intégration dans la
            société, la société d’accueil.
            En coopération avec le réseau, les actions entreprises sont coordonnées dans le but de dénouer et faire
            évoluer la situation. La posture de facilitation fait partie intégrante de l’accompagnement pour faire avec
            la personne et non à la&nbsp;place&nbsp;de.
          </p>
          <p>
            Le rôle de facilitateurs de transition, permets d’observer la personne dans son fonctionnement pour définir,
            avec elle, un plan d’action favorisant son inclusion dans la cité.
            Pour atteindre ses buts, l’association RELIER développe des partenariats dans l’environnement Genevois et
            avec le Bureau d’Intégration Citoyenne.
          </p>

          <h3>L’interprétariat Communautaire :</h3>


          <p>
            L'interprétariat communautaire est un service essentiel qui facilite la communication entre les personnes ne
            maîtrisant pas le français et les institutions publiques ou privées du canton de Genève.
            Que ce soit dans les hôpitaux, les écoles, les tribunaux ou les services sociaux, nos interprètes qualifiés
            garantissent que chaque individu puisse comprendre et être compris, assurant ainsi un accès équitable aux
            services essentiels et la participation active à la vie locale.
          </p>


          <div>
            <blockquote>
              <p>« Chacun doit avoir la possibilité d'accéder aux services publics sans être freiné par des barrières linguistiques, conformément au principe d’égalité inscrit dans la Constitution fédérale. » </p>
            </blockquote>
            <p style="text-align: right">— Article 8, <cite>Constitution fédérale suisse.</cite></p>
          </div>

          <p>Avec notre service d'interprétariat communautaire, chaque individu à Genève peut accéder aux services essentiels sans être limité par la langue.</p>

          <p style="text-align: center">
            Une demande d’interprétariat, besoin d’une information ?
            <br><a href="mailto:interpretariat@relier.ch">interpretariat@relier.ch</a>
          </p>



        </div>
      </section>
      <section class="app-section-box__section" id="about">
        <h1>À propos</h1>

        <div class="s-page_content">
          <div class="s-page_content" style="text-align: center">
            <p>[à venir…]</p>
          </div>
        </div>

      </section>
      <section class="app-section-box__section" id="contact">
        <h1>
          Contact
        </h1>

        <div class="s-page_content" style="text-align: center">
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

      </section>
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
