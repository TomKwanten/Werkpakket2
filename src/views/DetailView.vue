<template>
    <div>
      <section class="product-details" v-if="product">
        <h2 class="product-title">{{ product.title }}</h2>
        <div class="product-content">
          <img :src="product.image" :alt="product.title" class="product">
          <div class="description">
            <p>{{ product.description }}</p>
            <p class="price">Prijs: {{ product.price }}</p>
            <button class="add-to-cart" @click="addToCart">Toevoegen aan winkelwagen</button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
<script>
  import { useProductStore } from '../stores/productStore';
  
  export default {
    computed: {
      product() {
        return useProductStore().selectedProduct;
      },
    },
  };
</script>
  
  <style scoped>
  .product-title {
    color: white;
  }
  </style>
  