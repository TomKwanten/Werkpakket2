<template>
  <div>
    <section class="container-intro">
      <h1>{{ beschrijving.titel }}</h1>
      <p>{{ beschrijving.beschrijving }}</p>
    </section>

    <form class="container-form" @submit.prevent="filterProducts">
      <label for="product-type">{{ type.label }}</label>
      <select v-model="filter.productType" id="product-type">
        <option value="alle">{{ type.alle }}</option>
        <option value="hoedjes">{{ type.hoeden }}</option>
        <option value="brillen">{{ type.brillen }}</option>
        <option value="tasjes">{{ type.tassen }}</option>
        <option value="waaiers">{{ type.waaiers }}</option>
      </select>

      <label for="product-color">{{ kleur.label }}</label>
      <select v-model="filter.productColor" id="product-color" class="form">
        <option value="alle">{{ kleur.alle }}</option>
        <option value="zwart">{{ kleur.zwart }}</option>
        <option value="blauw">{{ kleur.blauw }}</option>
        <option value="overig">{{ kleur.overige }}</option>
      </select>
      <button type="submit" class="filterknop">{{ button.filter }}</button>
    </form>

    <section class="container-product1">
      <div v-for="product in paginatedProducts" :key="product.id" class="product">
        <router-link :to="`/product/${product.id}`" @click="updateSelectedProduct(product)">
          <img class="image" :src="product.image" :alt="product.title">
          <h3 class="titel">{{ product.title }}</h3>
          <span class="price">{{ product.price }}</span>
        </router-link>
      </div>
    </section>

    <div class="pagination">
      <button @click="changePage(-1)" :disabled="currentPage === 1">{{ button.terug }}</button>
      <span>{{ currentPage }}</span>
      <button @click="changePage(1)" :disabled="currentPage === totalPages">{{ button.verder }}</button>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore';
import productsData from "../../products.json";



export default {
  props: {
    productsData: Array,
  },
  mounted() {
    console.log(this.productsData);
  },
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
      type: {
        label: "Soort product:",
        alle: "Alles",
        hoeden: "Hoedjes en petten",
        brillen: "Rave brillen",
        tassen: "Rave tasjes",
        waaiers: "Rave waaiers",
      },
      kleur: {
        label: "Kleur:",
        alle: "Alles",
        zwart: "Zwart",
        blauw: "Blauw",
        overige: "Overige kleuren",
      },
      button: {
        filter: "Filteren",
        terug: "Vorige",
        verder: "Volgende",
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
      console.log('Selected product:', product);
      useProductStore().setSelectedProduct(product);
    },
  }
}
</script>

<style scoped>
.image{ 
  width: auto;
  height: auto;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px; 
}
.pagination button {
  margin: 0 15px; 
  border: 2px solid  #cd1d66;
  border-radius: 5px;
  color: white;
  background-color: black;
  padding: 5px 15px;
}
.pagination button:disabled {
  background-color: #ccc; 
  cursor: not-allowed;
}

.form {
  margin-bottom: 12px;
}
.filterknop{
  border: 2px solid  #cd1d66;
  border-radius: 5px;
  background-color: #d6226d;
  padding: 5px 20px 5px 20px;
}


</style>
