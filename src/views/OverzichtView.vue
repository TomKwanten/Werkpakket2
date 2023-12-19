<script>
import productsData from '../../products.json';

export default {
  data() {
    return {
      beschrijving: {
        titel: "Welkom bij RaveWear",
        beschrijving: "Bij RaveWear begrijpen we de opwinding en vrijheid die gepaard gaan met het beleven van raves. Wij zijn trots om een uitgebreide online winkel voor ravers aan te bieden waar de nieuwste en de meest opwindende rave-kleding en accessoires te vinden zijn.",
      },
      products: productsData.products,
      filteredProducts: [],
      filter: {
        productType: 'alle',
        productColor: 'alle',
      },
    };
  },
  methods: {
    filterProducts() {
      // Filter de producten op basis van de geselecteerde opties
      this.filteredProducts = this.products.filter(product => {
        const typeCondition = this.filter.productType === 'alle' || product.title.toLowerCase().includes(this.filter.productType.toLowerCase());
        const colorCondition = this.filter.productColor === 'alle' || product.title.toLowerCase().includes(this.filter.productColor.toLowerCase());
        return typeCondition && colorCondition;
      });
    },
  },
  mounted() {
    // Laad de producten bij het inladen van de pagina
    this.filterProducts();
  },
};
</script>

<template>
  <section class="container-intro">
    <h1>{{ beschrijving.titel }}</h1>
    <p>{{ beschrijving.beschrijving }}</p> 
  </section>
  <br>
  <form class="container-form" @submit.prevent="filterProducts">
    <label for="product-type">Soort product:</label>
    <select v-model="filter.productType" id="product-type">
      <option value="alle">Alle</option>
      <option value="hoedjes">Hoedjes en petten</option>
      <option value="brillen">Rave brillen</option>
      <option value="tasjes">Rave tasjes</option>
      <option value="waaiers">Rave waaiers</option>
    </select>
    
    <label for="product-color">Kleur:</label>
    <select v-model="filter.productColor" id="product-color">
      <option value="alle">Alle</option>
      <option value="zwart">Zwart</option>
      <option value="blauw">Blauw</option>
      <option value="overigekleuren">Overige kleuren</option>
    </select>
    
    <input type="submit" value="Filteren">
  </form>
  
  <section class="container-product1">
    <div v-for="product in filteredProducts" :key="product.id" class="product">
      <a :href="'product.html?id=' + product.id" class="product-link">
        <img :src="product.image" :alt="product.title">
        <h3>{{ product.title }}</h3>
        <span class="price">{{ product.price }}</span>
      </a>
    </div>
  </section>
</template>

<style></style>
