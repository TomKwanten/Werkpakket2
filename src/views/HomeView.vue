<!--op deze pagina staat geen top 4 van populaire producten, ik heb vanalles 
  geprobeerd paar kreeg steeds een foutmelding in de console of de data 
  kon niet worden opgehaald (arrays voor data waren steeds leeg in de console)
  Ik heb de code voor dit in de PopularProductComponent en ProductcardComponent 
  laten staan zodat ik toch nog iets heb -->

<template>
  <div>
    <section class="section-beschrijving">
      <h2>{{ beschrijving.titel }}</h2>
      <h3>{{ beschrijving.tussentitel }}</h3>
      <p>{{ beschrijving.p1 }}</p>
      <p>{{ beschrijving.p2 }}</p>
      <p>{{ beschrijving.p3 }}</p>
      <p>{{ beschrijving.p4 }}</p>
      <router-link to="/overzicht"><p>{{ link_tekst }}</p></router-link>
    </section>

    <h2 class="titel-producten">{{ product.titel }}</h2>
    <section class="product-section-start">

      <PopularProductsComponent :productsData="productsData" @update-popular-products="updatePopularProducts"></PopularProductsComponent>

      <div v-for="product in popularProducts" :key="product.id" class="product">
        <router-link :to="`/product/${product.id}`" @click="updateSelectedProduct(product)">
          <img :src="product.image" :alt="product.title">
          <h3>{{ product.title }}</h3>
          <span class="price">{{ product.price }}</span>
        </router-link>
      </div>
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
      product: {
        titel: "Populaire producten"
      },
      productsData: [], 
      popularProducts: [],
      link_tekst: "ontdek hier" 
    };
  },

  methods: {
    updatePopularProducts(products) {
      console.log('Received products:', products);
      this.popularProducts = products;
    },
    updateSelectedProduct(product) {
      console.log('Selected product:', product);
    },
  },
};
</script>

<style>
</style>
