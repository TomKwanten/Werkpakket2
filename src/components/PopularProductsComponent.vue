<template>
  <div>
    <section class="popular-products">
      <div v-for="product in popularProducts" :key="product.id" class="product">
        <a :href="'product.html?id=' + product.id" class="product-link">
          <img :src="product.image" :alt="product.title">
          <h3>{{ product.title }}</h3>
          <span class="price">{{ product.price }}</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import productsData from '../../products.json';

export default {
  data() {
    return {
      products: productsData.products,
    };
  },
  computed: {
    popularProducts() {
      // Sorteer de producten op basis van de hoeveelheid voorraad (stock) in aflopende volgorde
      const sortedProducts = this.products.sort((a, b) => b.stock - a.stock);

      // Neem de top 4 populairste producten
      const top4Products = sortedProducts.slice(0, 4);

      return top4Products;
    },
  },
};
</script>

<style scoped>
/* Voeg indien nodig stijlen toe voor de opmaak van de populaire producten */
</style>