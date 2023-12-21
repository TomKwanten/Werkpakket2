<template>
  <div>
    <section class="popular-products">
      {{ productsData }}
      <div v-for="product in popularProducts" :key="product.id" class="product">
        <router-link :to="`/product/${product.id}`" class="product-link">
          <img :src="product.image" :alt="product.title">
          <h3>{{ product.title }}</h3>
          <span class="price">{{ product.price }}</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    productsData: Array,
  },
  computed: {
    popularProducts() {
      const sortedProducts = this.productsData ? this.productsData.sort((a, b) => b.stock - a.stock) : [];
      const top4Products = sortedProducts.slice(0, 4);
      console.log('Top 4 products:', top4Products);
      return top4Products;
    },
  },
  mounted() {
    console.log('Received productsData in PopularProductsComponent:', this.productsData);
  },
};
</script>

<style scoped>
</style>
