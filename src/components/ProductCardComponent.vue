<template>
  <div>
    <section class="container-intro">
      <h1>{{ beschrijving.titel }}</h1>
      <p>{{ beschrijving.beschrijving }}</p>
    </section>

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
        <option value="overig">Overige kleuren</option>
      </select>

      <button type="submit">Filteren</button>
    </form>

    <section class="container-product1">
      <div v-for="product in paginatedProducts" :key="product.id" class="product">
        <router-link :to="`/product/${product.id}`" @click="updateSelectedProduct(product)">
          <img :src="product.image" :alt="product.title">
          <h3>{{ product.title }}</h3>
          <span class="price">{{ product.price }}</span>
        </router-link>
      </div>
    </section>

    <div class="pagination">
      <button @click="changePage(-1)" :disabled="currentPage === 1">Vorige</button>
      <span>{{ currentPage }}</span>
      <button @click="changePage(1)" :disabled="currentPage === totalPages">Volgende</button>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore';
import productsData from "../../products.json";



export default {
  data() {
    return {
      beschrijving: {
        titel: "Welkom bij RaveWear",
        beschrijving:
          "Bij RaveWear begrijpen we de opwinding en vrijheid die gepaard gaan met het beleven van raves. Wij zijn trots om een uitgebreide online winkel voor ravers aan te bieden waar de nieuwste en de meest opwindende rave-kleding en accessoires te vinden zijn.",
      },
      filter: {
        productType: "alle",
        productColor: "alle",
      },
      products: productsData.products,
      itemsPerPage: 8,
      currentPage: 1,
    };
  },
  computed: {
    filteredProducts() {
      const filtered = this.products.filter((product) => {
        const typeCondition =
          this.filter.productType === "alle" || product.productType === this.filter.productType;
        const colorCondition =
          this.filter.productColor === "alle" || product.color.toLowerCase() === this.filter.productColor;

        return typeCondition && colorCondition;
      });

      return filtered;
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
  },
  methods: {
    filterProducts() {
    },
    changePage(value) {
      this.currentPage += value;
    },
    updateSelectedProduct(product) {
      // Voeg deze regel toe
      console.log('Selected product:', product);

      // Roep de setSelectedProduct-actie aan
      useProductStore().setSelectedProduct(product);
    },
  }
}
</script>

<style scoped>
/* Voeg hier je stijlen toe */
</style>
