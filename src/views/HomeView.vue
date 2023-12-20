<template>
    <div>
      <section class="section-beschrijving">
        <h2>{{ beschrijving.titel }}</h2>
        <h3>{{ beschrijving.tussentitel }}</h3>
        <p>{{ beschrijving.p1}}</p>
        <p>{{ beschrijving.p2 }}</p>
        <p>{{ beschrijving.p3 }}</p>
        <p>{{ beschrijving.p4 }}</p>
        <router-link to="/overzicht">Ontdek hier</router-link>
      </section>
  
      <router-view></router-view>
  
      <h2 class="titel-producten">Populaire producten</h2>
      <section class="product-section-start">
        <!-- Vervang de onderstaande regel met de PopularProductsComponent -->
        <popular-products-component></popular-products-component>
      </section>
    </div>
</template>
  
<script>
  import PopularProductsComponent from "../components/PopularProductsComponent.vue";
  
  export default {
    components: {
      PopularProductsComponent,
    },
    data() {
      return {
        beschrijving: {
          titel: 'Welkom bij RaveWear',
          tussentitel: 'Een korte omschrijving van alle producten dat wij aanbieden',
          p1: 'Rave-hoedjes en -petten zijn populaire accessoires die vaak worden gedragen raves. Ze voegen niet alleen een stijlvolle en eigenzinnige uitstraling toe aan een outfit, maar dienen ook praktische doelen zoals het beschermen tegen zonlicht en het verbeteren van de algehele uitstraling.',
          p2: 'Rave-brillen zijn populaire accessoires die vaak worden gedragen op raves. Deze brillen zijn ontworpen om visueel opvallend en soms experimenteel te zijn, en ze kunnen de ervaring van lichtshows en visuele effecten verbeteren.',
          p3: 'Rave-tasjes zijn kleine tassen of heuptasjes die speciaal zijn ontworpen voor gebruik op raves. Deze tasjes zijn praktisch, stijlvol en ideaal om enkele essentiële items bij je te dragen terwijl je aan het raven bent.',
          p4: 'Rave-waaiers zijn populaire accessoires op raves. Ze zijn ontworpen om verkoeling te bieden, stijlvol te zijn en te dienen als een visueel statement.',
        },
      };
    },
  };
</script>
  
<style>
</style>
  